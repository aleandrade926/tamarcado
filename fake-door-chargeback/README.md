# Relatório de Publicação e Auditoria de Testes (H-EXT-001)

Este pacote contém os arquivos finais (Release Candidate) do experimento Fake Door de Dossiê de Chargeback, transformando-o em um piloto com intenção de compra real e infraestrutura validada para mensuração.

## 1. Configurações Pendentes (Centralizadas)
Abra o arquivo `config.js` e preencha TODAS as variáveis de acordo com a sua estrutura:
- **CHECKOUT_URL**: Insira a URL real da sua plataforma de pagamentos. Lembre-se de configurar a *URL de Retorno/Sucesso* no seu gateway para `compra-confirmada.html`. Se ficar em branco, a página exibirá um formulário de lista de espera.
- **LEAD_ENDPOINT**: URL do webhook (Ex: Make, Zapier) para receber chamadas `POST` com os leads de checklist e de intenção de compra.
- **GA4_ID**: Measurement ID do Google Analytics 4 (Ex: `G-XXXXXXXXXX`). A inicialização e roteamento ocorrerão automaticamente.
- **PRIVACY_CONTACT_EMAIL**: E-mail oficial do responsável pela proteção de dados (DPO) ou responsável do piloto. (OBRIGATÓRIO para a página funcionar moralmente e de forma aderente à LGPD/GDPR).
- **CONTROLLER_NAME**: Razão social ou nome do responsável pelo piloto.

## 2. Checklist de Liberação (Go-Live)
Antes de enviar tráfego real para esta landing page, confirme os seguintes itens:
- [ ] CHECKOUT_URL configurado;
- [ ] LEAD_ENDPOINT testado;
- [ ] GA4_ID configurado;
- [ ] PRIVACY_CONTACT_EMAIL preenchido;
- [ ] CONTROLLER_NAME preenchido;
- [ ] URLs de retorno configuradas no gateway;
- [ ] pagamento de teste concluído;
- [ ] lead de teste recebido no endpoint;
- [ ] eventos confirmados no DebugView do GA4;
- [ ] política de privacidade revisada e publicamente aceitável.

## 3. Testes Realizados e Resultados
| Cenário | Resultado Validado |
|---------|-------------------|
| **Formulário s/ Endpoint** | Exibe alerta amigável e impede o fluxo falso. Eventos protegidos. |
| **Endpoint com Sucesso** | Formulários emitem payload com UTMs e redirecionam corretamente (ou mostram success flag). |
| **Endpoint com Falha** | Formulário preserva os dados digitados e exibe um alerta de erro amigável. |
| **Checkout não configurado** | O botão exibe um Formulário Real de Lista de Espera, disparando POST para o webhook com payload de intenção de compra, e bloqueia o `checkout_started`. |
| **Checkout configurado** | Dispara `buy_click`, dispara `checkout_started` e redireciona o usuário para o gateway transportando as UTMs na URL. |
| **Atribuição Persistente** | As UTMs e o referrer original são salvos no `sessionStorage` e enviados em todos os eventos e webhooks da sessão, impedindo perda de tracking. |
| **Download do PDF** | O evento `checklist_download` só é disparado no clique real do botão de download (página de obrigado). |
| **Privacidade** | A página de política adota linguagem correta sobre tempo de retenção, controlador e ausência de documentos sensíveis nesta etapa. |

## 4. Como Conferir Leads e Pagamentos
- **Leads**: Cheque os logs do seu serviço de Webhook. Os JSONs enviados conterão `lead_type: "purchase_interest"` ou `lead_type: "checklist_download"`, além dos dados preenchidos e UTMs mapeadas.
- **Pagamentos**: Acompanhe as conversões reais na conta do gateway.

## 5. Como Medir a Experiência (GA4)
- O `page_view` funciona manualmente.
- Para funil de compra: `buy_click` -> `checkout_started` -> `checkout_return_success`.
- Para funil de interesse (fallback): `buy_click` -> Submissão do webhook.
- Para funil de leads topo: `checklist_click` -> Submissão do webhook -> `checklist_download` (no PDF final).

## 6. Como Publicar (Deploy)
1. Certifique-se de realizar o Checklist de Liberação acima.
2. Hospede gratuitamente arrastando a pasta completa em serviços como **Netlify**, **Vercel** ou **Cloudflare Pages**. 
3. Todas as rotas são estáticas (HTML), o que garante 100% de compatibilidade sem necessidade de servidores backend customizados.
