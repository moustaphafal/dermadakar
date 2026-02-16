'use client'

import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Merci pour votre message ! Nous vous recontacterons dans les meilleurs délais.')
    setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">Prenez rendez-vous</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            Nous <span className="font-semibold">Contacter</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-nude-300" />
            <div className="w-2 h-2 bg-nude-500 rounded-full mx-3" />
            <div className="h-px w-12 bg-nude-300" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info + Map */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-nude-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h4 className="text-nude-800 font-semibold text-sm mb-1">Adresse</h4>
                <p className="text-nude-600 text-sm">
                  Rue X, Quartier Y
                  <br />
                  Dakar, Sénégal
                </p>
              </div>

              {/* Phone */}
              <div className="bg-nude-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h4 className="text-nude-800 font-semibold text-sm mb-1">Téléphone</h4>
                <p className="text-nude-600 text-sm">
                  +221 XX XXX XX XX
                  <br />
                  +221 XX XXX XX XX
                </p>
              </div>

              {/* Email */}
              <div className="bg-nude-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h4 className="text-nude-800 font-semibold text-sm mb-1">Email</h4>
                <p className="text-nude-600 text-sm">
                  contact@dermadakar.com
                </p>
              </div>

              {/* Hours */}
              <div className="bg-nude-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-nude-200 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nude-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-nude-800 font-semibold text-sm mb-1">Horaires</h4>
                <p className="text-nude-600 text-sm">
                  Lun - Ven : 9h - 18h
                  <br />
                  Sam : 9h - 13h
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] border border-nude-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8942261569373!2d-17.4440!3d14.6928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb5df18b79f14cf66!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du cabinet DermaDakar"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-nude-200/50">
            <h3 className="text-2xl font-light text-nude-900 mb-2">
              Envoyez-nous un <span className="font-semibold">message</span>
            </h3>
            <p className="text-nude-600 text-sm mb-8">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nom" className="block text-nude-700 text-sm font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 bg-nude-50 focus:bg-white focus:border-nude-500 focus:ring-2 focus:ring-nude-500/20 transition-all outline-none text-nude-800 text-sm placeholder:text-nude-400"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-nude-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-nude-200 bg-nude-50 focus:bg-white focus:border-nude-500 focus:ring-2 focus:ring-nude-500/20 transition-all outline-none text-nude-800 text-sm placeholder:text-nude-400"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-nude-700 text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-nude-200 bg-nude-50 focus:bg-white focus:border-nude-500 focus:ring-2 focus:ring-nude-500/20 transition-all outline-none text-nude-800 text-sm placeholder:text-nude-400"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sujet" className="block text-nude-700 text-sm font-medium mb-2">
                  Sujet *
                </label>
                <select
                  id="sujet"
                  required
                  value={formData.sujet}
                  onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 bg-nude-50 focus:bg-white focus:border-nude-500 focus:ring-2 focus:ring-nude-500/20 transition-all outline-none text-nude-800 text-sm"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="rdv">Prise de rendez-vous</option>
                  <option value="info">Demande d&apos;information</option>
                  <option value="urgence">Urgence dermatologique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-nude-700 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-nude-200 bg-nude-50 focus:bg-white focus:border-nude-500 focus:ring-2 focus:ring-nude-500/20 transition-all outline-none text-nude-800 text-sm placeholder:text-nude-400 resize-none"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-nude-500 hover:bg-nude-600 text-white rounded-xl text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-nude-500/25"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
