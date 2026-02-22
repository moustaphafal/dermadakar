import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'galleryBlock',
  interfaceName: 'GalleryBlockType',
  labels: {
    singular: 'Galerie',
    plural: 'Galeries',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      defaultValue: 'Notre galerie',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Les Photos',
      label: 'Titre de section',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Légende',
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          label: 'Catégorie',
          options: [
            { label: 'Cabinet', value: 'cabinet' },
            { label: 'Équipements', value: 'équipements' },
          ],
        },
      ],
      defaultValue: [
        { label: "Salle d'attente", category: 'cabinet' },
        { label: 'Salle de consultation', category: 'cabinet' },
        { label: 'Laser dermatologique', category: 'équipements' },
        { label: 'Dermatoscope', category: 'équipements' },
        { label: 'Bureau de consultation', category: 'cabinet' },
        { label: 'Salle de soins', category: 'équipements' },
        { label: 'Accueil', category: 'cabinet' },
        { label: 'Matériel de soin', category: 'équipements' },
      ],
    },
  ],
}
