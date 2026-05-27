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
      <label className="block text-sm font-semibold text-slate-700 mb-3">
        Template
      </label>
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
                relative flex flex-col items-start gap-1 p-4 rounded-xl border-2 text-left transition-all
                ${ativo
                  ? 'border-prevenir-500 bg-prevenir-50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }
              `}
            >
              {/* Cor do tema */}
              <div
                className="w-8 h-8 rounded-lg mb-1"
                style={{ background: meta.cor }}
              />
              <span className={`text-sm font-semibold ${ativo ? 'text-prevenir-700' : 'text-slate-800'}`}>
                {meta.label}
              </span>
              <span className="text-xs text-slate-500 leading-tight">
                {meta.descricao}
              </span>
              {ativo && (
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-prevenir-500 flex items-center justify-center">
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
