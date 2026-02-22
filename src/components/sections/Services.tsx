'use client'

import React, { useState } from 'react'

const services = [
  {
    title: 'Dermatologie Médicale',
    description:
      'Diagnostic et traitement de toutes les maladies de la peau : eczéma, psoriasis, acné, mycoses, allergies cutanées, infections...',
    image: '/services/dermatologie-medicale.jpg',
    details:
      'Notre expertise en dermatologie médicale couvre l\'ensemble des pathologies cutanées. Nous prenons en charge l\'eczéma, le psoriasis, l\'acné sous toutes ses formes, les mycoses cutanées et unguéales, les allergies de contact et alimentaires, les infections bactériennes et virales de la peau, ainsi que les maladies inflammatoires chroniques. Chaque patient bénéficie d\'un diagnostic précis et d\'un plan de traitement personnalisé.',
  },
  {
    title: 'Dermatologie Chirurgicale',
    description:
      'Exérèse de lésions cutanées, biopsies, chirurgie des tumeurs bénignes et malignes, cryothérapie, électrocoagulation.',
    image: '/services/dermatologie-chirurgicale.jpg',
    details:
      'Notre cabinet est équipé pour réaliser les interventions de dermatologie chirurgicale en toute sécurité. Nous pratiquons l\'exérèse de lésions cutanées suspectes ou gênantes, les biopsies diagnostiques, la chirurgie des tumeurs bénignes (kystes, lipomes) et malignes (carcinomes, mélanomes), la cryothérapie à l\'azote liquide et l\'électrocoagulation. Toutes les interventions sont réalisées sous anesthésie locale dans des conditions d\'asepsie strictes.',
  },
  {
    title: 'Dermatologie Esthétique',
    description:
      'Peelings, mésothérapie, traitement des taches pigmentaires, rajeunissement cutané, injections et soins anti-âge.',
    image: '/services/dermatologie-esthetique.jpg',
    details:
      'Notre pôle esthétique propose des soins avancés pour sublimer votre peau. Peelings chimiques (superficiels, moyens et profonds), mésothérapie revitalisante, traitement ciblé des taches pigmentaires et du mélasma, rajeunissement cutané par micro-needling, injections d\'acide hyaluronique et de toxine botulique, PRP (plasma riche en plaquettes) et protocoles anti-âge personnalisés pour un résultat naturel et harmonieux.',
  },
  {
    title: 'Vénéréologie (IST)',
    description:
      'Dépistage, diagnostic et traitement des infections sexuellement transmissibles, suivi et conseil préventif.',
    image: '/services/venereologie.jpg',
    details:
      'Nous assurons une prise en charge complète et confidentielle des infections sexuellement transmissibles (IST). Dépistage systématique ou orienté, diagnostic clinique et biologique, traitement adapté selon les dernières recommandations, suivi post-thérapeutique et conseil préventif. Notre approche bienveillante garantit un accompagnement respectueux et sans jugement pour tous nos patients.',
  },
  {
    title: 'Traitement Laser',
    description:
      'Épilation laser, traitement des cicatrices, verrues, lésions vasculaires et pigmentaires avec des lasers de pointe.',
    image: '/services/traitement-laser.jpg',
    details:
      'Notre plateau technique laser de dernière génération permet de traiter un large éventail de pathologies et imperfections. Épilation laser longue durée pour tous types de peau, traitement des cicatrices d\'acné et chirurgicales, destruction des verrues résistantes, prise en charge des lésions vasculaires (couperose, angiomes) et pigmentaires (taches solaires, lentigos). Un protocole sur mesure est établi après une consultation d\'évaluation.',
  },
  {
    title: 'Dermatoscopie',
    description:
      'Examen dermoscopique des grains de beauté, surveillance des nævus, dépistage précoce du mélanome et des cancers cutanés.',
    image: '/services/dermatoscopie.jpg',
    details:
      'La dermatoscopie est un examen non invasif indispensable pour la surveillance de vos grains de beauté. Grâce à un dermoscope de haute précision, nous analysons la structure microscopique de chaque lésion pigmentée, assurons le suivi photographique des nævus atypiques, et réalisons le dépistage précoce du mélanome et des autres cancers cutanés. Un examen régulier est recommandé, en particulier pour les peaux à risque.',
  },
]

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-rose-50">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">Nos expertises</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            Les <span className="font-semibold">Services</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-rose-200" />
            <div className="w-2 h-2 bg-rose-400 rounded-full mx-3" />
            <div className="h-px w-12 bg-rose-200" />
          </div>
          <p className="mt-6 text-nude-600 max-w-2xl mx-auto leading-relaxed">
            Une prise en charge complète de votre peau, alliant expertise médicale
            et technologies de pointe pour des résultats optimaux.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border-0 p-0 text-left w-full"
            >
              {/* Image background */}
              <div className="absolute inset-0 bg-gradient-to-br from-nude-300 to-nude-500">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300/40 to-nude-400/60" />
                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              </div>

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

              {/* Service name - always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 group-hover:bg-white transition-all duration-300 shadow-lg">
                  <h3 className="text-nude-800 font-semibold text-base">{service.title}</h3>
                  <p className="text-nude-500 text-xs mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* "+" indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popup / Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />

          {/* Modal content */}
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-[fadeInUp_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative h-48 bg-gradient-to-br from-nude-300 to-nude-500">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300/40 to-nude-400/60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
              </div>
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md cursor-pointer"
              >
                <svg className="w-5 h-5 text-nude-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Text content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-nude-900 mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-nude-600 leading-relaxed text-sm mb-6">
                {services[selectedService].details}
              </p>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-rose-400/25"
              >
                Prendre rendez-vous
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
