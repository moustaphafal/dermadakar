import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Doctor } from '@/components/sections/Doctor'
import { Cabinet } from '@/components/sections/Cabinet'
import { Services } from '@/components/sections/Services'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'
import type { Metadata } from 'next'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Doctor />
      <Cabinet />
      <Services />
      <Gallery />
      <Contact />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'DermaDakar — Cabinet de Dermatologie à Dakar',
  description:
    'Cabinet de dermatologie à Dakar, Sénégal. Spécialiste en dermatologie médicale, chirurgicale et esthétique. Prenez rendez-vous avec notre dermatologue.',
  keywords: [
    'dermatologue dakar',
    'dermatologie dakar',
    'cabinet dermatologie sénégal',
    'dermatologue sénégal',
    'soins peau dakar',
    'dermatologie esthétique dakar',
  ],
  openGraph: {
    title: 'DermaDakar — Cabinet de Dermatologie à Dakar',
    description:
      'Spécialiste en dermatologie médicale, chirurgicale et esthétique à Dakar, Sénégal.',
    type: 'website',
    locale: 'fr_FR',
  },
}
