import type { Block } from 'payload'

export const TraitementBlock: Block = {
  slug: 'traitementBlock',
  interfaceName: 'TraitementBlockType',
  labels: {
    singular: 'Traitement',
    plural: 'Traitements',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Nos traitements',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Les Traitements',
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
          title: 'Acide Hyaluronique — Comblement & Volume',
          description:
            "Restauration du volume du visage, lissage   des rides et hydratation profonde grâce à des injections d'acide hyaluronique.",
          details:
            "L'acide hyaluronique est une substance naturellement présente dans la peau. En médecine esthétique, elle est injectée pour restaurer le volume du visage (joues, tempes, lèvres), lisser les rides et plis (rides nasogéniennes, sillons), redessiner les contours du visage ou des lèvres et hydrater en profondeur grâce à sa capacité à retenir l'eau. C'est une technique non chirurgicale, rapide, réversible et adaptée à chaque patient pour un résultat naturel.",
        },
        {
          title: 'Toxine Botulique (Botox)',
          description:
            "Réduction de l'apparence des rides et ridules du visage par relaxation ciblée des muscles.",
          details:
            "Le Botox est un traitement esthétique non chirurgical utilisé pour réduire l'apparence des rides et des ridules du visage. Il agit en relaxant certains muscles responsables des expressions répétées qui provoquent les plis de la peau, notamment au niveau du front, entre les sourcils et autour des yeux.",
        },
        {
          title: 'Mésothérapie Visage',
          description:
            "Injections de vitamines, d'acide hyaluronique et de nutriments pour revitaliser et hydrater la peau.",
          details:
            "La mésothérapie est un traitement esthétique non chirurgical qui consiste à injecter de petites quantités de vitamines, d'acide hyaluronique et d'autres nutriments directement dans la peau. Cette technique permet d'hydrater, revitaliser et améliorer la qualité de la peau. Elle aide à redonner de l'éclat, à améliorer l'élasticité et à atténuer les signes du vieillissement. Le traitement est rapide, peu invasif et nécessite généralement peu de temps de récupération.",
        },
        {
          title: 'Skinbooster',
          description:
            "Injection d'acide hyaluronique en profondeur pour améliorer l'hydratation, la texture et l'élasticité de la peau.",
          details:
            "Le skinbooster est un traitement esthétique qui consiste à injecter de l'acide hyaluronique dans les couches profondes de la peau afin d'améliorer son hydratation, sa texture et son élasticité. Contrairement aux injections de comblement, il ne modifie pas les volumes du visage mais agit en profondeur pour revitaliser la peau. Le résultat est un teint plus lumineux, une peau plus lisse et plus hydratée de façon naturelle.",
        },
        {
          title: 'Microneedling',
          description:
            'Micro-perforations stimulant la production de collagène pour améliorer texture, cicatrices et fermeté.',
          details:
            "Le microneedling est un traitement esthétique qui consiste à réaliser de micro-perforations dans la peau à l'aide de fines aiguilles. Cette technique stimule la production naturelle de collagène et favorise le renouvellement de la peau. Elle permet d'améliorer la texture cutanée, de réduire l'apparence des cicatrices, des pores dilatés et des ridules, tout en redonnant éclat et fermeté à la peau.",
        },
        {
          title: 'Plasma Riche en Plaquettes (PRP)',
          description:
            'Stimulation de la repousse des cheveux et amélioration de la densité capillaire grâce aux facteurs de croissance.',
          details:
            "Le plasma riche en plaquettes (PRP) est un traitement utilisé pour stimuler la repousse des cheveux et ralentir leur chute. Il consiste à prélever une petite quantité de sang du patient, puis à isoler le plasma riche en plaquettes avant de l'injecter dans le cuir chevelu. Riche en facteurs de croissance, le PRP aide à stimuler les follicules pileux, améliorer la densité capillaire et renforcer les cheveux de manière naturelle.",
        },
        {
          title: 'Mésothérapie Capillaire',
          description:
            'Injections de vitamines, minéraux et nutriments dans le cuir chevelu pour nourrir et stimuler la pousse des cheveux.',
          details:
            "La mésothérapie capillaire est un traitement qui consiste à injecter dans le cuir chevelu un mélange de vitamines, minéraux et nutriments essentiels. Cette technique aide à nourrir les follicules pileux, stimuler la pousse des cheveux et ralentir leur chute. Elle permet également d'améliorer la qualité et la densité des cheveux.",
        },
        {
          title: 'Biofiller',
          description:
            'Traitement naturel utilisant des éléments issus du sang du patient pour restaurer le volume et régénérer la peau.',
          details:
            'Le biofiller est un traitement esthétique qui utilise des éléments naturels, généralement issus du sang du patient, pour restaurer les volumes et améliorer la qualité de la peau. Après un prélèvement sanguin et un procédé de préparation spécifique, la substance obtenue est réinjectée dans les zones à traiter. Le biofiller aide à lisser les rides, redonner du volume et stimuler la régénération de la peau de manière naturelle.',
        },
        {
          title: 'Laser Épilatoire',
          description:
            'Réduction durable de la pilosité grâce à un laser adapté à tous les phototypes.',
          details:
            "L'épilation laser est une technique esthétique qui permet de réduire durablement la pilosité. Elle utilise un faisceau lumineux ciblant le pigment du poil afin de détruire le follicule pileux tout en respectant la peau environnante. Plusieurs séances sont généralement nécessaires pour obtenir un résultat optimal. Le traitement permet d'obtenir une peau plus lisse et une repousse des poils progressivement réduite. Le cabinet dispose d'un laser épilatoire adapté à tous les phototypes.",
        },
        {
          title: 'Laser CO₂',
          description:
            'Amélioration de la texture cutanée, réduction des cicatrices, rides et taches par stimulation du collagène.',
          details:
            "Le laser CO₂ est un traitement esthétique utilisé pour améliorer la texture et l'apparence de la peau. Il agit en retirant les couches superficielles de l'épiderme et en stimulant la production de collagène dans le derme. Ce procédé permet de réduire les cicatrices (cicatrices d'acné, de varicelle, de griffures…), les rides, les taches et les irrégularités cutanées, tout en raffermissant et rajeunissant la peau. Les résultats sont progressifs et durables après une période de récupération adaptée.",
        },
        {
          title: 'Laser Détatouage',
          description:
            'Effacement ou atténuation des tatouages par fragmentation des pigments grâce à des impulsions laser ciblées.',
          details:
            "Le laser détatouage est une technique qui permet d'effacer ou d'atténuer les tatouages de manière sécurisée. Il fonctionne en fragmentant les pigments de l'encre grâce à des impulsions lumineuses ciblées, que le corps élimine ensuite naturellement. Plusieurs séances sont généralement nécessaires selon la taille, la couleur et la profondeur du tatouage. Le traitement permet une réduction progressive de l'encre tout en préservant la peau environnante.",
        },
        {
          title: 'Peeling Chimique',
          description:
            'Exfoliation contrôlée pour stimuler le renouvellement cellulaire et réduire taches, rides et cicatrices.',
          details:
            "Le peeling chimique est un traitement esthétique qui consiste à appliquer une solution chimique sur la peau pour exfolier ses couches superficielles. Cette technique permet de stimuler le renouvellement cellulaire, d'améliorer la texture de la peau et de réduire les imperfections telles que les taches, les rides fines et les cicatrices d'acné. Selon l'intensité du peeling, les résultats peuvent être visibles rapidement et contribuent à un teint plus lumineux et uniforme.",
        },
        {
          title: 'Carbon Peel (Hollywood Peel)',
          description:
            'Peeling au laser et au carbone pour purifier la peau, réduire le sébum et resserrer les pores.',
          details:
            "Le carbon peel, ou « peeling au laser au carbone », est un traitement esthétique non invasif qui associe une lotion au carbone et un laser spécifique. Le carbone attire les impuretés de la peau et, lors du passage du laser, les particules sont éliminées tout en stimulant la production de collagène. Ce traitement aide à purifier la peau, réduire l'excès de sébum, resserrer les pores et donner un teint plus lumineux et uniforme.",
        },
        {
          title: 'IPL (Lumière Pulsée)',
          description:
            'Traitement des taches pigmentaires, rougeurs, vaisseaux visibles et signes du vieillissement par lumière pulsée.',
          details:
            'La lumière pulsée (IPL) est un traitement esthétique non invasif qui utilise des impulsions lumineuses pour cibler des imperfections de la peau telles que les taches pigmentaires, les rougeurs, les vaisseaux visibles et les signes du vieillissement. Elle stimule également la production de collagène, améliore la texture de la peau et unifie le teint. Plusieurs séances sont souvent nécessaires pour obtenir des résultats optimaux et durables.',
        },
        {
          title: 'Hydrafacial',
          description:
            'Soin combinant nettoyage, exfoliation, extraction des impuretés et hydratation profonde pour un teint lumineux.',
          details:
            "Le soin Hydrafacial est un traitement esthétique non invasif qui combine nettoyage, exfoliation, extraction des impuretés et hydratation profonde de la peau. Grâce à un dispositif spécifique, il permet d'éliminer les cellules mortes, les toxines et l'excès de sébum tout en apportant des nutriments essentiels et de l'acide hyaluronique. Ce soin améliore l'éclat, l'hydratation et la texture de la peau pour un teint visiblement plus lisse et lumineux.",
        },
        {
          title: 'Lipolyse',
          description:
            'Réduction des amas graisseux localisés, notamment le double menton, sans chirurgie.',
          details:
            "La lipolyse est un traitement esthétique non chirurgical qui permet de réduire les amas graisseux localisés, notamment le double menton. Grâce à des injections ou à des techniques spécifiques, les cellules graisseuses sont décomposées puis éliminées naturellement par l'organisme. Ce traitement aide à affiner le contour du visage et à redessiner l'ovale du menton de manière ciblée, sans chirurgie.",
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
