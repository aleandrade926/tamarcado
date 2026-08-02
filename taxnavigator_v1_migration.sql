-- PASSO 2: Migration Idempotente

-- 1. Empresas (caso nao exista)
CREATE TABLE IF NOT EXISTS public.taxmanagers_companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  razao_social TEXT,
  nome_fantasia TEXT,
  cnpj TEXT,
  domain TEXT,
  setor TEXT,
  linkedin_url TEXT,
  parceiro_id UUID REFERENCES public.taxmanagers_partners(id) ON DELETE SET NULL,
  slug TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. FKs em leads (caso nao existam)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='taxmanagers_leads' AND column_name='company_id') THEN
    ALTER TABLE public.taxmanagers_leads ADD COLUMN company_id UUID REFERENCES public.taxmanagers_companies(id) ON DELETE SET NULL;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='taxmanagers_leads' AND column_name='candidate_company_id') THEN
    ALTER TABLE public.taxmanagers_leads ADD COLUMN candidate_company_id UUID REFERENCES public.taxmanagers_companies(id) ON DELETE SET NULL;
  END IF;
END $$;

-- 3. Negócios (Deals)
CREATE TABLE IF NOT EXISTS public.taxmanagers_negocios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID REFERENCES public.taxmanagers_companies(id) ON DELETE CASCADE,
  contato_principal_id UUID REFERENCES public.taxmanagers_leads(id) ON DELETE SET NULL,
  etapa TEXT,
  valor_potencial NUMERIC(12,2),
  modelo_remuneracao TEXT,
  success_fee NUMERIC(5,2),
  origem TEXT,
  responsavel_id UUID REFERENCES public.taxmanagers_partners(id) ON DELETE SET NULL,
  parceiro_id UUID REFERENCES public.taxmanagers_partners(id) ON DELETE CASCADE,
  proxima_acao TEXT,
  prazo TIMESTAMP WITH TIME ZONE,
  historico TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Oportunidades (Tax Opportunities)
CREATE TABLE IF NOT EXISTS public.taxmanagers_oportunidades (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  negocio_id UUID REFERENCES public.taxmanagers_negocios(id) ON DELETE CASCADE,
  classificacao TEXT,
  mecanismo TEXT,
  consequencia_economica TEXT,
  fatos_confirmados TEXT,
  hipoteses TEXT,
  evidencias TEXT,
  urgencia_legitima TEXT,
  risco TEXT,
  confianca TEXT,
  documentos_necessarios TEXT,
  mensagem_foot_in_the_door TEXT,
  parceiro_id UUID REFERENCES public.taxmanagers_partners(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Entregas (Deliverables)
CREATE TABLE IF NOT EXISTS public.taxmanagers_entregas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  oportunidade_id UUID REFERENCES public.taxmanagers_oportunidades(id) ON DELETE CASCADE,
  tipo_entrega TEXT,
  dossie_paths TEXT,
  parceiro_id UUID REFERENCES public.taxmanagers_partners(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS E POLÍTICAS
ALTER TABLE public.taxmanagers_companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.taxmanagers_negocios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.taxmanagers_oportunidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.taxmanagers_entregas ENABLE ROW LEVEL SECURITY;

-- (Ignorando se a política já existe ou usando DROP POLICY IF EXISTS... simplificando usando DO BLOCK)
DO $$
BEGIN
  -- Empresas
  DROP POLICY IF EXISTS "Parceiros gerenciam suas proprias empresas" ON public.taxmanagers_companies;
  CREATE POLICY "Parceiros gerenciam suas proprias empresas" 
  ON public.taxmanagers_companies FOR ALL 
  USING (parceiro_id = auth.uid() OR public.is_taxmanagers_admin());

  -- Negocios
  DROP POLICY IF EXISTS "Parceiros gerenciam seus proprios negocios" ON public.taxmanagers_negocios;
  CREATE POLICY "Parceiros gerenciam seus proprios negocios" 
  ON public.taxmanagers_negocios FOR ALL 
  USING (parceiro_id = auth.uid() OR public.is_taxmanagers_admin());

  -- Oportunidades
  DROP POLICY IF EXISTS "Parceiros gerenciam suas proprias oportunidades" ON public.taxmanagers_oportunidades;
  CREATE POLICY "Parceiros gerenciam suas proprias oportunidades" 
  ON public.taxmanagers_oportunidades FOR ALL 
  USING (parceiro_id = auth.uid() OR public.is_taxmanagers_admin());

  -- Entregas
  DROP POLICY IF EXISTS "Parceiros gerenciam suas proprias entregas" ON public.taxmanagers_entregas;
  CREATE POLICY "Parceiros gerenciam suas proprias entregas" 
  ON public.taxmanagers_entregas FOR ALL 
  USING (parceiro_id = auth.uid() OR public.is_taxmanagers_admin());
END $$;

-- Recarregar esquema
NOTIFY pgrst, 'reload schema';
