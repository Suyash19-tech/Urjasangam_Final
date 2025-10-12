// app/kaltarang/layout.js
import { Inter, Exo_2, DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const exo = Exo_2({ subsets: ['latin'], variable: '--font-exo' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata = {
  title: 'Kaltarang - Cultural Fest | Urjasangam 2025',
  description: 'Experience the cultural extravaganza at Kaltarang - Music, Dance, Drama, Fashion and more. Part of Urjasangam 2025.',
  keywords: 'Kaltarang, cultural fest, music competition, dance competition, drama, fashion show, Urjasangam',
  openGraph: {
    title: 'Kaltarang - Cultural Fest | Urjasangam 2025',
    description: 'Experience the cultural extravaganza at Kaltarang - Music, Dance, Drama, Fashion and more.',
    type: 'website',
  },
}

export default function KaltarangLayout({ children }) {
  return (
    <div className={`${inter.variable} ${exo.variable} ${dmSans.variable} kaltarang-theme`}>
      {children}
    </div>
  )
}