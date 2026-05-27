# Roadmap — Prevenir Comunicados

## Fase 1 — Geração de Arte ✅ (implementado)

- [x] Formulário com todos os campos necessários
- [x] 4 templates visuais (Genérico, Natal, Carnaval, Páscoa)
- [x] Preview em tempo real (escala 45%)
- [x] API Route gerando JPG 1080×1080 via Satori + Sharp
- [x] Download automático com nome de arquivo
- [x] Identidade visual Prevenir aplicada

## Fase 2 — Templates Adicionais (planejado)

- [ ] Tiradentes
- [ ] Finados
- [ ] São João / Festa Junina
- [ ] Ano Novo
- [ ] Template "Genérico Escuro" (fundo slate)
- [ ] Preview de múltiplos formatos (1080×1080 + 1080×1920 story)

## Fase 3 — Histórico e Exportação (planejado)

- [ ] Histórico das artes geradas (localStorage)
- [ ] Re-edição de um comunicado anterior
- [ ] Exportar em múltiplos formatos (JPG, PNG, WebP)
- [ ] Opção de tamanho: feed (1080×1080) ou story (1080×1920)

## Fase 4 — Envio Automático via WhatsApp (planejado)

Stack: **Evolution API** (WhatsApp Business unofficial, open-source)

- [ ] Cadastro de lista de contatos/grupos WhatsApp
- [ ] Botão "Enviar pelo WhatsApp" → dispara a arte gerada para a lista
- [ ] Configuração da instância Evolution API (URL + API key)
- [ ] Preview da mensagem antes do envio
- [ ] Histórico de envios

## Fase 5 — Envio Automático via E-mail (planejado)

Stack: **Resend** (transactional email API)

- [ ] Cadastro de lista de destinatários (e-mail)
- [ ] Template de e-mail com a arte embedada
- [ ] Botão "Enviar por E-mail"
- [ ] Configuração de remetente (from: noreply@prevenir.app.br)
- [ ] Relatório de entrega

## Fase 6 — Agendamento (planejado)

- [ ] Agendar envio para data/hora específica
- [ ] Integração com feriados nacionais (API pública)
- [ ] Sugestão automática de recesso baseada em feriado próximo
