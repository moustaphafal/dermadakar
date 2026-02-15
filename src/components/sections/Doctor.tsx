'use client'

import React from 'react'

export const Doctor: React.FC = () => {
  return (
    <section id="docteur" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">Votre spécialiste</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            Le <span className="font-semibold">Docteur</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-nude-300" />
            <div className="w-2 h-2 bg-nude-500 rounded-full mx-3" />
            <div className="h-px w-12 bg-nude-300" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Doctor Photo Placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-nude-200 to-nude-300 shadow-2xl shadow-nude-500/10">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-nude-500/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-nude-600/60 text-sm italic">Photo du Docteur</p>
                </div>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-nude-300/30 rounded-2xl -z-10" />
          </div>

          {/* Doctor Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-nude-900 mb-2">
              Dr. <span className="font-semibold">Nom du Docteur</span>
            </h3>
            <p className="text-nude-500 text-lg mb-6 italic">
              Dermatologue — Vénérologue
            </p>

            <div className="space-y-4 text-nude-700 leading-relaxed">
              <p>
                Diplômé(e) de la Faculté de Médecine de Dakar, le Dr. Nom du Docteur exerce
                la dermatologie avec passion et excellence depuis plus de X années.
              </p>
              <p>
                Spécialisé(e) en dermatologie médicale, chirurgicale et esthétique,
                il/elle prend en charge l&apos;ensemble des pathologies cutanées avec une
                approche personnalisée et bienveillante.
              </p>
              <p>
                Sa formation continue et son engagement dans la recherche dermatologique
                lui permettent de proposer les traitements les plus innovants à ses patients.
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8 space-y-3">
              <h4 className="text-nude-800 font-semibold text-sm tracking-widest uppercase mb-4">
                Formations & Diplômes
              </h4>
              {[
                'Doctorat en Médecine — Université Cheikh Anta Diop de Dakar',
                'Spécialisation en Dermatologie-Vénéréologie',
                'Formation en Dermatologie Esthétique et Laser',
                'Membre de la Société Sénégalaise de Dermatologie',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-nude-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-nude-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
