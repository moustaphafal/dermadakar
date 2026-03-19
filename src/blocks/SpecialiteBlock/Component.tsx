'use client'

import React, { useState } from 'react'
import type { SpecialiteBlockType } from '@/payload-types'

const iconMap: Record<string, React.ReactNode> = {
  dermatologie: (
    <svg
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
      />
    </svg>
  ),
  venerologie: (
    <svg
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  ),
  esthetique: (
    <svg
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  ),
  laser: (
    <svg
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  ),
}

export const SpecialiteBlockComponent: React.FC<SpecialiteBlockType> = ({
  sectionSubtitle,
  sectionTitle,
  sectionDescription,
  specialites,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const titleParts = (sectionTitle || 'Nos Spécialités').split(' ')
  const titlePrefix = titleParts.slice(0, -1).join(' ')
  const titleBold = titleParts[titleParts.length - 1]

  return (
    <section id="specialites" className="py-24 bg-white">
      <div className="container px-4">
        {/* Section title */}
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
          {sectionDescription && (
            <p className="mt-6 text-nude-600 max-w-2xl mx-auto leading-relaxed">
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Specialties grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specialites?.map((specialite, index) => {
            const isExpanded = expandedIndex === index
            const hasDetails = specialite.details && specialite.details.length > 0

            return (
              <div
                key={index}
                className="group relative bg-nude-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-nude-200/50 transition-all duration-500 border border-transparent hover:border-rose-100"
              >
                {/* Header row */}
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 bg-rose-50 rounded-xl flex items-center justify-center text-rose-400 group-hover:bg-rose-400 group-hover:text-white transition-all duration-300">
                    {iconMap[specialite.icon || 'dermatologie'] || iconMap.dermatologie}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-nude-900 mb-2 group-hover:text-rose-500 transition-colors duration-300">
                      {specialite.title}
                    </h3>
                    <p className="text-nude-500 text-sm leading-relaxed">
                      {specialite.description}
                    </p>
                  </div>
                </div>

                {/* Details section */}
                {hasDetails && (
                  <>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-4 ml-[4.75rem] text-rose-400 hover:text-rose-500 text-xs font-medium tracking-wide uppercase flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0 p-0"
                    >
                      {isExpanded ? 'Masquer' : 'En savoir plus'}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="ml-[4.75rem] space-y-3 border-l-2 border-rose-100 pl-4">
                        {specialite.details?.map((detail, detailIndex) => (
                          <div key={detailIndex}>
                            <p className="text-nude-800 text-xs font-semibold uppercase tracking-wide mb-0.5">
                              {detail.label}
                            </p>
                            <p className="text-nude-500 text-sm leading-relaxed">{detail.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-100 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
