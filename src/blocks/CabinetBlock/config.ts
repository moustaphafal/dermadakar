import type { Block } from 'payload'

export const CabinetBlock: Block = {
  slug: 'cabinetBlock',
  interfaceName: 'CabinetBlockType',
  labels: {
    singular: 'Cabinet',
    plural: 'Cabinets',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      defaultValue: 'Notre espace',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Le Cabinet',
      label: 'Titre de section',
    },
    {
      name: 'photos',
      type: 'array',
      label: 'Photos du cabinet',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Photo',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Légende',
        },
      ],
      defaultValue: [
        { caption: 'Photo du cabinet — Réception' },
        { caption: 'Photo du cabinet — Salle de consultation' },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Points forts',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Titre',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icône',
          defaultValue: 'sparkles',
          options: [
            { label: 'Étoiles', value: 'sparkles' },
            { label: 'Bouclier', value: 'shield' },
            { label: 'Sourire', value: 'smile' },
            { label: 'Cœur', value: 'heart' },
            { label: 'Bâtiment', value: 'building' },
            { label: 'Utilisateurs', value: 'users' },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Cadre Moderne',
          description:
            'Un environnement élégant et apaisant conçu pour votre confort, avec des équipements de dernière génération.',
          icon: 'sparkles',
        },
        {
          title: 'Hygiène Irréprochable',
          description:
            "Respect rigoureux des normes d'hygiène et de stérilisation pour assurer votre sécurité à chaque consultation.",
          icon: 'shield',
        },
        {
          title: 'Accueil Chaleureux',
          description:
            'Une équipe bienveillante et attentionnée vous accompagne tout au long de votre parcours de soins.',
          icon: 'smile',
        },
      ],
    },
  ],
}
