import type { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'quoteBlock',
  interfaceName: 'QuoteBlockType',
  labels: {
    singular: 'Citation Photo',
    plural: 'Citations Photos',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Photo',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Description',
      defaultValue:
        'Parce que chaque peau mérite une approche personnalisée et des soins dermatologiques de qualité',
    },
  ],
}
