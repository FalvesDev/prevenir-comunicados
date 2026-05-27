import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import type { DadosComunicado } from '@/types/comunicado'

export function formatarData(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
  } catch { return dataStr }
}

export function formatarDataCurta(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), "d 'de' MMMM", { locale: ptBR })
  } catch { return dataStr }
}

export function formatarDataNumero(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), 'dd/MM', { locale: ptBR })
  } catch { return dataStr }
}

export function formatarDataExibicao(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), "dd/MM (EEEE)", { locale: ptBR })
  } catch { return dataStr }
}

// Formata lista de dias específicos em texto legível
// Ex: ["2025-12-24", "2025-12-26"] → "nos dias 24/12 e 26/12"
function formatarDiasEspecificos(dias: string[]): string {
  if (!dias.length) return 'na data informada'
  const formatados = dias.map(formatarDataNumero)
  if (formatados.length === 1) return `no dia ${formatados[0]}`
  const ultimo = formatados[formatados.length - 1]
  const anteriores = formatados.slice(0, -1).join(', ')
  return `nos dias ${anteriores} e ${ultimo}`
}

export function formatarPeriodo(dataInicio: string, dataFim: string): string {
  if (!dataInicio) return '—'
  if (!dataFim || dataInicio === dataFim) return formatarData(dataInicio)
  return `${formatarDataCurta(dataInicio)} a ${formatarData(dataFim)}`
}

export function gerarTextoRecesso(dados: DadosComunicado): {
  paragrafo1: string
  paragrafo2: string
} {
  const { nomeFeriado, tipoData, dataInicio, dataFim, diasEspecificos, dataRetorno } = dados
  const nomeStr = nomeFeriado ? ` de ${nomeFeriado}` : ''
  const retorno = formatarDataNumero(dataRetorno)

  let periodoTexto: string
  if (tipoData === 'especificos' && diasEspecificos.length > 0) {
    periodoTexto = formatarDiasEspecificos(diasEspecificos)
  } else {
    const inicio = formatarDataNumero(dataInicio)
    const fim = dataFim && dataFim !== dataInicio ? formatarDataNumero(dataFim) : null
    periodoTexto = fim ? `do dia ${inicio} ao dia ${fim}` : `no dia ${inicio}`
  }

  const paragrafo1 = `Informamos que a Prevenir Exames estará em recesso ${periodoTexto} devido ao feriado${nomeStr}.`
  const paragrafo2 = `Retornaremos normalmente no dia ${retorno}, com atendimento em horário habitual.`

  return { paragrafo1, paragrafo2 }
}
