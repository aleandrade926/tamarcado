-- MIGRATION: Friendly URLs (slugs) para Pessoas e Empresas

-- 1. Adicionar coluna slug em taxmanagers_leads se nao existir
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='taxmanagers_leads' AND column_name='slug') THEN
    ALTER TABLE public.taxmanagers_leads ADD COLUMN slug TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='taxmanagers_companies' AND column_name='slug') THEN
    ALTER TABLE public.taxmanagers_companies ADD COLUMN slug TEXT;
  END IF;
END $$;

-- 2. Garantir unicidade do slug por tabela (ignorando NULLs)
CREATE UNIQUE INDEX IF NOT EXISTS idx_taxmanagers_leads_slug ON public.taxmanagers_leads (slug) WHERE slug IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS idx_taxmanagers_companies_slug ON public.taxmanagers_companies (slug) WHERE slug IS NOT NULL;

-- 3. Recarregar cache de esquema do PostgREST
NOTIFY pgrst, 'reload schema';
