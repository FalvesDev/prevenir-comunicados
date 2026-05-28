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

const LIMITE_DIAS_ESPECIFICOS = 5

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
  const atingiuLimiteDias = dados.diasEspecificos.length >= LIMITE_DIAS_ESPECIFICOS

  function adicionarDia() {
    if (!novaData || dados.diasEspecificos.includes(novaData) || atingiuLimiteDias) return
    const novaLista = [...dados.diasEspecificos, novaData].sort()
    onChangeDias(novaLista)
    setNovaData('')
  }

  function removerDia(dia: string) {
    onChangeDias(dados.diasEspecificos.filter((d) => d !== dia))
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold text-slate-700">Tipo de comunicado</span>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onChange('tipoComunicado', 'norma')}
            className={`py-2 rounded-xl text-sm font-semibold border transition-all ${
              dados.tipoComunicado === 'norma'
                ? 'bg-prevenir-600 text-white border-prevenir-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-prevenir-300'
            }`}
          >
            Norma / Prazo
          </button>
          <button
            type="button"
            onClick={() => onChange('tipoComunicado', 'recesso')}
            className={`py-2 rounded-xl text-sm font-semibold border transition-all ${
              dados.tipoComunicado === 'recesso'
                ? 'bg-prevenir-600 text-white border-prevenir-600 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:border-prevenir-300'
            }`}
          >
            Recesso
          </button>
        </div>
      </div>

      <Campo label={dados.tipoComunicado === 'norma' ? 'Título da norma / assunto *' : 'Nome do feriado / recesso *'} id="nomeFeriado">
        <input
          id="nomeFeriado"
          type="text"
          value={dados.nomeFeriado}
          onChange={(e) => onChange('nomeFeriado', e.target.value)}
          placeholder={dados.tipoComunicado === 'norma' ? 'Ex: Adequação à NR-1' : 'Ex: Dia do Trabalhador'}
          className={inputClass}
          maxLength={60}
        />
      </Campo>

      {dados.tipoComunicado === 'norma' && (
        <>
          <Campo label="Prazo em destaque *" id="prazoNorma">
            <input
              id="prazoNorma"
              type="text"
              value={dados.prazoNorma}
              onChange={(e) => onChange('prazoNorma', e.target.value)}
              placeholder="Ex: 90 dias"
              className={inputClass}
              maxLength={24}
            />
          </Campo>

          {dados.template === 'normaPrazo' && (
            <>
              <Campo label="Rótulo do prazo forte" id="rotuloPrazoNorma">
                <input
                  id="rotuloPrazoNorma"
                  type="text"
                  value={dados.rotuloPrazoNorma}
                  onChange={(e) => onChange('rotuloPrazoNorma', e.target.value)}
                  placeholder="Ex: Restam"
                  className={inputClass}
                  maxLength={24}
                />
              </Campo>

              <Campo label="Texto de apoio do prazo" id="textoApoioPrazo" hint={`${dados.textoApoioPrazo.length}/120`}>
                <textarea
                  id="textoApoioPrazo"
                  rows={2}
                  value={dados.textoApoioPrazo}
                  onChange={(e) => onChange('textoApoioPrazo', e.target.value)}
                  placeholder="Ex: antes do início das fiscalizações punitivas."
                  className={`${inputClass} resize-none`}
                  maxLength={120}
                />
              </Campo>
            </>
          )}

          <Campo label="Contexto da norma" id="descricaoNorma" hint={`${dados.descricaoNorma.length}/170`}>
            <textarea
              id="descricaoNorma"
              rows={3}
              value={dados.descricaoNorma}
              onChange={(e) => onChange('descricaoNorma', e.target.value)}
              placeholder="Ex: Empresas devem revisar o GRO/PGR e incluir a gestão dos riscos psicossociais."
              className={`${inputClass} resize-none`}
              maxLength={170}
            />
          </Campo>

          <Campo label="Consequência / urgência" id="consequenciaNorma" hint={`${dados.consequenciaNorma.length}/150`}>
            <textarea
              id="consequenciaNorma"
              rows={3}
              value={dados.consequenciaNorma}
              onChange={(e) => onChange('consequenciaNorma', e.target.value)}
              placeholder="Ex: Após o prazo, poderão iniciar autuações e multas."
              className={`${inputClass} resize-none`}
              maxLength={150}
            />
          </Campo>

          {dados.template === 'normaChecklist' && (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Itens do checklist</p>
              <Campo label="Item 1 *" id="checklistItem1">
                <input
                  id="checklistItem1"
                  type="text"
                  value={dados.checklistItem1}
                  onChange={(e) => onChange('checklistItem1', e.target.value)}
                  placeholder="Ex: Revisar GRO/PGR"
                  className={inputClass}
                  maxLength={52}
                />
              </Campo>
              <Campo label="Item 2" id="checklistItem2">
                <input
                  id="checklistItem2"
                  type="text"
                  value={dados.checklistItem2}
                  onChange={(e) => onChange('checklistItem2', e.target.value)}
                  placeholder="Ex: Mapear riscos psicossociais"
                  className={inputClass}
                  maxLength={52}
                />
              </Campo>
              <Campo label="Item 3" id="checklistItem3">
                <input
                  id="checklistItem3"
                  type="text"
                  value={dados.checklistItem3}
                  onChange={(e) => onChange('checklistItem3', e.target.value)}
                  placeholder="Ex: Organizar evidências e plano de ação"
                  className={inputClass}
                  maxLength={52}
                />
              </Campo>
            </div>
          )}
        </>
      )}

      {/* Toggle tipo de data */}
      {dados.tipoComunicado === 'recesso' && <div className="flex flex-col gap-3">
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
            <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
              <span>Adicione até 5 dias avulsos de recesso.</span>
              <span className="font-semibold text-slate-600">{dados.diasEspecificos.length}/5</span>
            </div>
            <div className="flex gap-2">
              <input
                type="date"
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
                className={`${inputClass} flex-1`}
                onKeyDown={(e) => e.key === 'Enter' && adicionarDia()}
                disabled={atingiuLimiteDias}
              />
              <button
                type="button"
                onClick={adicionarDia}
                disabled={!novaData || atingiuLimiteDias}
                className="px-4 py-2 rounded-xl bg-prevenir-600 text-white text-sm font-semibold disabled:opacity-40 hover:bg-prevenir-700 transition-colors shrink-0"
              >
                {atingiuLimiteDias ? 'Limite' : 'Adicionar'}
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
      </div>}

      {/* Data de retorno */}
      {dados.tipoComunicado === 'recesso' && <Campo label="Data de retorno *" id="dataRetorno">
        <input id="dataRetorno" type="date" value={dados.dataRetorno}
          min={dados.tipoData === 'periodo' ? (dados.dataFim || dados.dataInicio) : undefined}
          onChange={(e) => onChange('dataRetorno', e.target.value)} className={inputClass} />
      </Campo>}

      {/* Mensagem */}
      <Campo label={dados.tipoComunicado === 'norma' ? 'Chamada final' : 'Frase de encerramento'} id="mensagem" hint={`${dados.mensagem.length}/200`}>
        <textarea
          id="mensagem" rows={2}
          value={dados.mensagem}
          onChange={(e) => onChange('mensagem', e.target.value)}
          placeholder={dados.tipoComunicado === 'norma' ? 'Ex: Fale com a Prevenir e regularize sua empresa com antecedência.' : 'Ex: Agradecemos a compreensão de todos.'}
          className={`${inputClass} resize-none`}
          maxLength={200}
        />
      </Campo>

      {/* Contatos */}
      <div className="flex flex-col gap-3 pt-1">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contatos (aparecem na arte)</p>

        <Campo label="E-mail" id="email">
          <input id="email" type="email"
            value={dados.email} onChange={(e) => onChange('email', e.target.value)} placeholder="Ex: comercial@prevenirexames.com.br" className={inputClass} />
        </Campo>

        <div className="grid grid-cols-2 gap-3">
          <Campo label="WhatsApp / Telefone" id="telefone">
            <input id="telefone" type="text"
              value={dados.telefone} onChange={(e) => onChange('telefone', e.target.value)} placeholder="Ex: 21 99741-7990" className={inputClass} />
          </Campo>

          <Campo label="Instagram" id="instagram">
            <input id="instagram" type="text"
              value={dados.instagram} onChange={(e) => onChange('instagram', e.target.value)} placeholder="Ex: @prevenir.exames" className={inputClass} />
          </Campo>
        </div>
      </div>
    </div>
  )
}
