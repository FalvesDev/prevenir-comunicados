export type TipoTemplate = 'generico' | 'natal' | 'carnaval' | 'pascoa'

export interface DadosComunicado {
  nomeFeriado: string
  dataInicio: string   // YYYY-MM-DD
  dataFim: string      // YYYY-MM-DD (pode ser igual ao início)
  dataRetorno: string  // YYYY-MM-DD
  mensagem: string
  template: TipoTemplate
}

export const TEMPLATE_META: Record<TipoTemplate, {
  label: string
  descricao: string
  cor: string
  corTexto: string
}> = {
  generico: {
    label: 'Genérico',
    descricao: 'Layout padrão da marca Prevenir',
    cor: '#009688',
    corTexto: '#ffffff',
  },
  natal: {
    label: 'Natal',
    descricao: 'Tema natalino verde e dourado',
    cor: '#1a4731',
    corTexto: '#f4c430',
  },
  carnaval: {
    label: 'Carnaval',
    descricao: 'Tema festivo e colorido',
    cor: '#6b21a8',
    corTexto: '#f0abfc',
  },
  pascoa: {
    label: 'Páscoa',
    descricao: 'Tema suave e primaveril',
    cor: '#7c3aed',
    corTexto: '#fce7f3',
  },
}

export const DADOS_INICIAIS: DadosComunicado = {
  nomeFeriado: 'Natal',
  dataInicio: '',
  dataFim: '',
  dataRetorno: '',
  mensagem: 'Desejamos a todos um feliz feriado!',
  template: 'generico',
}
