import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  interfaceName: 'ContactBlockType',
  labels: {
    singular: 'Contact',
    plural: 'Contacts',
  },
  fields: [
    {
      name: 'sectionSubtitle',
      type: 'text',
      required: true,
      defaultValue: 'Prenez rendez-vous',
      label: 'Sous-titre de section',
    },
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Nous Contacter',
      label: 'Titre de section',
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      defaultValue: 'Rue X, Quartier Y\nDakar, Sénégal',
      label: 'Adresse',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      defaultValue: '+221 XX XXX XX XX',
      label: 'Téléphone principal',
    },
    {
      name: 'phone2',
      type: 'text',
      defaultValue: '+221 XX XXX XX XX',
      label: 'Téléphone secondaire',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      defaultValue: 'contact@dermadakar.com',
      label: 'Email',
    },
    {
      name: 'hours',
      type: 'text',
      required: true,
      defaultValue: 'Lun - Ven : 9h - 18h',
      label: 'Horaires (ligne 1)',
    },
    {
      name: 'hours2',
      type: 'text',
      defaultValue: 'Sam : 9h - 13h',
      label: 'Horaires (ligne 2)',
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
      defaultValue: 'Prenez soin de votre peau, prenez rendez-vous dès maintenant.',
      label: 'Texte CTA',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      required: true,
      defaultValue: 'Prendre Rendez-vous',
      label: 'Texte bouton CTA',
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
      defaultValue: 'tel:+221XXXXXXXX',
      label: 'Lien bouton CTA',
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      required: true,
      defaultValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8942261569373!2d-17.4440!3d14.6928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb5df18b79f14cf66!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr',
      label: 'URL Google Maps Embed',
    },
  ],
}
