'use client'

import React from 'react'
import type { CabinetBlockType, Media } from '@/payload-types'
import NextImage from 'next/image'

const icons: Record<string, React.ReactNode> = {
  sparkles: (
    <svg
      className="w-8 h-8 text-rose-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  ),
  shield: (
    <svg
      className="w-8 h-8 text-rose-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  smile: (
    <svg
      className="w-8 h-8 text-rose-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      />
    </svg>
  ),
  heart: (
    <svg
      className="w-8 h-8 text-rose-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  ),
  building: (
    <svg
      className="w-8 h-8 text-rose-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z"
      />
    </svg>
  ),
  users: (
    <svg
      className="w-8 h-8 text-rose-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
}

export const CabinetBlockComponent: React.FC<CabinetBlockType> = ({
  sectionSubtitle,
  sectionTitle,
  photos,
  features,
}) => {
  const titleParts = (sectionTitle || 'Le Cabinet').split(' ')
  const titlePrefix = titleParts.slice(0, -1).join(' ')
  const titleBold = titleParts[titleParts.length - 1]

  return (
    <section id="cabinet" className="py-24 bg-white">
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

        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-${Math.min(photos?.length || 2, 2)} gap-8 mb-12`}>
            {photos?.map((photo, i) => {
              const imageData = photo.image as Media | null | undefined
              return (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-nude-200 to-nude-300 shadow-lg"
                >
                  {imageData?.url ? (
                    <NextImage
                      src={imageData.sizes?.medium?.url || imageData.url!}
                      alt={photo.caption || ''}
                      width={imageData.sizes?.medium?.width || imageData.width || 900}
                      height={imageData.sizes?.medium?.height || imageData.height || 675}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 text-nude-500/40 mx-auto mb-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={0.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z"
                          />
                        </svg>
                        <p className="text-nude-600/60 text-sm italic">{photo.caption}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div
            className={`grid lg:grid-cols-${Math.min(features?.length || 3, 3)} gap-8 text-center`}
          >
            {features?.map((feature, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  {icons[feature.icon || 'sparkles'] || icons.sparkles}
                </div>
                <h3 className="text-nude-800 font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-nude-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
