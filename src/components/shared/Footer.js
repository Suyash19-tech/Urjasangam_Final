'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#fests', label: 'Fests' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#team', label: 'Team' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  const festLinks = [
    { href: '/urjotsav', label: 'Urjotsav - Tech' },
    { href: '/kaltarang', label: 'Kaltarang - Cultural' },
    { href: '/energia', label: 'Energia - Sports' },
    { href: '/souardhya', label: 'Souardhya - Social' },
  ]

  const socialLinks = [
    { Icon: FaFacebook, href: '#', label: 'Facebook' },
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: FaInstagram, href: '#', label: 'Instagram' },
    { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { Icon: FaYoutube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-bg-dark/98 to-bg-card/98 backdrop-blur-[30px] border-t-2 border-energia/30">
      <div className="max-w-[1600px] mx-auto px-[5%] py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div>
            <h3 className="font-exo text-2xl mb-6 gradient-text font-bold">
              URJA SANGAM
            </h3>
            <p className="text-text-dim leading-relaxed">
              The ultimate convergence of excellence - where technology, culture, sports, and social impact unite for one extraordinary week.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-exo text-2xl mb-6 gradient-text font-bold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-dim hover:text-energia transition-all hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fests */}
          <div>
            <h3 className="font-exo text-2xl mb-6 gradient-text font-bold">
              Fests
            </h3>
            <ul className="space-y-3">
              {festLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-dim hover:text-energia transition-all hover:translate-x-2 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-exo text-2xl mb-6 gradient-text font-bold">
              Stay Updated
            </h3>
            <p className="text-text-dim mb-6">Subscribe for updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-bg-dark/70 border-2 border-energia/30 rounded-xl text-white focus:outline-none focus:border-energia"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-energia to-urjotsav rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                →
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-energia/20 border-2 border-energia/40 hover:bg-energia hover:scale-110 hover:-translate-y-2 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-energia/30 text-center">
          <p className="text-text-dim">
            &copy; 2025 Urja Sangam, RGIPT. All rights reserved. Crafted with 💜
          </p>
        </div>
      </div>
    </footer>
  )
}