import React from 'react'
import type { QuoteBlockType } from '@/payload-types'
import type { Media } from '@/payload-types'
import NextImage from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'

const secondaryQuoteFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const QuoteBlockComponent: React.FC<QuoteBlockType> = ({
  image,
  description,
  secondaryQuote,
}) => {
  const media = image as Media

  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] overflow-hidden bg-nude-100">
      {media?.url ? (
        <NextImage
          src={media.sizes?.xlarge?.url || media.sizes?.large?.url || media.url!}
          alt={media.alt || ''}
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      ) : null}

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 min-h-[60vh] md:min-h-[75vh] flex items-center justify-center px-6 md:px-12">
        <p
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-tight text-center max-w-4xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]"
          style={{ fontFamily: "'Yearlong', cursive" }}
        >
          {description}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-7 bg-gradient-to-t from-black/75 via-black/45 to-transparent">
        <p
          className={`${secondaryQuoteFont.className} text-white/95 text-lg md:text-2xl text-center italic tracking-wide`}
        >
          {secondaryQuote || 'Let me make one thing clear, your skin'}
        </p>
      </div>
    </section>
  )
}
