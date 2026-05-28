'use client'

import { DadosComunicado } from '@/types/comunicado'
import { TEMPLATE_COMPONENTS, TEMPLATE_NORMA_COMPONENTS } from '@/lib/templates'
import type { TipoTemplateNorma, TipoTemplateRecesso } from '@/types/comunicado'

interface Props {
  dados: DadosComunicado
}

const ESCALA = 0.45
const TAMANHO_CANVAS = 1080
const TAMANHO_PREVIEW = TAMANHO_CANVAS * ESCALA

function dadosComPlaceholders(dados: DadosComunicado): DadosComunicado {
  if (dados.tipoComunicado === 'norma') {
    return {
      ...dados,
      nomeFeriado: dados.nomeFeriado.trim() || 'Título da norma',
      prazoNorma: dados.prazoNorma.trim() || '90 dias',
      rotuloPrazoNorma: dados.rotuloPrazoNorma.trim() || 'Restam',
      textoApoioPrazo: dados.textoApoioPrazo.trim() || 'antes do início das fiscalizações punitivas.',
      descricaoNorma: dados.descricaoNorma.trim() || 'Resumo do que precisa ser adequado pela empresa.',
      consequenciaNorma: dados.consequenciaNorma.trim() || 'Após o prazo, poderão iniciar autuações e multas.',
      checklistItem1: dados.checklistItem1.trim() || 'Revisar GRO/PGR',
      checklistItem2: dados.checklistItem2.trim() || 'Mapear riscos psicossociais',
      checklistItem3: dados.checklistItem3.trim() || 'Organizar evidências e plano de ação',
      mensagem: dados.mensagem.trim() || 'Fale com a Prevenir e regularize sua empresa com antecedência.',
    }
  }

  const usaDiasEspecificos = dados.tipoData === 'especificos'

  return {
    ...dados,
    nomeFeriado: dados.nomeFeriado.trim() || 'Nome do feriado',
    dataInicio: usaDiasEspecificos ? dados.dataInicio : dados.dataInicio || '2026-05-07',
    dataFim: usaDiasEspecificos ? dados.dataFim : dados.dataFim || '',
    diasEspecificos: usaDiasEspecificos && dados.diasEspecificos.length === 0
      ? ['2026-05-07', '2026-05-15']
      : dados.diasEspecificos,
    dataRetorno: dados.dataRetorno || '2026-05-18',
    mensagem: dados.mensagem.trim() || 'Agradecemos a compreensão de todos.',
  }
}

export function PreviewArte({ dados }: Props) {
  const dadosPreview = dadosComPlaceholders(dados)
  const TemplateComponent = TEMPLATE_COMPONENTS[dadosPreview.template as TipoTemplateRecesso]
  const TemplateNormaComponent = TEMPLATE_NORMA_COMPONENTS[dadosPreview.template as TipoTemplateNorma]

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-800">Pré-visualização</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
          1080 × 1080 px
        </span>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-prevenir-50 p-4 shadow-inner">
        <div
          className="overflow-hidden rounded-[22px] border border-white shadow-2xl ring-1 ring-slate-900/5"
          style={{
            width: TAMANHO_PREVIEW,
            height: TAMANHO_PREVIEW,
          }}
        >
          <div
            style={{
              width: TAMANHO_CANVAS,
              height: TAMANHO_CANVAS,
              transform: `scale(${ESCALA})`,
              transformOrigin: 'top left',
              position: 'relative',
            }}
          >
            {dadosPreview.tipoComunicado === 'norma' ? (
              <TemplateNormaComponent dados={dadosPreview} logoSrc="/logo_prevenir_azul.png" medicoSrc="/medico-norma.png" />
            ) : (
              <TemplateComponent dados={dadosPreview} logoSrc="/logo_prevenir_azul.png" />
            )}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400">
        Esta é uma aproximação visual. A imagem final gerada terá qualidade total em 1080×1080px.
      </p>
    </div>
  )
}
