'use client'

import React from 'react'

const reviews = [
  {
    name: 'Aminata D.',
    rating: 5,
    date: 'Janvier 2026',
    text: "Un cabinet d'exception, un accueil chaleureux et un docteur très à l'écoute. Ma peau n'a jamais été aussi belle. Je recommande vivement !",
    service: 'Dermatologie Esthétique',
  },
  {
    name: 'Moussa S.',
    rating: 5,
    date: 'Décembre 2025',
    text: "Très professionnel, le docteur a pris le temps de bien m'expliquer mon diagnostic et le traitement adapté. Les résultats sont remarquables.",
    service: 'Dermatologie Médicale',
  },
  {
    name: 'Fatou N.',
    rating: 5,
    date: 'Novembre 2025',
    text: "Le cadre est magnifique et très propre. L'équipe est bienveillante et les soins sont de qualité. Une adresse incontournable à Dakar.",
    service: 'Soins du visage',
  },
  {
    name: 'Ibrahima K.',
    rating: 4,
    date: 'Octobre 2025',
    text: "Excellent suivi pour mon problème de peau. Le docteur est compétent et rassurant. Je suis très satisfait des résultats obtenus.",
    service: 'Traitement Laser',
  },
  {
    name: 'Aïssatou B.',
    rating: 5,
    date: 'Septembre 2025',
    text: "J'avais des taches pigmentaires depuis des années. Grâce au traitement proposé, elles ont presque totalement disparu. Merci infiniment !",
    service: 'Dermatologie Esthétique',
  },
  {
    name: 'Ousmane M.',
    rating: 5,
    date: 'Août 2025',
    text: "Cabinet moderne avec du matériel de pointe. Le docteur est d'une grande gentillesse et d'un professionnalisme exemplaire. Je recommande à 100%.",
    service: 'Dermatoscopie',
  },
]

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-amber-400' : 'text-nude-200'}`}
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
)

const QuoteIcon: React.FC = () => (
  <svg className="w-8 h-8 text-rose-200" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
  </svg>
)

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-8 shadow-sm border border-nude-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
      {/* Quote icon */}
      <div className="mb-4">
        <QuoteIcon />
      </div>

      {/* Review text */}
      <p className="text-nude-700 text-sm leading-relaxed mb-6 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Rating */}
      <div className="flex gap-0.5 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= review.rating} />
        ))}
      </div>

      {/* Reviewer info */}
      <div className="flex items-center gap-4 pt-4 border-t border-nude-100">
        <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-rose-500 font-semibold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-nude-800 font-semibold text-sm">{review.name}</p>
          <p className="text-nude-500 text-xs">{review.service} — {review.date}</p>
        </div>
      </div>
    </div>
  )
}

export const Reviews: React.FC = () => {
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  // Duplicate reviews for seamless infinite loop
  const duplicated = [...reviews, ...reviews]

  return (
    <section id="avis" className="py-24 bg-rose-50 overflow-hidden">
      <div className="container px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-nude-500 text-sm tracking-[0.3em] uppercase mb-3">Témoignages</p>
          <h2 className="text-3xl md:text-5xl font-light text-nude-900">
            Avis de nos <span className="font-semibold">Patients</span>
          </h2>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-12 bg-rose-200" />
            <div className="w-2 h-2 bg-rose-400 rounded-full mx-3" />
            <div className="h-px w-12 bg-rose-200" />
          </div>

          {/* Average rating */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= Math.round(Number(averageRating))} />
              ))}
            </div>
            <span className="text-nude-800 font-semibold text-lg">{averageRating}</span>
            <span className="text-nude-500 text-sm">/ 5 — {reviews.length} avis</span>
          </div>
        </div>
      </div>

      {/* Marquee scrolling reviews */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-rose-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-rose-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicated.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-nude-600 text-sm mb-4">
          Vous êtes patient(e) ? Partagez votre expérience avec nous.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-rose-300 text-rose-500 rounded-full text-sm tracking-wider uppercase hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all duration-300 hover:shadow-md hover:shadow-rose-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Laisser un avis
        </a>
      </div>
    </section>
  )
}
