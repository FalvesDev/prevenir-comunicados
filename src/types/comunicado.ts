export type TipoTemplate = 'generico' | 'natal' | 'carnaval' | 'pascoa'
export type TipoData = 'periodo' | 'especificos'

export interface DadosComunicado {
  nomeFeriado: string
  // Modo período (início → fim)
  dataInicio: string   // YYYY-MM-DD
  dataFim: string      // YYYY-MM-DD (igual ao início = dia único)
  // Modo dias específicos
  tipoData: TipoData
  diasEspecificos: string[]  // YYYY-MM-DD[], ordenado
  // Retorno (comum aos dois modos)
  dataRetorno: string  // YYYY-MM-DD
  mensagem: string
  template: TipoTemplate
  email: string
  telefone: string
  instagram: string
}

export const TEMPLATE_META: Record<TipoTemplate, {
  label: string
  descricao: string
  cor: string
  corCard: string
}> = {
  generico: {
    label: 'Genérico',
    descricao: 'Azul + Amarelo (padrão Prevenir)',
    cor: '#1565C0',
    corCard: '#FFC107',
  },
  natal: {
    label: 'Natal',
    descricao: 'Verde escuro + Dourado',
    cor: '#0a2e1a',
    corCard: '#f4c430',
  },
  carnaval: {
    label: 'Carnaval',
    descricao: 'Roxo + Magenta festivo',
    cor: '#1a0533',
    corCard: '#e879f9',
  },
  pascoa: {
    label: 'Páscoa',
    descricao: 'Violeta + Rosa suave',
    cor: '#3b0764',
    corCard: '#f9a8d4',
  },
}

export const DADOS_INICIAIS: DadosComunicado = {
  nomeFeriado: '',
  tipoData: 'periodo',
  dataInicio: '',
  dataFim: '',
  diasEspecificos: [],
  dataRetorno: '',
  mensagem: 'Agradecemos a compreensão de todos!',
  template: 'generico',
  email: 'comercial@prevenirexames.com.br',
  telefone: '21 99741-7990',
  instagram: '@prevenir.exames',
}
