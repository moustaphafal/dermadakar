import type { GlobalConfig } from 'payload'

import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      localized: true,
      defaultValue:
        'Cabinet de dermatologie à Dakar, spécialisé en dermatologie médicale, chirurgicale et esthétique. Votre peau mérite le meilleur.',
    },
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
      name: 'address',
      type: 'text',
      label: 'Adresse',
      localized: true,
      defaultValue: 'Rue X, Quartier Y, Dakar, Sénégal',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Téléphone',
      defaultValue: '+221 XX XXX XX XX',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      defaultValue: 'contact@dermadakar.com',
    },
    {
      name: 'hours',
      type: 'text',
      label: 'Horaires',
      localized: true,
      defaultValue: 'Lun - Ven : 9h - 18h | Sam : 9h - 13h',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Lien rendez-vous',
      defaultValue: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
    },
    {
      name: 'socialMedia',
      type: 'group',
      label: 'Réseaux sociaux',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
