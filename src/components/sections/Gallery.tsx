'use client'

import React, { useState } from 'react'

const galleryImages = [
  { id: 1, category: 'cabinet', label: 'Salle d\'attente' },
  { id: 2, category: 'cabinet', label: 'Salle de consultation' },
  { id: 3, category: 'équipements', label: 'Laser dermatologique' },
  { id: 4, category: 'équipements', label: 'Dermatoscope' },
  { id: 5, category: 'cabinet', label: 'Bureau de consultation' },
  { id: 6, category: 'équipements', label: 'Salle de soins' },
  { id: 7, category: 'cabinet', label: 'Accueil' },
  { id: 8, category: 'équipements', label: 'Matériel de soin' },
]

const categories = ['Tout', 'cabinet', 'équipements']

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tout')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    activeFilter === 'Tout'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <section id="photos" className="py-24 bg-nude-100">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">Notre galerie</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            Les <span className="font-semibold">Photos</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-nude-300" />
            <div className="w-2 h-2 bg-nude-500 rounded-full mx-3" />
            <div className="h-px w-12 bg-nude-300" />
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-wider capitalize transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-nude-500 text-white shadow-md shadow-nude-500/25'
                  : 'bg-white text-nude-600 hover:bg-nude-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-nude-200 to-nude-300 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Placeholder content */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4">
                  <svg
                    className="w-10 h-10 text-nude-500/30 mx-auto mb-2"
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
                  <p className="text-nude-600/50 text-xs">{image.label}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nude-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white text-sm font-medium">{image.label}</p>
                  <p className="text-nude-200/80 text-xs capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full aspect-[4/3] bg-nude-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-nude-500/30 mx-auto mb-4"
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
                  <p className="text-nude-600/60 text-lg italic">
                    {galleryImages.find((img) => img.id === selectedImage)?.label}
                  </p>
                </div>
              </div>
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-nude-800 hover:bg-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
