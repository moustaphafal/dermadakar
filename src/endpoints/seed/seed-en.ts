/**
 * Seed French layout blocks AND English translations for the home page.
 *
 * Usage:
 *   pnpm seed:en
 *
 * Prerequisites:
 *   - MongoDB must be running
 *   - A page must already exist (slug "accueil" or the first available page)
 */

import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

// ── FR layout blocks (default content) ──────────────────────────────────────

const frLayout = [
  {
    blockType: 'heroBlock',
    subtitle: 'Cabinet de Dermatologie à Dakar',
    doctorName: 'Nom du Docteur',
    specialty: 'Dermatologue — Vénérologue',
    description:
      'Spécialiste en dermatologie médicale, chirurgicale et esthétique.\nAu service de la beauté et de la santé de votre peau.',
    ctaLabel: 'Prendre Rendez-vous',
    ctaLink: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
    secondaryLabel: 'Découvrir',
    secondaryLink: '#docteur',
    phone: '+221 XX XXX XX XX',
    location: 'Dakar, Sénégal',
    hours: 'Lun - Ven : 9h - 18h',
  },
  {
    blockType: 'doctorBlock',
    sectionSubtitle: 'Votre spécialiste',
    sectionTitle: 'Le Docteur',
    doctorName: 'Nom du Docteur',
    specialty: 'Dermatologue — Vénérologue',
    biography: [
      {
        paragraph:
          'Diplômé(e) de la Faculté de Médecine de Dakar, le Dr. exerce la dermatologie avec passion et excellence depuis plus de X années.',
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
    qualificationsTitle: 'Formations & Diplômes',
    qualifications: [
      { label: 'Doctorat en Médecine — Université Cheikh Anta Diop de Dakar' },
      { label: 'Spécialisation en Dermatologie-Vénéréologie' },
      { label: 'Formation en Dermatologie Esthétique et Laser' },
      { label: 'Membre de la Société Sénégalaise de Dermatologie' },
    ],
  },
  {
    blockType: 'specialiteBlock',
    sectionSubtitle: 'Nos domaines',
    sectionTitle: 'Nos Spécialités',
    sectionDescription:
      "Des domaines d'expertise complémentaires pour une prise en charge globale de la santé de votre peau.",
    specialites: [
      {
        title: 'Dermatologie adulte et pédiatrique',
        description:
          "Prise en charge des maladies de la peau, des cheveux et des ongles chez l'adulte et l'enfant.",
        details: [
          {
            label: 'Peau',
            value: 'Affections cutanées courantes : eczéma, psoriasis, acné, taches pigmentaires.',
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
            value: 'Peelings, injections, rajeunissement cutané, traitements de texture et taches.',
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
  {
    blockType: 'traitementBlock',
    sectionSubtitle: 'Nos traitements',
    sectionTitle: 'Les Traitements',
    sectionDescription:
      'Une prise en charge complète de votre peau, alliant expertise médicale et technologies de pointe pour des résultats optimaux.',
    services: [
      {
        title: 'Acide Hyaluronique — Comblement & Volume',
        description:
          "Restauration du volume du visage, lissage des rides et hydratation profonde grâce à des injections d'acide hyaluronique.",
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
    ctaLabel: 'Prendre rendez-vous',
  },
  {
    blockType: 'cabinetBlock',
    sectionSubtitle: 'Notre espace',
    sectionTitle: 'Le Cabinet',
    photos: [
      { caption: 'Photo du cabinet — Réception' },
      { caption: 'Photo du cabinet — Salle de consultation' },
    ],
    features: [
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
  {
    blockType: 'reviewsBlock',
    sectionSubtitle: 'Témoignages',
    sectionTitle: 'Avis de nos Patients',
    reviews: [
      {
        name: 'Aminata D.',
        rating: 5,
        date: 'Janvier 2026',
        text: "Un cabinet d'exception, un accueil chaleureux et un docteur très à l'écoute. Ma peau n'a jamais été aussi belle. Je recommande vivement !",
        service: 'Dermatologie Esthétique',
      },
      {
        name: 'Moussa S.',
        rating: 5,
        date: 'Décembre 2025',
        text: "Très professionnel, le docteur a pris le temps de bien m'expliquer mon diagnostic et le traitement adapté. Les résultats sont remarquables.",
        service: 'Dermatologie Médicale',
      },
      {
        name: 'Fatou N.',
        rating: 5,
        date: 'Novembre 2025',
        text: "Le cadre est magnifique et très propre. L'équipe est bienveillante et les soins sont de qualité. Une adresse incontournable à Dakar.",
        service: 'Soins du visage',
      },
      {
        name: 'Ibrahima K.',
        rating: 4,
        date: 'Octobre 2025',
        text: 'Excellent suivi pour mon problème de peau. Le docteur est compétent et rassurant. Je suis très satisfait des résultats obtenus.',
        service: 'Traitement Laser',
      },
      {
        name: 'Aïssatou B.',
        rating: 5,
        date: 'Septembre 2025',
        text: "J'avais des taches pigmentaires depuis des années. Grâce au traitement proposé, elles ont presque totalement disparu. Merci infiniment !",
        service: 'Dermatologie Esthétique',
      },
      {
        name: 'Ousmane M.',
        rating: 5,
        date: 'Août 2025',
        text: "Cabinet moderne avec du matériel de pointe. Le docteur est d'une grande gentillesse et d'un professionnalisme exemplaire. Je recommande à 100%.",
        service: 'Dermatoscopie',
      },
    ],
    ctaText: 'Vous êtes patient(e) ? Partagez votre expérience avec nous.',
    ctaLabel: 'Laisser un avis',
  },
  {
    blockType: 'galleryBlock',
    sectionSubtitle: 'Notre galerie',
    sectionTitle: 'Les Photos',
    images: [
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
  {
    blockType: 'contactBlock',
    sectionSubtitle: 'Prenez rendez-vous',
    sectionTitle: 'Nous Contacter',
    address: 'Rue X, Quartier Y\nDakar, Sénégal',
    phone: '+221 XX XXX XX XX',
    phone2: '+221 XX XXX XX XX',
    email: 'contact@dermadakar.com',
    hours: 'Lun - Ven : 9h - 18h',
    hours2: 'Sam : 9h - 13h',
    ctaText: 'Prenez soin de votre peau, prenez rendez-vous dès maintenant.',
    ctaLabel: 'Prendre Rendez-vous',
    ctaLink: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8942261569373!2d-17.4440!3d14.6928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb5df18b79f14cf66!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr',
  },
]

// ── EN layout blocks (translations only for localized fields) ───────────────

const enLayout = [
  {
    blockType: 'heroBlock',
    subtitle: 'Dermatology Clinic in Dakar',
    doctorName: 'Nom du Docteur',
    specialty: 'Dermatologist — Venereologist',
    description:
      'Specialist in medical, surgical and aesthetic dermatology.\nDedicated to the beauty and health of your skin.',
    ctaLabel: 'Book an Appointment',
    ctaLink: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
    secondaryLabel: 'Discover',
    secondaryLink: '#docteur',
    phone: '+221 XX XXX XX XX',
    location: 'Dakar, Senegal',
    hours: 'Mon - Fri: 9am - 6pm',
  },
  {
    blockType: 'doctorBlock',
    sectionSubtitle: 'Your specialist',
    sectionTitle: 'The Doctor',
    doctorName: 'Nom du Docteur',
    specialty: 'Dermatologist — Venereologist',
    biography: [
      {
        paragraph:
          'A graduate of the Faculty of Medicine of Dakar, Dr. has been practicing dermatology with passion and excellence for over X years.',
      },
      {
        paragraph:
          'Specialized in medical, surgical and aesthetic dermatology, providing comprehensive care for all skin conditions with a personalized and compassionate approach.',
      },
      {
        paragraph:
          'Continuous training and commitment to dermatological research enable the use of the most innovative treatments for patients.',
      },
    ],
    qualificationsTitle: 'Education & Qualifications',
    qualifications: [
      { label: 'Doctorate in Medicine — Cheikh Anta Diop University of Dakar' },
      { label: 'Specialization in Dermatology-Venereology' },
      { label: 'Training in Aesthetic Dermatology and Laser' },
      { label: 'Member of the Senegalese Society of Dermatology' },
    ],
  },
  {
    blockType: 'specialiteBlock',
    sectionSubtitle: 'Our fields',
    sectionTitle: 'Our Specialties',
    sectionDescription: 'Complementary areas of expertise for comprehensive skin health care.',
    specialites: [
      {
        title: 'Adult and Pediatric Dermatology',
        description: 'Care for diseases of the skin, hair and nails in adults and children.',
        details: [
          {
            label: 'Skin',
            value: 'Common skin conditions: eczema, psoriasis, acne, pigmentation spots.',
          },
          {
            label: 'Nails',
            value: 'Nail disorders: onychomycosis, nail lichen, growth disorders.',
          },
          { label: 'Hair', value: 'Scalp conditions: hair loss, ringworm, alopecia.' },
        ],
        icon: 'dermatologie',
      },
      {
        title: 'Venereology',
        description:
          'Diagnosis, treatment and prevention of sexually transmitted infections (STIs).',
        details: [
          { label: 'Services', value: 'Screening, medical care, prevention advice and follow-up.' },
        ],
        icon: 'venerologie',
      },
      {
        title: 'Aesthetic Medicine',
        description: 'Improving the appearance of skin and face without surgery.',
        details: [
          {
            label: 'Techniques',
            value: 'Peels, injections, skin rejuvenation, texture and spot treatments.',
          },
        ],
        icon: 'esthetique',
      },
      {
        title: 'Lasers',
        description: 'Laser treatments to improve skin quality and correct imperfections.',
        details: [
          {
            label: 'Indications',
            value: 'Scar treatment, tattoo removal, pigment imperfections, resurfacing.',
          },
        ],
        icon: 'laser',
      },
    ],
  },
  {
    blockType: 'traitementBlock',
    sectionSubtitle: 'Our expertise',
    sectionTitle: 'Our Treatments',
    sectionDescription:
      'Comprehensive skin care combining medical expertise and cutting-edge technology for optimal results.',
    services: [
      {
        title: 'Hyaluronic Acid — Fillers & Volume',
        description:
          'Facial volume restoration, wrinkle smoothing and deep hydration through hyaluronic acid injections.',
        details:
          'Hyaluronic acid is a substance naturally present in the skin. In aesthetic medicine, it is injected to restore facial volume (cheeks, temples, lips), smooth wrinkles and folds (nasolabial folds, furrows), redefine facial or lip contours, and deeply hydrate thanks to its ability to retain water. It is a non-surgical, quick, reversible technique tailored to each patient for a natural result.',
      },
      {
        title: 'Botulinum Toxin (Botox)',
        description:
          'Reduction of facial wrinkles and fine lines through targeted muscle relaxation.',
        details:
          'Botox is a non-surgical aesthetic treatment used to reduce the appearance of facial wrinkles and fine lines. It works by relaxing certain muscles responsible for repeated expressions that cause skin folds, particularly on the forehead, between the eyebrows and around the eyes.',
      },
      {
        title: 'Facial Mesotherapy',
        description:
          'Injections of vitamins, hyaluronic acid and nutrients to revitalize and hydrate the skin.',
        details:
          'Mesotherapy is a non-surgical aesthetic treatment that involves injecting small amounts of vitamins, hyaluronic acid and other nutrients directly into the skin. This technique helps hydrate, revitalize and improve skin quality. It helps restore radiance, improve elasticity and reduce signs of aging. The treatment is quick, minimally invasive and generally requires little recovery time.',
      },
      {
        title: 'Skinbooster',
        description:
          'Deep hyaluronic acid injection to improve skin hydration, texture and elasticity.',
        details:
          'Skinbooster is an aesthetic treatment that involves injecting hyaluronic acid into the deep layers of the skin to improve its hydration, texture and elasticity. Unlike filler injections, it does not alter facial volumes but works deep within to revitalize the skin. The result is a brighter complexion, smoother and more naturally hydrated skin.',
      },
      {
        title: 'Microneedling',
        description:
          'Micro-perforations stimulating collagen production to improve texture, scars and firmness.',
        details:
          'Microneedling is an aesthetic treatment that involves creating micro-perforations in the skin using fine needles. This technique stimulates natural collagen production and promotes skin renewal. It improves skin texture, reduces the appearance of scars, enlarged pores and fine lines, while restoring radiance and firmness to the skin.',
      },
      {
        title: 'Platelet-Rich Plasma (PRP)',
        description:
          'Stimulation of hair regrowth and improved hair density through growth factors.',
        details:
          "Platelet-rich plasma (PRP) is a treatment used to stimulate hair regrowth and slow hair loss. It involves drawing a small amount of the patient's blood, then isolating the platelet-rich plasma before injecting it into the scalp. Rich in growth factors, PRP helps stimulate hair follicles, improve hair density and strengthen hair naturally.",
      },
      {
        title: 'Scalp Mesotherapy',
        description:
          'Injections of vitamins, minerals and nutrients into the scalp to nourish and stimulate hair growth.',
        details:
          'Scalp mesotherapy is a treatment that involves injecting a blend of vitamins, minerals and essential nutrients into the scalp. This technique helps nourish hair follicles, stimulate hair growth and slow hair loss. It also improves hair quality and density.',
      },
      {
        title: 'Biofiller',
        description:
          "Natural treatment using elements from the patient's blood to restore volume and regenerate skin.",
        details:
          "Biofiller is an aesthetic treatment that uses natural elements, usually derived from the patient's blood, to restore volume and improve skin quality. After a blood draw and specific preparation process, the resulting substance is reinjected into the areas to be treated. Biofiller helps smooth wrinkles, restore volume and stimulate skin regeneration naturally.",
      },
      {
        title: 'Laser Hair Removal',
        description: 'Long-lasting hair reduction with a laser suitable for all skin phototypes.',
        details:
          'Laser hair removal is an aesthetic technique that provides long-lasting hair reduction. It uses a light beam targeting the hair pigment to destroy the hair follicle while respecting the surrounding skin. Several sessions are generally needed for optimal results. The treatment provides smoother skin with progressively reduced hair regrowth. The clinic has a laser hair removal device suitable for all phototypes.',
      },
      {
        title: 'CO₂ Laser',
        description:
          'Skin texture improvement, scar, wrinkle and spot reduction through collagen stimulation.',
        details:
          'The CO₂ laser is an aesthetic treatment used to improve skin texture and appearance. It works by removing the superficial layers of the epidermis and stimulating collagen production in the dermis. This process reduces scars (acne scars, chickenpox scars, scratch marks…), wrinkles, spots and skin irregularities, while firming and rejuvenating the skin. Results are progressive and long-lasting after an appropriate recovery period.',
      },
      {
        title: 'Tattoo Removal Laser',
        description:
          'Safe tattoo fading or removal by fragmenting ink pigments with targeted laser pulses.',
        details:
          'Tattoo removal laser is a technique that safely fades or removes tattoos. It works by fragmenting ink pigments using targeted light pulses, which the body then eliminates naturally. Several sessions are generally needed depending on the size, color and depth of the tattoo. The treatment provides progressive ink reduction while preserving the surrounding skin.',
      },
      {
        title: 'Chemical Peel',
        description:
          'Controlled exfoliation to stimulate cell renewal and reduce spots, wrinkles and scars.',
        details:
          'Chemical peel is an aesthetic treatment that involves applying a chemical solution to the skin to exfoliate its superficial layers. This technique stimulates cell renewal, improves skin texture and reduces imperfections such as spots, fine wrinkles and acne scars. Depending on the peel intensity, results can be visible quickly and contribute to a brighter, more even complexion.',
      },
      {
        title: 'Carbon Peel (Hollywood Peel)',
        description: 'Carbon and laser peel to purify the skin, reduce sebum and tighten pores.',
        details:
          'The carbon peel, or "carbon laser peel," is a non-invasive aesthetic treatment that combines a carbon lotion with a specific laser. The carbon attracts skin impurities and, as the laser passes over, the particles are eliminated while stimulating collagen production. This treatment helps purify the skin, reduce excess sebum, tighten pores and give a brighter, more even complexion.',
      },
      {
        title: 'IPL (Intense Pulsed Light)',
        description:
          'Treatment of pigment spots, redness, visible vessels and signs of aging with pulsed light.',
        details:
          'Intense pulsed light (IPL) is a non-invasive aesthetic treatment that uses light pulses to target skin imperfections such as pigment spots, redness, visible vessels and signs of aging. It also stimulates collagen production, improves skin texture and evens out complexion. Several sessions are often needed for optimal and lasting results.',
      },
      {
        title: 'Hydrafacial',
        description:
          'Treatment combining cleansing, exfoliation, impurity extraction and deep hydration for a radiant complexion.',
        details:
          'Hydrafacial is a non-invasive aesthetic treatment that combines cleansing, exfoliation, impurity extraction and deep skin hydration. Using a specific device, it removes dead cells, toxins and excess sebum while delivering essential nutrients and hyaluronic acid. This treatment improves skin radiance, hydration and texture for a visibly smoother and brighter complexion.',
      },
      {
        title: 'Lipolysis',
        description: 'Non-surgical reduction of localized fat deposits, particularly double chin.',
        details:
          'Lipolysis is a non-surgical aesthetic treatment that reduces localized fat deposits, particularly the double chin. Through injections or specific techniques, fat cells are broken down and then naturally eliminated by the body. This treatment helps refine facial contour and reshape the chin area in a targeted way, without surgery.',
      },
    ],
    ctaLabel: 'Book an appointment',
  },
  {
    blockType: 'cabinetBlock',
    sectionSubtitle: 'Our space',
    sectionTitle: 'The Clinic',
    photos: [
      { caption: 'Clinic photo — Reception' },
      { caption: 'Clinic photo — Consultation room' },
    ],
    features: [
      {
        title: 'Modern Setting',
        description:
          'An elegant and soothing environment designed for your comfort, with state-of-the-art equipment.',
        icon: 'sparkles',
      },
      {
        title: 'Impeccable Hygiene',
        description:
          'Strict adherence to hygiene and sterilization standards to ensure your safety at every visit.',
        icon: 'shield',
      },
      {
        title: 'Warm Welcome',
        description: 'A caring and attentive team accompanies you throughout your care journey.',
        icon: 'smile',
      },
    ],
  },
  {
    blockType: 'reviewsBlock',
    sectionSubtitle: 'Testimonials',
    sectionTitle: 'Patient Reviews',
    reviews: [
      {
        name: 'Aminata D.',
        rating: 5,
        date: 'Janvier 2026',
        text: 'An exceptional clinic, a warm welcome and a very attentive doctor. My skin has never looked so good. Highly recommend!',
        service: 'Aesthetic Dermatology',
      },
      {
        name: 'Moussa S.',
        rating: 5,
        date: 'Décembre 2025',
        text: 'Very professional, the doctor took the time to explain my diagnosis and the appropriate treatment. Remarkable results.',
        service: 'Medical Dermatology',
      },
      {
        name: 'Fatou N.',
        rating: 5,
        date: 'Novembre 2025',
        text: 'The setting is beautiful and very clean. The team is caring and the treatments are high quality. A must-visit address in Dakar.',
        service: 'Facial care',
      },
      {
        name: 'Ibrahima K.',
        rating: 4,
        date: 'Octobre 2025',
        text: 'Excellent follow-up for my skin problem. The doctor is competent and reassuring. I am very satisfied with the results obtained.',
        service: 'Laser Treatment',
      },
      {
        name: 'Aïssatou B.',
        rating: 5,
        date: 'Septembre 2025',
        text: 'I had pigmentation spots for years. Thanks to the proposed treatment, they have almost completely disappeared. Thank you so much!',
        service: 'Aesthetic Dermatology',
      },
      {
        name: 'Ousmane M.',
        rating: 5,
        date: 'Août 2025',
        text: 'Modern clinic with cutting-edge equipment. The doctor is extremely kind and exemplarily professional. I recommend 100%.',
        service: 'Dermoscopy',
      },
    ],
    ctaText: 'Are you a patient? Share your experience with us.',
    ctaLabel: 'Leave a review',
  },
  {
    blockType: 'galleryBlock',
    sectionSubtitle: 'Our gallery',
    sectionTitle: 'Photo Gallery',
    images: [
      { label: 'Waiting room', category: 'cabinet' },
      { label: 'Consultation room', category: 'cabinet' },
      { label: 'Dermatological laser', category: 'équipements' },
      { label: 'Dermoscope', category: 'équipements' },
      { label: 'Consultation office', category: 'cabinet' },
      { label: 'Treatment room', category: 'équipements' },
      { label: 'Reception', category: 'cabinet' },
      { label: 'Care equipment', category: 'équipements' },
    ],
  },
  {
    blockType: 'contactBlock',
    sectionSubtitle: 'Book an appointment',
    sectionTitle: 'Contact Us',
    address: 'Rue X, Quartier Y\nDakar, Sénégal',
    phone: '+221 XX XXX XX XX',
    phone2: '+221 XX XXX XX XX',
    email: 'contact@dermadakar.com',
    hours: 'Mon - Fri: 9am - 6pm',
    hours2: 'Sat: 9am - 1pm',
    ctaText: 'Take care of your skin, book an appointment now.',
    ctaLabel: 'Book an Appointment',
    ctaLink: 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8942261569373!2d-17.4440!3d14.6928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb5df18b79f14cf66!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr',
  },
]

// ── Main seed function ──────────────────────────────────────────────────────

const seedEnglish = async () => {
  const payload = await getPayload({ config })

  payload.logger.info('Looking for the home page (slug "accueil")...')

  // Try slug "accueil" or "home"
  let { docs } = await payload.find({
    collection: 'pages',
    where: {
      or: [{ slug: { equals: 'accueil' } }, { slug: { equals: 'home' } }],
    },
    locale: 'fr',
    limit: 1,
    depth: 0,
  })

  // Fallback: get the first page
  if (!docs?.length) {
    payload.logger.info('No page with slug "accueil" or "home". Using first page...')
    const allPages = await payload.find({
      collection: 'pages',
      limit: 1,
      depth: 0,
      locale: 'fr',
    })
    docs = allPages.docs
  }

  const page = docs?.[0]

  if (!page) {
    payload.logger.error('No pages found. Create one first in the admin panel.')
    process.exit(1)
  }

  payload.logger.info(
    `Found page (id: ${page.id}, slug: ${(page as any).slug}). Seeding content...`,
  )

  // ── Step 1: Seed FR layout blocks ─────────────────────────────────────────
  payload.logger.info('Step 1/2: Updating French layout blocks...')

  await payload.update({
    collection: 'pages',
    id: page.id,
    locale: 'fr',
    context: { disableRevalidate: true },
    data: {
      title: 'Accueil',
      slug: 'accueil',
      layout: frLayout as any,
    },
  })

  payload.logger.info('French blocks seeded.')

  // ── Step 2: Seed EN translations ──────────────────────────────────────────
  payload.logger.info('Step 2/2: Seeding English translations...')

  await payload.update({
    collection: 'pages',
    id: page.id,
    locale: 'en',
    context: { disableRevalidate: true },
    data: {
      title: 'Home',
      slug: 'accueil',
      layout: enLayout as any,
    },
  })

  payload.logger.info('Both FR and EN content seeded successfully for page "accueil"!')

  process.exit(0)
}

seedEnglish().catch((err) => {
  console.error('Error seeding:', err)
  process.exit(1)
})
