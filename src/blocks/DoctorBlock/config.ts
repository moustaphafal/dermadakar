import type { Block } from 'payload'

export const DoctorBlock: Block = {
  slug: 'doctorBlock',
  interfaceName: 'DoctorBlockType',
  labels: {
    singular: 'Docteur',
    plural: 'Docteurs',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      defaultValue: 'Votre spécialiste',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Le Docteur',
      label: 'Titre de section',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo du docteur',
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
      name: 'biography',
      type: 'array',
      label: 'Paragraphes de biographie',
      minRows: 1,
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
          label: 'Paragraphe',
        },
      ],
      defaultValue: [
        {
          paragraph:
            'Diplômé(e) de la Faculté de Médecine de Dakar, le Dr. Nom du Docteur exerce la dermatologie avec passion et excellence depuis plus de X années.',
        },
        {
          paragraph:
            "Spécialisé(e) en dermatologie médicale, chirurgicale et esthétique, il/elle prend en charge l'ensemble des pathologies cutanées avec une approche personnalisée et bienveillante.",
        },
        {
          paragraph:
            'Sa formation continue et son engagement dans la recherche dermatologique lui permettent de proposer les traitements les plus innovants à ses patients.',
        },
      ],
    },
    {
      name: 'qualificationsTitle',
      type: 'text',
      required: true,
      defaultValue: 'Formations & Diplômes',
      label: 'Titre qualifications',
    },
    {
      name: 'qualifications',
      type: 'array',
      label: 'Qualifications',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Qualification',
        },
      ],
      defaultValue: [
        { label: 'Doctorat en Médecine — Université Cheikh Anta Diop de Dakar' },
        { label: 'Spécialisation en Dermatologie-Vénéréologie' },
        { label: 'Formation en Dermatologie Esthétique et Laser' },
        { label: 'Membre de la Société Sénégalaise de Dermatologie' },
      ],
    },
  ],
}
