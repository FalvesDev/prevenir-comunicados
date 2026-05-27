'use client'

import { DadosComunicado } from '@/types/comunicado'

interface Props {
  dados: DadosComunicado
  onChange: (campo: keyof DadosComunicado, valor: string) => void
}

const inputClass =
  'w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-prevenir-600 focus:border-transparent transition-all'

function Campo({ label, id, hint, children }: { label: string; id: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
      {children}
      {hint && <span className="text-xs text-slate-400">{hint}</span>}
    </div>
  )
}

export function FormularioComunicado({ dados, onChange }: Props) {
  return (
    <div className="flex flex-col gap-5">

      {/* Feriado */}
      <Campo label="Nome do feriado / recesso *" id="nomeFeriado">
        <input
          id="nomeFeriado"
          type="text"
          placeholder="Ex: Corpus Christi, Natal, Feriado Municipal"
          value={dados.nomeFeriado}
          onChange={(e) => onChange('nomeFeriado', e.target.value)}
          className={inputClass}
          maxLength={60}
        />
      </Campo>

      {/* Datas */}
      <div className="grid grid-cols-2 gap-3">
        <Campo label="Início do recesso *" id="dataInicio">
          <input id="dataInicio" type="date" value={dados.dataInicio}
            onChange={(e) => onChange('dataInicio', e.target.value)} className={inputClass} />
        </Campo>

        <Campo label="Fim do recesso" id="dataFim" hint="Deixe vazio se for um único dia">
          <input id="dataFim" type="date" value={dados.dataFim} min={dados.dataInicio}
            onChange={(e) => onChange('dataFim', e.target.value)} className={inputClass} />
        </Campo>
      </div>

      <Campo label="Data de retorno *" id="dataRetorno">
        <input id="dataRetorno" type="date" value={dados.dataRetorno}
          min={dados.dataFim || dados.dataInicio}
          onChange={(e) => onChange('dataRetorno', e.target.value)} className={inputClass} />
      </Campo>

      {/* Mensagem */}
      <Campo label="Frase de encerramento" id="mensagem" hint={`${dados.mensagem.length}/200`}>
        <textarea
          id="mensagem" rows={2}
          placeholder="Ex: Agradecemos a compreensão de todos!"
          value={dados.mensagem}
          onChange={(e) => onChange('mensagem', e.target.value)}
          className={`${inputClass} resize-none`}
          maxLength={200}
        />
      </Campo>

      {/* Contatos */}
      <div className="flex flex-col gap-3 pt-1">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contatos (aparecem na arte)</p>

        <Campo label="E-mail" id="email">
          <input id="email" type="email" placeholder="comercial@prevenirexames.com.br"
            value={dados.email} onChange={(e) => onChange('email', e.target.value)} className={inputClass} />
        </Campo>

        <div className="grid grid-cols-2 gap-3">
          <Campo label="WhatsApp / Telefone" id="telefone">
            <input id="telefone" type="text" placeholder="21 99741-7990"
              value={dados.telefone} onChange={(e) => onChange('telefone', e.target.value)} className={inputClass} />
          </Campo>

          <Campo label="Instagram" id="instagram">
            <input id="instagram" type="text" placeholder="@prevenir.exames"
              value={dados.instagram} onChange={(e) => onChange('instagram', e.target.value)} className={inputClass} />
          </Campo>
        </div>
      </div>
    </div>
  )
}
