'use client'

import React from 'react'
import type { DoctorBlockType, Media } from '@/payload-types'
import NextImage from 'next/image'

export const DoctorBlockComponent: React.FC<DoctorBlockType> = ({
  sectionSubtitle,
  sectionTitle,
  photo,
  doctorName,
  specialty,
  biography,
  qualificationsTitle,
  qualifications,
}) => {
  const photoData = photo as Media | null | undefined
  const titleParts = (sectionTitle || 'Le Docteur').split(' ')
  const titlePrefix = titleParts.slice(0, -1).join(' ')
  const titleBold = titleParts[titleParts.length - 1]

  return (
    <section id="docteur" className="py-24 bg-nude-200">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-600 text-sm tracking-[0.3em] uppercase mb-3">{sectionSubtitle}</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            {titlePrefix} <span className="font-semibold">{titleBold}</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-nude-400/60" />
            <div className="w-2 h-2 bg-nude-500 rounded-full mx-3" />
            <div className="h-px w-12 bg-nude-400/60" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Doctor Photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-nude-300/40 shadow-2xl shadow-nude-700/10">
              {photoData?.url ? (
                <NextImage
                  src={photoData.sizes?.large?.url || photoData.url!}
                  alt={photoData.alt || `Dr. ${doctorName}`}
                  width={photoData.sizes?.large?.width || photoData.width || 700}
                  height={photoData.sizes?.large?.height || photoData.height || 933}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 text-nude-400 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={0.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <p className="text-nude-600 text-sm italic">Photo du Docteur</p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-nude-400/30 rounded-2xl -z-10" />
          </div>

          {/* Doctor Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-nude-900 mb-2">
              Dr. <span className="font-semibold">{doctorName}</span>
            </h3>
            <p className="text-nude-600 text-lg mb-6 italic">{specialty}</p>

            <div className="space-y-4 text-nude-800 leading-relaxed">
              {biography?.map((item, i) => (
                <p key={i}>{item.paragraph}</p>
              ))}
            </div>

            {/* Qualifications */}
            <div className="mt-8 space-y-3">
              <h4 className="text-nude-900 font-semibold text-sm tracking-widest uppercase mb-4">
                {qualificationsTitle}
              </h4>
              {qualifications?.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-nude-700 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-nude-700 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
