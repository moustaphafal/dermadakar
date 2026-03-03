import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlockType',
  labels: {
    singular: 'Services',
    plural: 'Services',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Nos expertises',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Les Services',
      label: 'Titre de section',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      localized: true,
      defaultValue:
        'Une prise en charge complète de votre peau, alliant expertise médicale et technologies de pointe pour des résultats optimaux.',
      label: 'Description de section',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
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
          type: 'textarea',
          required: true,
          localized: true,
          label: 'Description détaillée (popup)',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
      ],
      defaultValue: [
        {
          title: 'Dermatologie Médicale',
          description:
            'Diagnostic et traitement de toutes les maladies de la peau : eczéma, psoriasis, acné, mycoses, allergies cutanées, infections...',
          details:
            "Notre expertise en dermatologie médicale couvre l'ensemble des pathologies cutanées. Nous prenons en charge l'eczéma, le psoriasis, l'acné sous toutes ses formes, les mycoses cutanées et unguéales, les allergies de contact et alimentaires, les infections bactériennes et virales de la peau, ainsi que les maladies inflammatoires chroniques. Chaque patient bénéficie d'un diagnostic précis et d'un plan de traitement personnalisé.",
        },
        {
          title: 'Dermatologie Chirurgicale',
          description:
            'Exérèse de lésions cutanées, biopsies, chirurgie des tumeurs bénignes et malignes, cryothérapie, électrocoagulation.',
          details:
            "Notre cabinet est équipé pour réaliser les interventions de dermatologie chirurgicale en toute sécurité. Nous pratiquons l'exérèse de lésions cutanées suspectes ou gênantes, les biopsies diagnostiques, la chirurgie des tumeurs bénignes (kystes, lipomes) et malignes (carcinomes, mélanomes), la cryothérapie à l'azote liquide et l'électrocoagulation. Toutes les interventions sont réalisées sous anesthésie locale dans des conditions d'asepsie strictes.",
        },
        {
          title: 'Dermatologie Esthétique',
          description:
            'Peelings, mésothérapie, traitement des taches pigmentaires, rajeunissement cutané, injections et soins anti-âge.',
          details:
            "Notre pôle esthétique propose des soins avancés pour sublimer votre peau. Peelings chimiques (superficiels, moyens et profonds), mésothérapie revitalisante, traitement ciblé des taches pigmentaires et du mélasma, rajeunissement cutané par micro-needling, injections d'acide hyaluronique et de toxine botulique, PRP (plasma riche en plaquettes) et protocoles anti-âge personnalisés pour un résultat naturel et harmonieux.",
        },
        {
          title: 'Vénéréologie (IST)',
          description:
            'Dépistage, diagnostic et traitement des infections sexuellement transmissibles, suivi et conseil préventif.',
          details:
            'Nous assurons une prise en charge complète et confidentielle des infections sexuellement transmissibles (IST). Dépistage systématique ou orienté, diagnostic clinique et biologique, traitement adapté selon les dernières recommandations, suivi post-thérapeutique et conseil préventif. Notre approche bienveillante garantit un accompagnement respectueux et sans jugement pour tous nos patients.',
        },
        {
          title: 'Traitement Laser',
          description:
            'Épilation laser, traitement des cicatrices, verrues, lésions vasculaires et pigmentaires avec des lasers de pointe.',
          details:
            "Notre plateau technique laser de dernière génération permet de traiter un large éventail de pathologies et imperfections. Épilation laser longue durée pour tous types de peau, traitement des cicatrices d'acné et chirurgicales, destruction des verrues résistantes, prise en charge des lésions vasculaires (couperose, angiomes) et pigmentaires (taches solaires, lentigos). Un protocole sur mesure est établi après une consultation d'évaluation.",
        },
        {
          title: 'Dermatoscopie',
          description:
            'Examen dermoscopique des grains de beauté, surveillance des nævus, dépistage précoce du mélanome et des cancers cutanés.',
          details:
            'La dermatoscopie est un examen non invasif indispensable pour la surveillance de vos grains de beauté. Grâce à un dermoscope de haute précision, nous analysons la structure microscopique de chaque lésion pigmentée, assurons le suivi photographique des nævus atypiques, et réalisons le dépistage précoce du mélanome et des autres cancers cutanés. Un examen régulier est recommandé, en particulier pour les peaux à risque.',
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      localized: true,
      defaultValue: 'Prendre rendez-vous',
      label: 'Texte du bouton CTA (popup)',
    },
  ],
}
