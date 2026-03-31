import { getServerSideURL } from '@/utilities/getURL'

interface JsonLdProps {
  locale?: 'fr' | 'en'
}

export function LocalBusinessJsonLd({ locale = 'fr' }: JsonLdProps) {
  const siteUrl = getServerSideURL()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'DouDerma',
    alternateName: 'Cabinet de Dermatologie DouDerma',
    description:
      locale === 'fr'
        ? 'Cabinet de dermatologie à Dakar, Sénégal. Spécialiste en dermatologie médicale, chirurgicale et esthétique, vénérologie, médecine esthétique et lasers.'
        : 'Dermatology clinic in Dakar, Senegal. Specialist in medical, surgical and aesthetic dermatology, venereology, aesthetic medicine and lasers.',
    url: siteUrl,
    telephone: '+221 XX XXX XX XX',
    email: 'contact@douderma.com',
    image: `${siteUrl}/og-douderma.webp`,
    priceRange: '$$',
    currenciesAccepted: 'XOF',
    paymentAccepted: 'Cash, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue X, Quartier Y',
      addressLocality: 'Dakar',
      addressRegion: 'Dakar',
      addressCountry: 'SN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.6928,
      longitude: -17.444,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    medicalSpecialty: ['Dermatology', 'Venereology', 'CosmeticSurgery'],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name:
          locale === 'fr'
            ? 'Dermatologie adulte et pédiatrique'
            : 'Adult and Pediatric Dermatology',
        procedureType: 'NoninvasiveProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: locale === 'fr' ? 'Vénérologie' : 'Venereology',
        procedureType: 'NoninvasiveProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: locale === 'fr' ? 'Médecine esthétique' : 'Aesthetic Medicine',
        procedureType: 'NoninvasiveProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: locale === 'fr' ? 'Traitement Laser' : 'Laser Treatment',
        procedureType: 'NoninvasiveProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: locale === 'fr' ? 'Dermatologie Chirurgicale' : 'Surgical Dermatology',
        procedureType: 'SurgicalProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: locale === 'fr' ? 'Dermatoscopie' : 'Dermoscopy',
        procedureType: 'NoninvasiveProcedure',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Dakar',
      containedInPlace: {
        '@type': 'Country',
        name: 'Senegal',
      },
    },
    sameAs: [],
    inLanguage: locale === 'fr' ? 'fr-FR' : 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const siteUrl = getServerSideURL()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'DouDerma',
    url: siteUrl,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: ['fr-FR', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
