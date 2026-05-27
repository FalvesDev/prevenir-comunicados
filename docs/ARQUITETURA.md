# Arquitetura — Prevenir Comunicados

## Visão geral

```
Browser (Next.js Client)                 Servidor (Next.js API Route)
────────────────────────                 ───────────────────────────
[Formulário] ──dados──▶                  POST /api/gerar-arte
[Preview live]          ──JSON──▶       │
[Botão download]                         │  1. Carrega fonte Inter (@fontsource)
                                         │  2. Carrega logo (public/)
                         ◀──JPG blob──  │  3. Satori: JSX → SVG (1080×1080)
[Download automático]                    │  4. Sharp: SVG → JPG (qualidade 95)
```

## Decisões técnicas

### Satori para geração de imagem
- Satori (Vercel) converte JSX React em SVG no servidor — sem necessidade de Puppeteer ou headless browser
- Os templates são componentes React com **inline styles** (Tailwind não funciona no Satori)
- Os mesmos componentes JSX são usados tanto no browser (preview) quanto no Satori (geração)
- Satori usa **flexbox puro** — todo elemento container precisa de `display: 'flex'`

### Sharp para conversão SVG → JPG
- Sharp usa libvips (C++), muito mais rápido que outras alternativas
- Parâmetro `mozjpeg: true` garante compressão otimizada para web
- Qualidade: 95 — balanço ideal entre tamanho e nitidez

### Fontes embedadas
- `@fontsource/inter` fornece os arquivos .woff2 como parte do bundle `node_modules`
- Lidos com `fs.readFileSync` no server — sem dependência de rede em produção
- Cache em módulo (`let fontRegular = null`) evita releitura a cada request

### Preview no browser
- Template renderizado como React DOM normal (inline styles funcionam no browser)
- Container de preview: `width: 486px, height: 486px` com `overflow: hidden`
- Div interna: `1080×1080` com `transform: scale(0.45), transformOrigin: 'top left'`
- O que você vê = exatamente o que será gerado (mesmos componentes JSX)

## Fluxo de dados

```typescript
DadosComunicado {
  nomeFeriado: string     // Ex: "Natal 2025"
  dataInicio: string      // YYYY-MM-DD
  dataFim: string         // YYYY-MM-DD (igual ao início se for 1 dia)
  dataRetorno: string     // YYYY-MM-DD
  mensagem: string        // Texto livre, max 200 chars
  template: TipoTemplate  // 'generico' | 'natal' | 'carnaval' | 'pascoa'
}
```

## Limitações conhecidas do Satori

| Propriedade CSS | Suporte Satori |
|---|---|
| `display: flex` | ✅ Completo |
| `linear-gradient` no background | ✅ Sim |
| `border-radius` | ✅ Sim |
| `letter-spacing` | ✅ Sim |
| `text-align` | ✅ Sim (com flex justify-content) |
| `position: absolute` | ✅ Sim (parent precisa de `relative`) |
| `filter` (brightness, invert) | ❌ Não suportado |
| `CSS grid` | ❌ Não suportado |
| `pseudo-elements` (::before) | ❌ Não suportado |
| `text-shadow` | ❌ Não suportado |
| `background-clip: text` | ❌ Não suportado |

Por isso os templates usam apenas propriedades suportadas.

## Estrutura do template

Todo template segue o mesmo contrato:

```tsx
function Template({ dados, logoSrc }: { dados: DadosComunicado; logoSrc: string }) {
  // logoSrc = '/logoPrevenirCompleta.png' (browser) ou base64 (Satori)
  return (
    <div style={{ width: 1080, height: 1080, display: 'flex', ... }}>
      {/* Decorações, logo, conteúdo, rodapé */}
    </div>
  )
}
```

## Adicionando um novo template

Veja [TEMPLATES.md](TEMPLATES.md) para o guia passo a passo.
