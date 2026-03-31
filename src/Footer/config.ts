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
          name: 'address',
          type: 'text',
          label: 'Adresse',
          localized: true,
          defaultValue: 'Rue X, Quartier Y, Dakar, Sénégal',
          admin: { width: '50%' },
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Téléphone',
          defaultValue: '+221 XX XXX XX XX',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          defaultValue: 'contact@douderma.com',
          admin: { width: '50%' },
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Horaires',
          localized: true,
          defaultValue: 'Lun - Ven : 9h - 18h | Sam : 9h - 13h',
          admin: { width: '50%' },
        },
      ],
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
