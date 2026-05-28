export type TipoTemplateRecesso = 'generico' | 'natal' | 'carnaval' | 'pascoa'
export type TipoTemplateNorma = 'normaMedico' | 'normaPrazo' | 'normaChecklist'
export type TipoTemplate = TipoTemplateRecesso | TipoTemplateNorma
export type TipoData = 'periodo' | 'especificos'
export type TipoComunicado = 'recesso' | 'norma'

export interface DadosComunicado {
  tipoComunicado: TipoComunicado
  nomeFeriado: string
  // Modo período (início → fim)
  dataInicio: string   // YYYY-MM-DD
  dataFim: string      // YYYY-MM-DD (igual ao início = dia único)
  // Modo dias específicos
  tipoData: TipoData
  diasEspecificos: string[]  // YYYY-MM-DD[], ordenado
  // Retorno (comum aos dois modos)
  dataRetorno: string  // YYYY-MM-DD
  prazoNorma: string
  rotuloPrazoNorma: string
  textoApoioPrazo: string
  descricaoNorma: string
  consequenciaNorma: string
  checklistItem1: string
  checklistItem2: string
  checklistItem3: string
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
  normaMedico: {
    label: 'Médico',
    descricao: 'Norma com foto médica na lateral',
    cor: '#1565C0',
    corCard: '#FFC107',
  },
  normaPrazo: {
    label: 'Prazo Forte',
    descricao: 'Foco em prazo, multa e urgência',
    cor: '#0D47A1',
    corCard: '#FFB300',
  },
  normaChecklist: {
    label: 'Checklist',
    descricao: 'Passos de adequação e compliance',
    cor: '#0a3880',
    corCard: '#e3f2fd',
  },
}

export const DADOS_INICIAIS: DadosComunicado = {
  tipoComunicado: 'recesso',
  nomeFeriado: '',
  tipoData: 'periodo',
  dataInicio: '',
  dataFim: '',
  diasEspecificos: [],
  dataRetorno: '',
  prazoNorma: '',
  rotuloPrazoNorma: '',
  textoApoioPrazo: '',
  descricaoNorma: '',
  consequenciaNorma: '',
  checklistItem1: '',
  checklistItem2: '',
  checklistItem3: '',
  mensagem: '',
  template: 'generico',
  email: 'comercial@prevenirexames.com.br',
  telefone: '21 99741-7990',
  instagram: '@prevenir.exames',
}
