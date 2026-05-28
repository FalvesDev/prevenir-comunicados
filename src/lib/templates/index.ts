export { TemplateGenerico } from './generico'
export { TemplateNatal } from './natal'
export { TemplateCarnaval } from './carnaval'
export { TemplatePascoa } from './pascoa'
export { TemplateNorma, TemplateNormaPrazo, TemplateNormaChecklist } from './norma'

import { TemplateGenerico } from './generico'
import { TemplateNatal } from './natal'
import { TemplateCarnaval } from './carnaval'
import { TemplatePascoa } from './pascoa'
import { TemplateNorma, TemplateNormaPrazo, TemplateNormaChecklist } from './norma'
import type { TipoTemplateNorma, TipoTemplateRecesso, DadosComunicado } from '@/types/comunicado'
import type React from 'react'

export const TEMPLATE_COMPONENTS: Record<
  TipoTemplateRecesso,
  React.ComponentType<{ dados: DadosComunicado; logoSrc: string }>
> = {
  generico: TemplateGenerico,
  natal:    TemplateNatal,
  carnaval: TemplateCarnaval,
  pascoa:   TemplatePascoa,
}

export const TEMPLATE_NORMA = TemplateNorma

export const TEMPLATE_NORMA_COMPONENTS: Record<
  TipoTemplateNorma,
  React.ComponentType<{ dados: DadosComunicado; logoSrc: string; medicoSrc: string }>
> = {
  normaMedico: TemplateNorma,
  normaPrazo: TemplateNormaPrazo,
  normaChecklist: TemplateNormaChecklist,
}
