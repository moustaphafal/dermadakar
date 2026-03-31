import React from 'react'
import type { QuoteBlockType } from '@/payload-types'
import type { Media } from '@/payload-types'
import NextImage from 'next/image'

export const QuoteBlockComponent: React.FC<QuoteBlockType> = ({ image, description }) => {
  const media = image as Media

  return (
    <section className="py-20 md:py-28 bg-nude-200 relative overflow-hidden">
      {/* Decorative stickers */}
      {/* Sparkle top-left */}
      <svg
        className="absolute top-8 left-[5%] w-16 h-16 text-rose-300/30 rotate-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
      {/* Heart top-right */}
      <svg
        className="absolute top-10 right-[8%] w-14 h-14 text-rose-400/25 -rotate-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {/* Star center-top */}
      <svg
        className="absolute top-6 left-[35%] w-10 h-10 text-nude-500/25 rotate-[15deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      {/* Sun top-center-right */}
      <svg
        className="absolute top-14 left-[55%] w-8 h-8 text-nude-400/20 rotate-[30deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
      </svg>
      {/* Bookmark left-middle */}
      <svg
        className="absolute top-1/2 left-[3%] w-10 h-10 text-rose-300/20 rotate-[60deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
      {/* Sparkle bottom-left */}
      <svg
        className="absolute bottom-16 left-[10%] w-12 h-12 text-nude-400/30 -rotate-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
      {/* Heart bottom-right */}
      <svg
        className="absolute bottom-10 right-[12%] w-12 h-12 text-rose-400/20 rotate-[25deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {/* Star bottom-center */}
      <svg
        className="absolute bottom-8 left-[40%] w-8 h-8 text-nude-500/15 rotate-[45deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      {/* Small sparkle right-middle */}
      <svg
        className="absolute top-[40%] right-[4%] w-8 h-8 text-rose-300/25 rotate-[10deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
      {/* Tiny heart left-bottom */}
      <svg
        className="absolute bottom-[35%] left-[15%] w-6 h-6 text-rose-400/15 -rotate-[20deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {/* Tiny star top-left-2 */}
      <svg
        className="absolute top-[30%] left-[8%] w-6 h-6 text-nude-400/20 rotate-[50deg]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      {/* Sparkle right-bottom-far */}
      <svg
        className="absolute bottom-[20%] right-[6%] w-10 h-10 text-nude-400/25 rotate-[75deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>

      {/* Main content: description left, photo right */}
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Description - left side, vertically centered */}
          <div className="md:w-3/5 flex items-center justify-center py-4">
            <p
              className="text-xl md:text-2xl lg:text-3xl text-nude-800 leading-relaxed text-center max-w-md"
              style={{ fontFamily: "'Yearlong', cursive" }}
            >
              <span className="text-rose-400 text-3xl md:text-4xl lg:text-5xl leading-none">
                {'" '}
              </span>
              {description}
              <span className="text-rose-400 text-3xl md:text-4xl lg:text-5xl leading-none">
                {' "'}
              </span>
            </p>
          </div>

          {/* Photo card - right side */}
          <div className="md:w-2/5 flex justify-center">
            <div className="w-56 md:w-64 rounded-2xl overflow-hidden shadow-2xl shadow-nude-700/10">
              {media?.url && (
                <NextImage
                  src={media.sizes?.medium?.url || media.url!}
                  alt={media.alt || ''}
                  width={media.sizes?.medium?.width || media.width || 256}
                  height={media.sizes?.medium?.height || media.height || 256}
                  className="w-full h-auto block"
                  sizes="256px"
                  quality={80}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
