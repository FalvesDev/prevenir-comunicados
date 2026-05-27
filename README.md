# Prevenir Comunicados — Gerador de Artes

Ferramenta web para gerar artes profissionais de comunicados de **recesso e feriados** da Prevenir Exames, prontas para publicação em redes sociais.

## Funcionalidades

- Formulário intuitivo com campos: nome do feriado, período de recesso, data de retorno e mensagem personalizada
- **4 templates visuais**: Genérico (teal Prevenir), Natal, Carnaval e Páscoa
- Preview em tempo real antes de baixar
- Geração de imagem JPG **1080×1080px** (padrão Instagram feed / WhatsApp)
- Download direto com nome de arquivo automático

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS 3 |
| Ícones | Lucide React |
| Formatação de datas | date-fns (pt-BR) |
| Geração de imagem (servidor) | Satori + Sharp |
| Fontes embedadas | @fontsource/inter |

## Como usar

### Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Produção

```bash
npm run build
npm start
```

## Estrutura do projeto

```
src/
├── app/
│   ├── page.tsx                    # Página principal (formulário + preview)
│   ├── layout.tsx                  # Layout raiz
│   ├── globals.css                 # Estilos globais + tema Prevenir
│   └── api/gerar-arte/route.ts    # API Route: gera JPG via Satori + Sharp
├── components/
│   ├── FormularioComunicado.tsx    # Inputs do usuário
│   ├── SeletorTemplate.tsx         # Seleção visual de template
│   └── PreviewArte.tsx             # Preview escalado em tempo real
├── lib/
│   ├── formatar-data.ts            # Helpers date-fns (pt-BR)
│   └── templates/                  # Templates JSX (compatíveis com Satori)
│       ├── generico.tsx            # Template teal padrão Prevenir
│       ├── natal.tsx               # Tema verde + dourado
│       ├── carnaval.tsx            # Tema roxo + magenta festivo
│       ├── pascoa.tsx              # Tema lavanda + rosa suave
│       └── index.ts                # Barrel de exports
└── types/
    └── comunicado.ts               # Interfaces e constantes
```

## Como a geração de imagem funciona

1. Usuário preenche o formulário e clica em **Baixar Arte**
2. O browser envia um `POST /api/gerar-arte` com os dados em JSON
3. O servidor lê a fonte Inter do `@fontsource/inter` e o logo da pasta `/public`
4. **Satori** renderiza o componente JSX do template selecionado em SVG (1080×1080)
5. **Sharp** converte o SVG para JPG com qualidade 95 (mozjpeg)
6. O browser recebe o arquivo JPG e faz download automático

## Roadmap

Veja [docs/ROADMAP.md](docs/ROADMAP.md) para o planejamento completo de fases futuras (envio automático por WhatsApp e e-mail).

## Documentação

- [Arquitetura](docs/ARQUITETURA.md) — decisões técnicas e fluxos
- [Templates](docs/TEMPLATES.md) — guia de criação de novos templates
- [Roadmap](docs/ROADMAP.md) — fases de desenvolvimento
