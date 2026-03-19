import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Cabinet de dermatologie à Dakar, Sénégal. Spécialiste en dermatologie médicale, chirurgicale et esthétique. Dermatologue, vénérologue, médecine esthétique et laser.',
  images: [
    {
      url: `${getServerSideURL()}/og-dermadakar.webp`,
      width: 1200,
      height: 630,
      alt: 'DermaDakar — Cabinet de Dermatologie à Dakar',
    },
  ],
  siteName: 'DermaDakar',
  title: 'DermaDakar — Cabinet de Dermatologie à Dakar',
  locale: 'fr_FR',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
