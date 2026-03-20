'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navLinks = data?.navLinks ?? []

  return (
    <nav className="flex gap-3 items-center">
      {navLinks.map(({ label, href }, i) => (
        <a key={i} href={href} className="text-sm">
          {label}
        </a>
      ))}
    </nav>
  )
}
