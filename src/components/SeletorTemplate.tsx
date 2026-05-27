'use client'

import { TipoTemplate, TEMPLATE_META } from '@/types/comunicado'

interface Props {
  valor: TipoTemplate
  onChange: (t: TipoTemplate) => void
}

const ORDEM: TipoTemplate[] = ['generico', 'natal', 'carnaval', 'pascoa']

export function SeletorTemplate({ valor, onChange }: Props) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Template</p>
      <div className="grid grid-cols-2 gap-3">
        {ORDEM.map((tipo) => {
          const meta = TEMPLATE_META[tipo]
          const ativo = valor === tipo
          return (
            <button
              key={tipo}
              type="button"
              onClick={() => onChange(tipo)}
              className={`
                relative flex flex-col items-start gap-1.5 p-3.5 rounded-xl border-2 text-left transition-all
                ${ativo ? 'border-prevenir-600 bg-prevenir-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}
              `}
            >
              {/* Miniatura da cor */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md border border-black/10" style={{ background: meta.cor }} />
                <div className="w-6 h-6 rounded-md border border-black/10" style={{ background: meta.corCard }} />
              </div>
              <span className={`text-sm font-semibold ${ativo ? 'text-prevenir-700' : 'text-slate-800'}`}>
                {meta.label}
              </span>
              <span className="text-xs text-slate-500 leading-tight">{meta.descricao}</span>
              {ativo && (
                <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-prevenir-600 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
