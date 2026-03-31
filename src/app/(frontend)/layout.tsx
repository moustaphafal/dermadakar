import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode, headers } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  const headersList = await headers()
  const locale = headersList.get('x-locale') || 'fr'

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon3.svg" rel="icon" type="image/svg+xml" />
        <meta name="geo.region" content="SN-DK" />
        <meta name="geo.placename" content="Dakar" />
        <meta name="geo.position" content="14.6928;-17.4440" />
        <meta name="ICBM" content="14.6928, -17.4440" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'DouDerma — Dermatologue à Dakar | Cabinet de Dermatologie',
    template: '%s | DouDerma',
  },
  description:
    'Cabinet de dermatologie à Dakar, Sénégal. Dermatologue spécialiste en dermatologie médicale, chirurgicale et esthétique, vénérologie, médecine esthétique et lasers.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    site: '@douderma',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
}
