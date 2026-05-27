'use client'

import { DadosComunicado } from '@/types/comunicado'

interface Props {
  dados: DadosComunicado
  onChange: (campo: keyof DadosComunicado, valor: string) => void
}

function Campo({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-prevenir-500 focus:border-transparent transition-all'

export function FormularioComunicado({ dados, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Campo label="Nome do feriado / recesso *" id="nomeFeriado">
        <input
          id="nomeFeriado"
          type="text"
          placeholder="Ex: Natal, Carnaval, Feriado Municipal"
          value={dados.nomeFeriado}
          onChange={(e) => onChange('nomeFeriado', e.target.value)}
          className={inputClass}
          maxLength={60}
        />
      </Campo>

      <div className="grid grid-cols-2 gap-3">
        <Campo label="Início do recesso *" id="dataInicio">
          <input
            id="dataInicio"
            type="date"
            value={dados.dataInicio}
            onChange={(e) => onChange('dataInicio', e.target.value)}
            className={inputClass}
          />
        </Campo>

        <Campo label="Fim do recesso" id="dataFim">
          <input
            id="dataFim"
            type="date"
            value={dados.dataFim}
            min={dados.dataInicio}
            onChange={(e) => onChange('dataFim', e.target.value)}
            className={inputClass}
          />
          <span className="text-xs text-slate-400">Deixe vazio se for um único dia</span>
        </Campo>
      </div>

      <Campo label="Data de retorno *" id="dataRetorno">
        <input
          id="dataRetorno"
          type="date"
          value={dados.dataRetorno}
          min={dados.dataFim || dados.dataInicio}
          onChange={(e) => onChange('dataRetorno', e.target.value)}
          className={inputClass}
        />
      </Campo>

      <Campo label="Mensagem personalizada" id="mensagem">
        <textarea
          id="mensagem"
          rows={3}
          placeholder="Ex: Desejamos a todos um feliz feriado!"
          value={dados.mensagem}
          onChange={(e) => onChange('mensagem', e.target.value)}
          className={`${inputClass} resize-none`}
          maxLength={200}
        />
        <span className="text-xs text-slate-400 text-right">{dados.mensagem.length}/200</span>
      </Campo>
    </div>
  )
}
