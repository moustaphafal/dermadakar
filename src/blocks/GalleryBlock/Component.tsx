'use client'

import React, { useState } from 'react'
import type { GalleryBlockType, Media } from '@/payload-types'
import NextImage from 'next/image'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export const GalleryBlockComponent: React.FC<GalleryBlockType> = ({
  sectionSubtitle,
  sectionTitle,
  images,
}) => {
  const [activeFilter, setActiveFilter] = useState('Tout')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const titleParts = (sectionTitle || 'Les Photos').split(' ')
  const titlePrefix = titleParts.slice(0, -1).join(' ')
  const titleBold = titleParts[titleParts.length - 1]

  const categories = ['Tout', ...Array.from(new Set(images?.map((img) => img.category) || []))]

  const filteredImages =
    activeFilter === 'Tout'
      ? images || []
      : (images || []).filter((img) => img.category === activeFilter)

  return (
    <section id="photos" className="py-24 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">{sectionSubtitle}</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            {titlePrefix} <span className="font-semibold">{titleBold}</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-rose-200" />
            <div className="w-2 h-2 bg-rose-400 rounded-full mx-3" />
            <div className="h-px w-12 bg-rose-200" />
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
                  ? 'bg-rose-400 text-white shadow-md shadow-rose-400/25'
                  : 'bg-white text-nude-600 hover:bg-rose-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredImages.map((galleryImage, index) => {
            const imageData = galleryImage.image as Media | null | undefined
            return (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-nude-200 to-nude-300 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                {imageData?.url ? (
                  <NextImage
                    src={getMediaUrl(imageData.sizes?.small?.url || imageData.url)}
                    alt={galleryImage.label}
                    width={imageData.sizes?.small?.width || imageData.width || 600}
                    height={imageData.sizes?.small?.height || imageData.height || 600}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={80}
                  />
                ) : (
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
                      <p className="text-nude-600/50 text-xs">{galleryImage.label}</p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm font-medium">{galleryImage.label}</p>
                    <p className="text-nude-200/80 text-xs capitalize">{galleryImage.category}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && filteredImages[selectedImage] && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full aspect-[4/3] bg-nude-100 rounded-2xl overflow-hidden">
              {(() => {
                const img = filteredImages[selectedImage].image as Media | null | undefined
                return img?.url ? (
                  <NextImage
                    src={getMediaUrl(img.sizes?.large?.url || img.url)}
                    alt={filteredImages[selectedImage].label}
                    width={img.sizes?.large?.width || img.width || 1400}
                    height={img.sizes?.large?.height || img.height || 1050}
                    className="w-full h-full object-cover"
                    sizes="100vw"
                    quality={80}
                  />
                ) : (
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
                        {filteredImages[selectedImage].label}
                      </p>
                    </div>
                  </div>
                )
              })()}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-nude-800 hover:bg-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
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
