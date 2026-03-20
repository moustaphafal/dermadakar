import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      label: 'Liens de navigation',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'Texte du bouton CTA',
      localized: true,
      defaultValue: 'Rendez-vous',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Lien du bouton CTA',
      defaultValue: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
