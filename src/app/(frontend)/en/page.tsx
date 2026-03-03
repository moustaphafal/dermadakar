import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
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
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'DermaDakar — Dermatology Clinic in Dakar',
  description:
    'Dermatology clinic in Dakar, Senegal. Medical, surgical and aesthetic dermatology specialist.',
  keywords: [
    'dermatologist dakar',
    'dermatology dakar',
    'dermatology clinic senegal',
    'skin care dakar',
    'aesthetic dermatology dakar',
  ],
  openGraph: {
    title: 'DermaDakar — Dermatology Clinic in Dakar',
    description: 'Specialist in medical, surgical and aesthetic dermatology in Dakar, Senegal.',
    type: 'website',
    locale: 'en_US',
  },
}
