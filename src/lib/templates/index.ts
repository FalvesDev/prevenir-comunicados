export { TemplateGenerico } from './generico'
export { TemplateNatal } from './natal'
export { TemplateCarnaval } from './carnaval'
export { TemplatePascoa } from './pascoa'

import { TemplateGenerico } from './generico'
import { TemplateNatal } from './natal'
import { TemplateCarnaval } from './carnaval'
import { TemplatePascoa } from './pascoa'
import { TipoTemplate } from '@/types/comunicado'
import React from 'react'

export const TEMPLATE_COMPONENTS: Record<TipoTemplate, React.ComponentType<{ dados: import('@/types/comunicado').DadosComunicado; logoSrc: string }>> = {
  generico: TemplateGenerico,
  natal: TemplateNatal,
  carnaval: TemplateCarnaval,
  pascoa: TemplatePascoa,
}
