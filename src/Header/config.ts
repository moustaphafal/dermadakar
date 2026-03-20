import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
          admin: {
            description:
              'Logo affiché dans le header et le footer. Recommandé : PNG/SVG transparent.',
            width: '50%',
          },
        },
        {
          name: 'siteName',
          type: 'text',
          label: 'Nom du site',
          defaultValue: 'DermaDakar',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Liens de navigation',
      labels: {
        singular: 'Lien',
        plural: 'Liens',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
              admin: { width: '50%' },
            },
            {
              name: 'href',
              type: 'text',
              required: true,
              admin: { width: '50%' },
            },
          ],
        },
      ],
      defaultValue: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Avis', href: '#avis' },
        { label: 'Le Docteur', href: '#docteur' },
        { label: 'Le Cabinet', href: '#cabinet' },
        { label: 'Services', href: '#services' },
        { label: 'Photos', href: '#photos' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          label: 'Texte du bouton CTA',
          localized: true,
          defaultValue: 'Rendez-vous',
          admin: { width: '50%' },
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Lien du bouton CTA',
          defaultValue: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
          admin: { width: '50%' },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
