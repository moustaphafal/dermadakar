import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlockType',
  labels: {
    singular: 'Hero',
    plural: 'Heros',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'Cabinet de Dermatologie à Dakar',
      label: 'Sous-titre',
    },
    {
      name: 'doctorName',
      type: 'text',
      required: true,
      defaultValue: 'Nom du Docteur',
      label: 'Nom du docteur',
    },
    {
      name: 'specialty',
      type: 'text',
      required: true,
      defaultValue: 'Dermatologue — Vénérologue',
      label: 'Spécialité',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Spécialiste en dermatologie médicale, chirurgicale et esthétique.\nAu service de la beauté et de la santé de votre peau.',
      label: 'Description',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      required: true,
      defaultValue: 'Prendre Rendez-vous',
      label: 'Texte bouton principal',
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
      defaultValue: '#contact',
      label: 'Lien bouton principal',
    },
    {
      name: 'secondaryLabel',
      type: 'text',
      required: true,
      defaultValue: 'Découvrir',
      label: 'Texte bouton secondaire',
    },
    {
      name: 'secondaryLink',
      type: 'text',
      required: true,
      defaultValue: '#docteur',
      label: 'Lien bouton secondaire',
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+221 XX XXX XX XX',
      label: 'Téléphone',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Dakar, Sénégal',
      label: 'Localisation',
    },
    {
      name: 'hours',
      type: 'text',
      defaultValue: 'Lun - Ven : 9h - 18h',
      label: 'Horaires',
    },
  ],
}
