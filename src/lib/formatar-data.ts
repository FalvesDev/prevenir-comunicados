import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

// Formato compacto para uso no corpo do texto: "04/06"
export function formatarDataNumero(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), 'dd/MM', { locale: ptBR })
  } catch { return dataStr }
}

export function formatarPeriodo(dataInicio: string, dataFim: string): string {
  if (!dataInicio) return '—'
  if (!dataFim || dataInicio === dataFim) return formatarData(dataInicio)
  return `${formatarDataCurta(dataInicio)} a ${formatarData(dataFim)}`
}

export function gerarTextoRecesso(
  nomeFeriado: string,
  dataInicio: string,
  dataFim: string,
  dataRetorno: string
): { paragrafo1: string; paragrafo2: string } {
  const inicio = formatarDataNumero(dataInicio)
  const fim = dataFim && dataFim !== dataInicio ? formatarDataNumero(dataFim) : null
  const retorno = formatarDataNumero(dataRetorno)

  const periodoTexto = fim
    ? `do dia ${inicio} ao dia ${fim}`
    : `no dia ${inicio}`

  const paragrafo1 = nomeFeriado
    ? `Informamos que a Prevenir Exames estará em recesso ${periodoTexto} devido ao feriado de ${nomeFeriado}.`
    : `Informamos que a Prevenir Exames estará em recesso ${periodoTexto}.`
  const paragrafo2 = `Retornaremos normalmente no dia ${retorno}, com atendimento em horário habitual.`

  return { paragrafo1, paragrafo2 }
}
