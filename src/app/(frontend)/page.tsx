import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LocalBusinessJsonLd, WebsiteJsonLd } from '@/components/JsonLd'
import { getServerSideURL } from '@/utilities/getURL'
import type { Metadata } from 'next'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'accueil' },
    },
    locale: 'fr',
    limit: 1,
    depth: 2,
  })

  const page = docs?.[0]

  if (!page?.layout?.length) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-nude-600 text-lg">
            Créez une page avec le slug &quot;accueil&quot; dans le panneau admin pour afficher le
            contenu.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <LocalBusinessJsonLd locale="fr" />
      <WebsiteJsonLd />
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}

const siteUrl = getServerSideURL()

export const metadata: Metadata = {
  title: 'DermaDakar — Dermatologue à Dakar | Cabinet de Dermatologie Sénégal',
  description:
    'Cabinet de dermatologie à Dakar, Sénégal. Dermatologue spécialiste en dermatologie médicale, chirurgicale et esthétique, vénérologie, médecine esthétique et lasers. Prenez rendez-vous.',
  keywords: [
    'dermatologue dakar',
    'dermatologie dakar',
    'cabinet dermatologie dakar',
    'dermatologue sénégal',
    'dermatologie médicale dakar',
    'dermatologie esthétique dakar',
    'dermatologie chirurgicale dakar',
    'vénérologue dakar',
    'médecine esthétique dakar',
    'laser dermatologique dakar',
    'traitement acné dakar',
    'traitement psoriasis dakar',
    'traitement eczéma dakar',
    'peeling dakar',
    "dermatologue afrique de l'ouest",
    'soins peau dakar',
    'consultation dermatologie dakar',
    'dermatologue pédiatrique dakar',
  ],
  alternates: {
    canonical: siteUrl,
    languages: {
      fr: siteUrl,
      en: `${siteUrl}/en`,
    },
  },
  openGraph: {
    title: 'DermaDakar — Dermatologue à Dakar',
    description:
      'Cabinet de dermatologie à Dakar, Sénégal. Spécialiste en dermatologie médicale, chirurgicale, esthétique, vénérologie et lasers.',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: 'DermaDakar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DermaDakar — Dermatologue à Dakar',
    description:
      'Cabinet de dermatologie à Dakar. Dermatologie médicale, chirurgicale, esthétique et laser.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
