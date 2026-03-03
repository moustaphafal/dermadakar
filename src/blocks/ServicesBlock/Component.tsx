'use client'

import React, { useState } from 'react'
import type { ServicesBlockType, Media } from '@/payload-types'

export const ServicesBlockComponent: React.FC<ServicesBlockType> = ({
  sectionSubtitle,
  sectionTitle,
  sectionDescription,
  services,
  ctaLabel,
}) => {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const titleParts = (sectionTitle || 'Les Services').split(' ')
  const titlePrefix = titleParts.slice(0, -1).join(' ')
  const titleBold = titleParts[titleParts.length - 1]

  return (
    <section id="services" className="py-24 bg-rose-50">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">{sectionSubtitle}</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            {titlePrefix}{' '}
            <span className="font-semibold">{titleBold}</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-rose-200" />
            <div className="w-2 h-2 bg-rose-400 rounded-full mx-3" />
            <div className="h-px w-12 bg-rose-200" />
          </div>
          {sectionDescription && (
            <p className="mt-6 text-nude-600 max-w-2xl mx-auto leading-relaxed">
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services?.map((service, index) => {
            const imageData = service.image as Media | null | undefined
            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer border-0 p-0 text-left w-full"
              >
                {/* Image background */}
                <div className="absolute inset-0 bg-gradient-to-br from-nude-300 to-nude-500">
                  {imageData?.url ? (
                    <img
                      src={imageData.url}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-300/40 to-nude-400/60" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg
                          className="w-24 h-24 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={0.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 group-hover:bg-white transition-all duration-300 shadow-lg">
                    <h3 className="text-nude-800 font-semibold text-base">{service.title}</h3>
                    <p className="text-nude-500 text-xs mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-rose-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Popup / Modal */}
      {selectedService !== null && services?.[selectedService] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" />

          <div
            className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-[fadeInUp_0.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image header */}
            <div className="relative h-48 bg-gradient-to-br from-nude-300 to-nude-500">
              {(() => {
                const img = services[selectedService].image as Media | null | undefined
                return img?.url ? (
                  <img src={img.url} alt={services[selectedService].title} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-300/40 to-nude-400/60" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg
                        className="w-20 h-20 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={0.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                        />
                      </svg>
                    </div>
                  </>
                )
              })()}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-nude-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-nude-900 mb-4">
                {services[selectedService].title}
              </h3>
              <p className="text-nude-600 leading-relaxed text-sm mb-6">
                {services[selectedService].details}
              </p>
              <a
                href="https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-rose-400/25"
              >
                {ctaLabel || 'Prendre rendez-vous'}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
