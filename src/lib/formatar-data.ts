import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatarData(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), "d 'de' MMMM 'de' yyyy", { locale: ptBR })
  } catch {
    return dataStr
  }
}

export function formatarDataCurta(dataStr: string): string {
  if (!dataStr) return '—'
  try {
    return format(parseISO(dataStr), "d 'de' MMMM", { locale: ptBR })
  } catch {
    return dataStr
  }
}

export function formatarPeriodo(dataInicio: string, dataFim: string): string {
  if (!dataInicio) return '—'
  if (!dataFim || dataInicio === dataFim) return formatarData(dataInicio)
  return `${formatarDataCurta(dataInicio)} a ${formatarData(dataFim)}`
}
