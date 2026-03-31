'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Media } from '@/payload-types'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import NextImage from 'next/image'
import { getMediaUrl } from '@/utilities/getMediaUrl'

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

  const navLinks = data?.navLinks ?? []
  const ctaLabel = data?.ctaLabel ?? 'Rendez-vous'
  const ctaLink =
    data?.ctaLink ?? 'https://afridoctor.com/fr/p/dermatologue/dakar/dounia-el-akkaoui'
  const siteName = data?.siteName ?? 'DouDerma'
  const logo = typeof data?.logo === 'object' ? data.logo : null

  const isHomepage = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-nude-800/95 backdrop-blur-md shadow-lg shadow-nude-900/10 py-3'
            : 'bg-nude-700/90 backdrop-blur-sm py-6'
        }`}
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="container px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {logo?.url ? (
              <NextImage
                src={getMediaUrl(logo.sizes?.thumbnail?.url || logo.url)}
                alt={logo.alt || siteName}
                width={40}
                height={40}
                className="h-10 w-auto rounded-full"
                quality={80}
              />
            ) : (
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-rose-400`}
              >
                <span className="text-white font-bold text-lg">{siteName.charAt(0)}</span>
              </div>
            )}
            <div>
              <span
                className={`text-xl tracking-wider transition-colors duration-300 text-white`}
                style={{ fontFamily: "'Yearlong', cursive" }}
              >
                {siteName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm tracking-wider uppercase transition-colors duration-300 text-white/80 hover:text-white`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 px-6 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 bg-rose-400 text-white hover:bg-rose-500 shadow-md shadow-rose-400/20`}
            >
              {ctaLabel}
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg
              className={`w-6 h-6 transition-colors text-white`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
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
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3 px-4 bg-rose-400 text-white text-center rounded-xl text-sm tracking-widest uppercase hover:bg-rose-500 transition-all"
              >
                {ctaLabel}
              </a>
              <div className="mt-3 flex justify-center">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
