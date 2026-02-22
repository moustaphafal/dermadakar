import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { Metadata } from 'next'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
    limit: 1,
    depth: 2,
  })

  const page = docs?.[0]

  if (!page?.layout?.length) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-nude-600 text-lg">
            Créez une page avec le slug &quot;home&quot; dans le panneau admin pour afficher le contenu.
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
