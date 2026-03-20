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
        title: 'Medical Dermatology',
        description:
          'Diagnosis and treatment of all skin diseases: eczema, psoriasis, acne, fungal infections, skin allergies, infections...',
        details:
          'Our medical dermatology expertise covers all skin conditions. We treat eczema, psoriasis, acne in all its forms, skin and nail fungal infections, contact and food allergies, bacterial and viral skin infections, as well as chronic inflammatory diseases. Each patient receives an accurate diagnosis and a personalized treatment plan.',
      },
      {
        title: 'Surgical Dermatology',
        description:
          'Excision of skin lesions, biopsies, surgery for benign and malignant tumors, cryotherapy, electrocoagulation.',
        details:
          'Our clinic is equipped to perform surgical dermatology procedures safely. We perform excision of suspicious or bothersome skin lesions, diagnostic biopsies, surgery for benign tumors (cysts, lipomas) and malignant tumors (carcinomas, melanomas), liquid nitrogen cryotherapy and electrocoagulation. All procedures are performed under local anesthesia in strict aseptic conditions.',
      },
      {
        title: 'Aesthetic Dermatology',
        description:
          'Chemical peels, mesotherapy, pigmentation treatment, skin rejuvenation, injections and anti-aging care.',
        details:
          'Our aesthetic department offers advanced treatments to enhance your skin. Chemical peels (superficial, medium and deep), revitalizing mesotherapy, targeted treatment for pigmentation spots and melasma, skin rejuvenation through micro-needling, hyaluronic acid and botulinum toxin injections, PRP (platelet-rich plasma) and personalized anti-aging protocols for a natural and harmonious result.',
      },
      {
        title: 'Venereology (STIs)',
        description:
          'Screening, diagnosis and treatment of sexually transmitted infections, follow-up and preventive counseling.',
        details:
          'We provide comprehensive and confidential care for sexually transmitted infections (STIs). Systematic or targeted screening, clinical and biological diagnosis, treatment according to the latest guidelines, post-therapeutic follow-up and preventive counseling. Our compassionate approach ensures respectful and non-judgmental support for all our patients.',
      },
      {
        title: 'Laser Treatment',
        description:
          'Laser hair removal, scar treatment, warts, vascular and pigmented lesions with state-of-the-art lasers.',
        details:
          'Our latest-generation laser equipment allows us to treat a wide range of conditions and imperfections. Long-lasting laser hair removal for all skin types, treatment of acne and surgical scars, removal of resistant warts, management of vascular lesions (rosacea, angiomas) and pigmented lesions (sun spots, lentigines). A customized protocol is established after an evaluation consultation.',
      },
      {
        title: 'Dermoscopy',
        description:
          'Dermoscopic examination of moles, naevi monitoring, early detection of melanoma and skin cancers.',
        details:
          'Dermoscopy is an essential non-invasive examination for monitoring your moles. Using a high-precision dermoscope, we analyze the microscopic structure of each pigmented lesion, provide photographic follow-up of atypical naevi, and perform early detection of melanoma and other skin cancers. Regular examination is recommended, particularly for at-risk skin types.',
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
