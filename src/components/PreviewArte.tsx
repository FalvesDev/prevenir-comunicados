'use client'

import { DadosComunicado } from '@/types/comunicado'
import { TEMPLATE_COMPONENTS } from '@/lib/templates'

interface Props {
  dados: DadosComunicado
}

const ESCALA = 0.45
const TAMANHO_CANVAS = 1080
const TAMANHO_PREVIEW = TAMANHO_CANVAS * ESCALA

export function PreviewArte({ dados }: Props) {
  const TemplateComponent = TEMPLATE_COMPONENTS[dados.template]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Pré-visualização</span>
        <span className="text-xs text-slate-400">1080 × 1080 px</span>
      </div>

      {/* Container com tamanho fixo do preview */}
      <div
        className="rounded-2xl overflow-hidden shadow-xl border border-slate-200"
        style={{ width: TAMANHO_PREVIEW, height: TAMANHO_PREVIEW }}
      >
        {/* Template renderizado em escala */}
        <div
          style={{
            width: TAMANHO_CANVAS,
            height: TAMANHO_CANVAS,
            transform: `scale(${ESCALA})`,
            transformOrigin: 'top left',
          }}
        >
          <TemplateComponent dados={dados} logoSrc="/logo_prevenir_azul.png" />
        </div>
      </div>

      <p className="text-xs text-slate-400 text-center">
        Esta é uma aproximação visual. A imagem final gerada terá qualidade total em 1080×1080px.
      </p>
    </div>
  )
}
