'use client'

import React from 'react'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-nude-400">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-3">
            Prenez rendez-vous
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white">
            Nous <span className="font-semibold">Contacter</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-white/30" />
            <div className="w-2 h-2 bg-white rounded-full mx-3" />
            <div className="h-px w-12 bg-white/30" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact cards row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Address */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Adresse</h4>
              <p className="text-white/80 text-sm">
                Rue X, Quartier Y
                <br />
                Dakar, Sénégal
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Téléphone</h4>
              <p className="text-white/80 text-sm">
                +221 XX XXX XX XX
                <br />
                +221 XX XXX XX XX
              </p>
            </div>

            {/* Email */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
              <p className="text-white/80 text-sm">contact@douderma.com</p>
            </div>

            {/* Hours */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">Horaires</h4>
              <p className="text-white/80 text-sm">
                Lun - Ven : 9h - 18h
                <br />
                Sam : 9h - 13h
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12">
            <p className="text-white/80 text-lg mb-6">
              Prenez soin de votre peau, prenez rendez-vous dès maintenant.
            </p>
            <a
              href="https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-nude-700 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Prendre Rendez-vous
            </a>
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[350px] border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8942261569373!2d-17.4440!3d14.6928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb5df18b79f14cf66!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet DouDerma"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
