'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Le Docteur', href: '#docteur' },
  { label: 'Le Cabinet', href: '#cabinet' },
  { label: 'Services', href: '#services' },
  { label: 'Photos', href: '#photos' },
  { label: 'Contact', href: '#contact' },
]

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomepage = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-nude-900/5 py-3'
            : isHomepage
            ? 'bg-transparent py-6'
            : 'bg-white py-4 shadow-sm'
        }`}
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="container px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled || !isHomepage ? 'bg-nude-500' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <span className={`text-xl font-light tracking-wider transition-colors duration-300 ${
                scrolled || !isHomepage ? 'text-nude-900' : 'text-white'
              }`}>
                Derma<span className="font-semibold">Dakar</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm tracking-wider uppercase transition-colors duration-300 ${
                  scrolled || !isHomepage
                    ? 'text-nude-700 hover:text-nude-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-2 px-6 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                scrolled || !isHomepage
                  ? 'bg-nude-500 text-white hover:bg-nude-600 shadow-md shadow-nude-500/20'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              Rendez-vous
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                scrolled || !isHomepage ? 'text-nude-800' : 'text-white'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container px-4 py-4 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-nude-700 hover:text-nude-500 hover:bg-nude-50 rounded-xl text-sm tracking-wider uppercase transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3 px-4 bg-nude-500 text-white text-center rounded-xl text-sm tracking-widest uppercase hover:bg-nude-600 transition-all"
              >
                Prendre Rendez-vous
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
