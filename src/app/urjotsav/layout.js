// app/urjotsav/layout.js
import { Inter, Exo_2, DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const exo = Exo_2({ subsets: ['latin'], variable: '--font-exo' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata = {
  title: 'Urjotsav - Tech Fest | Urjasangam 2025',
  description: 'Experience the technological innovation at Urjotsav - Hackathons, Coding Competitions, AI/ML Challenges, IoT and more. Part of Urjasangam 2025.',
  keywords: 'Urjotsav, tech fest, hackathon, coding competition, AI ML, blockchain, IoT, cybersecurity, Urjasangam',
  openGraph: {
    title: 'Urjotsav - Tech Fest | Urjasangam 2025',
    description: 'Experience the technological innovation at Urjotsav - Hackathons, Coding Competitions, AI/ML Challenges and more.',
    type: 'website',
  },
}

export default function UrjotsavLayout({ children }) {
  return (
    <div className={`${inter.variable} ${exo.variable} ${dmSans.variable} urjotsav-theme`}>
      {children}
    </div>
  )
}