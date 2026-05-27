export { TemplateGenerico } from './generico'
export { TemplateNatal } from './natal'
export { TemplateCarnaval } from './carnaval'
export { TemplatePascoa } from './pascoa'

import { TemplateGenerico } from './generico'
import { TemplateNatal } from './natal'
import { TemplateCarnaval } from './carnaval'
import { TemplatePascoa } from './pascoa'
import type { TipoTemplate, DadosComunicado } from '@/types/comunicado'
import type React from 'react'

export const TEMPLATE_COMPONENTS: Record<
  TipoTemplate,
  React.ComponentType<{ dados: DadosComunicado; logoSrc: string }>
> = {
  generico: TemplateGenerico,
  natal:    TemplateNatal,
  carnaval: TemplateCarnaval,
  pascoa:   TemplatePascoa,
}
