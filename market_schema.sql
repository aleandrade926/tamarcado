-- --- SCHEMA DE BANCO DE DADOS PARA TODEACORDO MARKET ---
-- Fase 1 do MVP: Tabelas principais, relacionamentos e RLS (Row Level Security)

-- 1. Tabela de Perfis de Usuários (Admin e Afiliados)
-- Essa tabela estende auth.users do Supabase
CREATE TABLE IF NOT EXISTS public.market_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'affiliate' CHECK (role IN ('admin', 'affiliate')),
  affiliate_code TEXT UNIQUE NOT NULL, -- Código usado na URL ?ref=CODIGO
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de Produtos do Marketplace
CREATE TABLE IF NOT EXISTS public.market_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  benefits JSONB DEFAULT '[]'::jsonb, -- Array de benefícios
  price NUMERIC(12,2) NOT NULL DEFAULT 0.00,
  commission_rate NUMERIC(5,2) NOT NULL DEFAULT 0.00, -- Ex: 30.00 para 30%
  access_link TEXT, -- Link externo para comprar o SaaS
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Cliques (Rastreamento de afiliados)
CREATE TABLE IF NOT EXISTS public.market_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  affiliate_id UUID REFERENCES public.market_profiles(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.market_products(id) ON DELETE CASCADE,
  ip_address TEXT, -- Opcional: registrar IP para evitar fraude/duplicação
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de Vendas e Comissões
CREATE TABLE IF NOT EXISTS public.market_sales (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES public.market_products(id) ON DELETE SET NULL,
  affiliate_id UUID REFERENCES public.market_profiles(id) ON DELETE SET NULL, -- Null se a venda não teve afiliado
  amount NUMERIC(12,2) NOT NULL DEFAULT 0.00, -- Valor total pago pelo cliente
  commission_amount NUMERIC(12,2) NOT NULL DEFAULT 0.00, -- Valor calculado da comissão do afiliado
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --- SEGURANÇA ROW LEVEL SECURITY (RLS) ---

ALTER TABLE public.market_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_sales ENABLE ROW LEVEL SECURITY;

-- --- POLÍTICAS DE ACESSO (POLICIES) ---

-- Função auxiliar para verificar se é admin
CREATE OR REPLACE FUNCTION public.is_market_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.market_profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Políticas para market_profiles
CREATE POLICY "Usuários podem ver o próprio perfil" 
ON public.market_profiles FOR SELECT 
USING (auth.uid() = id OR public.is_market_admin());

CREATE POLICY "Usuários podem atualizar o próprio perfil" 
ON public.market_profiles FOR UPDATE 
USING (auth.uid() = id OR public.is_market_admin());

-- Políticas para market_products
CREATE POLICY "Qualquer um pode ver produtos ativos" 
ON public.market_products FOR SELECT 
USING (is_active = TRUE OR public.is_market_admin());

CREATE POLICY "Apenas admin pode inserir/modificar produtos" 
ON public.market_products FOR ALL 
USING (public.is_market_admin());

-- Políticas para market_clicks
CREATE POLICY "Afiliados veem apenas seus próprios cliques" 
ON public.market_clicks FOR SELECT 
USING (affiliate_id = auth.uid() OR public.is_market_admin());

CREATE POLICY "Sistema pode registrar cliques publicamente" 
ON public.market_clicks FOR INSERT 
WITH CHECK (TRUE); -- Permitir inserção anônima se a pessoa não estiver logada, para rastrear visitante

-- Políticas para market_sales
CREATE POLICY "Afiliados veem apenas suas próprias vendas" 
ON public.market_sales FOR SELECT 
USING (affiliate_id = auth.uid() OR public.is_market_admin());

CREATE POLICY "Apenas admin pode registrar ou aprovar vendas" 
ON public.market_sales FOR ALL 
USING (public.is_market_admin());

-- View opcional para facilitar consulta de saldo do afiliado
CREATE OR REPLACE VIEW public.market_affiliate_balances AS
SELECT 
    affiliate_id,
    SUM(CASE WHEN status = 'approved' THEN commission_amount ELSE 0 END) AS available_balance,
    SUM(CASE WHEN status = 'pending' THEN commission_amount ELSE 0 END) AS pending_balance
FROM public.market_sales
GROUP BY affiliate_id;
