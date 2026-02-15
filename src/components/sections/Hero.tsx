'use client'

import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nude-900 via-nude-800 to-nude-700" />
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTQiLz48L2c+PC9nPjwvc3ZnPg==')]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nude-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nude-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 container text-center px-4">
        {/* Elegant decorative line */}
        <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-in-up">
          <div className="h-px w-16 bg-nude-300" />
          <div className="mx-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-nude-300">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="h-px w-16 bg-nude-300" />
        </div>

        <p className="text-nude-300 text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up animate-delay-100">
          Cabinet de Dermatologie à Dakar
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight opacity-0 animate-fade-in-up animate-delay-200">
          Dr. <span className="font-semibold">Nom du Docteur</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-nude-200 font-light mb-4 opacity-0 animate-fade-in-up animate-delay-300">
          Dermatologue — Vénérologue
        </h2>

        <p className="text-nude-300/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animate-delay-400">
          Spécialiste en dermatologie médicale, chirurgicale et esthétique.
          <br />
          Au service de la beauté et de la santé de votre peau.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-500">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-nude-500 hover:bg-nude-400 text-white rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-nude-500/25"
          >
            Prendre Rendez-vous
          </a>
          <a
            href="#docteur"
            className="inline-flex items-center justify-center px-8 py-4 border border-nude-300/30 hover:border-nude-300/60 text-nude-200 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/5"
          >
            Découvrir
          </a>
        </div>

        {/* Contact info strip */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center text-nude-300/70 text-sm opacity-0 animate-fade-in-up animate-delay-500">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>+221 XX XXX XX XX</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Dakar, Sénégal</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Lun - Ven : 9h - 18h</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#docteur" className="text-nude-300/50 hover:text-nude-300 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
