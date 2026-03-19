import type { Block } from 'payload'

export const SpecialiteBlock: Block = {
  slug: 'specialiteBlock',
  interfaceName: 'SpecialiteBlockType',
  labels: {
    singular: 'Spécialité',
    plural: 'Spécialités',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Nos domaines',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Nos Spécialités',
      label: 'Titre de section',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      localized: true,
      defaultValue:
        "Des domaines d'expertise complémentaires pour une prise en charge globale de la santé de votre peau.",
      label: 'Description de section',
    },
    {
      name: 'specialites',
      type: 'array',
      label: 'Spécialités',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          label: 'Titre',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          localized: true,
          label: 'Description courte',
        },
        {
          name: 'details',
          type: 'array',
          label: 'Détails',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
              label: 'Intitulé',
            },
            {
              name: 'value',
              type: 'textarea',
              required: true,
              localized: true,
              label: 'Description',
            },
          ],
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icône',
          defaultValue: 'dermatologie',
          options: [
            { label: 'Dermatologie', value: 'dermatologie' },
            { label: 'Vénérologie', value: 'venerologie' },
            { label: 'Esthétique', value: 'esthetique' },
            { label: 'Laser', value: 'laser' },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Dermatologie adulte et pédiatrique',
          description:
            "Prise en charge des maladies de la peau, des cheveux et des ongles chez l'adulte et l'enfant.",
          details: [
            {
              label: 'Peau',
              value:
                'Affections cutanées courantes : eczéma, psoriasis, acné, taches pigmentaires.',
            },
            {
              label: 'Ongles',
              value:
                'Affections unguéales : onychomycose, lichen unguéal, troubles de la croissance.',
            },
            {
              label: 'Cheveux',
              value: 'Affections du cuir chevelu : chute de cheveux, teignes, alopécies.',
            },
          ],
          icon: 'dermatologie',
        },
        {
          title: 'Vénérologie',
          description:
            'Diagnostic, traitement et prévention des infections sexuellement transmissibles (IST).',
          details: [
            {
              label: 'Services',
              value: 'Dépistage, prise en charge médicale, conseils de prévention et suivi.',
            },
          ],
          icon: 'venerologie',
        },
        {
          title: 'Médecine esthétique',
          description: "Amélioration de l'apparence de la peau et du visage sans chirurgie.",
          details: [
            {
              label: 'Techniques',
              value:
                'Peelings, injections, rajeunissement cutané, traitements de texture et taches.',
            },
          ],
          icon: 'esthetique',
        },
        {
          title: 'Lasers',
          description:
            'Traitements par laser pour améliorer la qualité de la peau et corriger imperfections.',
          details: [
            {
              label: 'Indications',
              value:
                'Traitement des cicatrices, détatouage, imperfections pigmentaires, resurfaçage.',
            },
          ],
          icon: 'laser',
        },
      ],
    },
  ],
}
