'use client'

import React from 'react'
import type { HeroBlockType, Media } from '@/payload-types'

export const HeroBlockComponent: React.FC<HeroBlockType> = ({
  subtitle,
  doctorName,
  specialty,
  description,
  ctaLabel,
  ctaLink,
  secondaryLabel,
  secondaryLink,
  phone,
  location,
  hours,
  backgroundImage,
}) => {
  const descLines = (description || '').split('\n')
  const heroBackground = typeof backgroundImage === 'object' ? (backgroundImage as Media) : null

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {heroBackground?.url ? (
        <>
          <img
            src={heroBackground.url}
            alt={heroBackground.alt || 'Fond Hero'}
            className="absolute inset-0 h-full w-full object-cover blur-[4px] scale-105"
          />
          <div className="absolute inset-0 bg-white/45" />
        </>
      ) : (
        <div className="absolute inset-0 bg-white" />
      )}

      <div className="relative z-10 container text-center px-4">
        {/* Elegant decorative line */}
        <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-in-up">
          <div className="h-px w-16 bg-rose-400 animate-expand-line" />
          <div className="mx-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-rose-400 animate-spin-slow"
            >
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="h-px w-16 bg-rose-400 animate-expand-line" />
        </div>

        <p className="text-nude-800 text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up animate-delay-100">
          {subtitle}
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-nude-900 mb-6 leading-tight opacity-0 animate-fade-in-up animate-delay-200">
          Dr. <span className="font-semibold animate-text-shimmer bg-clip-text">{doctorName}</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-nude-800 font-light mb-4 opacity-0 animate-fade-in-up animate-delay-300">
          {specialty}
        </h2>

        <p className="text-nude-700 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animate-delay-400">
          {descLines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-500">
          <a
            href={ctaLink || 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui'}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-rose-400/30 hover:scale-105 active:scale-95"
          >
            <span className="group-hover:tracking-[0.2em] transition-all duration-300">
              {ctaLabel}
            </span>
          </a>
          <a
            href={secondaryLink || '#docteur'}
            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-rose-400 hover:bg-rose-400 text-rose-400 hover:text-white rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="group-hover:tracking-[0.2em] transition-all duration-300">
              {secondaryLabel}
            </span>
          </a>
        </div>

        {/* Contact info strip */}
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center text-nude-800 text-sm opacity-0 animate-fade-in-up animate-delay-500">
          {phone && (
            <div className="flex items-center justify-center gap-2 hover:text-rose-400 transition-colors duration-300 group cursor-default">
              <svg
                className="w-4 h-4 text-rose-400 group-hover:animate-pulse"
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
              <span>{phone}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center justify-center gap-2 hover:text-rose-400 transition-colors duration-300 group cursor-default">
              <svg
                className="w-4 h-4 text-rose-400 group-hover:animate-pulse"
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
              <span>{location}</span>
            </div>
          )}
          {hours && (
            <div className="flex items-center justify-center gap-2 hover:text-rose-400 transition-colors duration-300 group cursor-default">
              <svg
                className="w-4 h-4 text-rose-400 group-hover:animate-pulse"
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
              <span>{hours}</span>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href={secondaryLink || '#docteur'}
          className="text-rose-300 hover:text-rose-400 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
