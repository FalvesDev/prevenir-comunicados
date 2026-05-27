# Guia de Templates — Prevenir Comunicados

## Como criar um novo template

### 1. Criar o arquivo do template

Crie `src/lib/templates/seutemplate.tsx`:

```tsx
import React from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { formatarData, formatarPeriodo } from '@/lib/formatar-data'

interface Props {
  dados: DadosComunicado
  logoSrc: string
}

export function TemplateSeuTemplate({ dados, logoSrc }: Props) {
  const periodo = formatarPeriodo(dados.dataInicio, dados.dataFim)
  const retorno = formatarData(dados.dataRetorno)

  return (
    <div style={{
      width: 1080, height: 1080,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      background: '...', // sua cor ou gradiente
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      padding: '64px 80px',
    }}>
      {/* Logo sempre em caixa branca */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.95)', borderRadius: 20, padding: '14px 44px' }}>
          <img src={logoSrc} style={{ height: 58, objectFit: 'contain' }} alt="Prevenir" />
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <div style={{ display: 'flex', color: '#ffffff', fontSize: 86, fontWeight: 700, textAlign: 'center', lineHeight: 1.05, textTransform: 'uppercase', maxWidth: 900, flexWrap: 'wrap', justifyContent: 'center' }}>
          {dados.nomeFeriado}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 40 }}>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.80)', fontSize: 27 }}>
            Recesso: {periodo}
          </div>
          <div style={{ display: 'flex', color: '#ffffff', fontSize: 31, fontWeight: 600 }}>
            Retorno: {retorno}
          </div>
        </div>

        {dados.mensagem ? (
          <div style={{ display: 'flex', marginTop: 48, padding: '24px 52px', background: 'rgba(255,255,255,0.10)', borderRadius: 20, maxWidth: 860, justifyContent: 'center' }}>
            <div style={{ display: 'flex', color: '#ffffff', fontSize: 25, textAlign: 'center', lineHeight: 1.55, flexWrap: 'wrap', justifyContent: 'center' }}>
              {dados.mensagem}
            </div>
          </div>
        ) : null}
      </div>

      <div style={{ display: 'flex', color: 'rgba(255,255,255,0.38)', fontSize: 18, letterSpacing: 2 }}>
        prevenir.app.br
      </div>
    </div>
  )
}
```

### 2. Exportar no index

Em `src/lib/templates/index.ts`, adicione:

```typescript
export { TemplateSeuTemplate } from './seutemplate'

// E no mapa TEMPLATE_COMPONENTS:
import { TemplateSeuTemplate } from './seutemplate'

export const TEMPLATE_COMPONENTS = {
  // ...existentes
  seutemplate: TemplateSeuTemplate,
}
```

### 3. Registrar o tipo

Em `src/types/comunicado.ts`:

```typescript
export type TipoTemplate = 'generico' | 'natal' | 'carnaval' | 'pascoa' | 'seutemplate'

export const TEMPLATE_META = {
  // ...existentes
  seutemplate: {
    label: 'Seu Template',
    descricao: 'Descrição curta',
    cor: '#1e40af',     // cor principal para o seletor
    corTexto: '#ffffff',
  },
}
```

## Regras obrigatórias do Satori

Todo container div **DEVE** ter `display: 'flex'`. O Satori usa apenas flexbox.

```tsx
// ✅ CORRETO
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex' }}>Texto aqui</div>
</div>

// ❌ ERRADO — Satori ignora divs sem display: flex
<div>
  <p>Texto aqui</p>
</div>
```

### Propriedades CSS suportadas

- ✅ `background` com `linear-gradient(...)`
- ✅ `borderRadius`, `border`
- ✅ `flexbox` completo
- ✅ `position: absolute/relative`
- ✅ `letterSpacing`, `lineHeight`, `textAlign`
- ✅ `fontWeight: 400 | 700`
- ❌ `filter` — não use para inverter cores de logo (use caixa branca)
- ❌ `grid` — use flex
- ❌ `pseudo-elements` — use divs adicionais
- ❌ `text-shadow`

## Templates existentes

| Template | Arquivo | Cores principais |
|---|---|---|
| Genérico | `generico.tsx` | Teal `#009688` → `#004d40` |
| Natal | `natal.tsx` | Verde escuro `#0a2e1a` + dourado `#f4c430` |
| Carnaval | `carnaval.tsx` | Roxo `#1a0533` + magenta `#e879f9` |
| Páscoa | `pascoa.tsx` | Violeta `#3b0764` + lavanda |
