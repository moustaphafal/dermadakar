'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const LanguageSwitcher: React.FC = () => {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

  return (
    <div className="flex items-center gap-1 border border-white/20 rounded-full px-1 py-0.5">
      <Link
        href="/"
        className={`text-xs px-2 py-0.5 rounded-full transition-all duration-200 ${
          !isEnglish
            ? 'bg-white/20 text-white font-semibold'
            : 'text-white/50 hover:text-white/80'
        }`}
      >
        FR
      </Link>
      <Link
        href="/en"
        className={`text-xs px-2 py-0.5 rounded-full transition-all duration-200 ${
          isEnglish
            ? 'bg-white/20 text-white font-semibold'
            : 'text-white/50 hover:text-white/80'
        }`}
      >
        EN
      </Link>
    </div>
  )
}
