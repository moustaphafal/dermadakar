import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LocalBusinessJsonLd, WebsiteJsonLd } from '@/components/JsonLd'
import { getServerSideURL } from '@/utilities/getURL'
import type { Metadata } from 'next'

export default async function HomePageEN() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'accueil' },
    },
    locale: 'en',
    limit: 1,
    depth: 2,
  })

  const page = docs?.[0]

  if (!page?.layout?.length) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-nude-600 text-lg">
            Run <code className="font-mono">pnpm seed:en</code> to populate English content.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <LocalBusinessJsonLd locale="en" />
      <WebsiteJsonLd />
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}

const siteUrl = getServerSideURL()

export const metadata: Metadata = {
  title: 'DouDerma — Dermatologist in Dakar | Dermatology Clinic Senegal',
  description:
    'Dermatology clinic in Dakar, Senegal. Dermatologist specialist in medical, surgical and aesthetic dermatology, venereology, aesthetic medicine and laser treatments. Book an appointment.',
  keywords: [
    'dermatologist dakar',
    'dermatology dakar',
    'dermatology clinic dakar',
    'dermatologist senegal',
    'medical dermatology dakar',
    'aesthetic dermatology dakar',
    'surgical dermatology dakar',
    'venereologist dakar',
    'aesthetic medicine dakar',
    'laser treatment dakar',
    'acne treatment dakar',
    'skin care dakar',
    'dermatology consultation dakar',
    'pediatric dermatologist dakar',
    'dermatologist west africa',
  ],
  alternates: {
    canonical: `${siteUrl}/en`,
    languages: {
      fr: siteUrl,
      en: `${siteUrl}/en`,
    },
  },
  openGraph: {
    title: 'DouDerma — Dermatologist in Dakar',
    description:
      'Dermatology clinic in Dakar, Senegal. Specialist in medical, surgical, aesthetic dermatology, venereology and lasers.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    url: `${siteUrl}/en`,
    siteName: 'DouDerma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DouDerma — Dermatologist in Dakar',
    description:
      'Dermatology clinic in Dakar. Medical, surgical, aesthetic dermatology and laser treatments.',
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
