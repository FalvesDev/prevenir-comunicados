'use client'

import { useState } from 'react'
import { DadosComunicado } from '@/types/comunicado'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Props {
  dados: DadosComunicado
  onChange: (campo: keyof DadosComunicado, valor: string) => void
  onChangeDias: (dias: string[]) => void
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

function formatarDataExibicao(iso: string): string {
  try {
    const [y, m, d] = iso.split('-').map(Number)
    return format(new Date(y, m - 1, d), "dd 'de' MMMM", { locale: ptBR })
  } catch {
    return iso
  }
}

export function FormularioComunicado({ dados, onChange, onChangeDias }: Props) {
  const [novaData, setNovaData] = useState('')

  function adicionarDia() {
    if (!novaData || dados.diasEspecificos.includes(novaData)) return
    const novaLista = [...dados.diasEspecificos, novaData].sort()
    onChangeDias(novaLista)
    setNovaData('')
  }

  function removerDia(dia: string) {
    onChangeDias(dados.diasEspecificos.filter((d) => d !== dia))
  }

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

      {/* Toggle tipo de data */}
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold text-slate-700">Período de recesso *</span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onChange('tipoData', 'periodo')}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition-all ${
              dados.tipoData === 'periodo'
                ? 'bg-prevenir-600 text-white border-prevenir-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-prevenir-300'
            }`}
          >
            Período
          </button>
          <button
            type="button"
            onClick={() => onChange('tipoData', 'especificos')}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition-all ${
              dados.tipoData === 'especificos'
                ? 'bg-prevenir-600 text-white border-prevenir-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-prevenir-300'
            }`}
          >
            Dias específicos
          </button>
        </div>

        {/* Campos de período */}
        {dados.tipoData === 'periodo' && (
          <div className="grid grid-cols-2 gap-3">
            <Campo label="Início *" id="dataInicio">
              <input id="dataInicio" type="date" value={dados.dataInicio}
                onChange={(e) => onChange('dataInicio', e.target.value)} className={inputClass} />
            </Campo>
            <Campo label="Fim" id="dataFim" hint="Vazio = um único dia">
              <input id="dataFim" type="date" value={dados.dataFim} min={dados.dataInicio}
                onChange={(e) => onChange('dataFim', e.target.value)} className={inputClass} />
            </Campo>
          </div>
        )}

        {/* Campos de dias específicos */}
        {dados.tipoData === 'especificos' && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="date"
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
                className={`${inputClass} flex-1`}
                onKeyDown={(e) => e.key === 'Enter' && adicionarDia()}
              />
              <button
                type="button"
                onClick={adicionarDia}
                disabled={!novaData}
                className="px-4 py-2 rounded-xl bg-prevenir-600 text-white text-sm font-semibold disabled:opacity-40 hover:bg-prevenir-700 transition-colors shrink-0"
              >
                Adicionar
              </button>
            </div>

            {dados.diasEspecificos.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {dados.diasEspecificos.map((dia) => (
                  <span
                    key={dia}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-prevenir-50 border border-prevenir-200 rounded-lg text-xs font-semibold text-prevenir-700"
                  >
                    {formatarDataExibicao(dia)}
                    <button
                      type="button"
                      onClick={() => removerDia(dia)}
                      className="text-prevenir-400 hover:text-prevenir-700 transition-colors leading-none"
                      aria-label={`Remover ${dia}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400">Nenhum dia adicionado ainda.</p>
            )}
          </div>
        )}
      </div>

      {/* Data de retorno */}
      <Campo label="Data de retorno *" id="dataRetorno">
        <input id="dataRetorno" type="date" value={dados.dataRetorno}
          min={dados.tipoData === 'periodo' ? (dados.dataFim || dados.dataInicio) : undefined}
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
