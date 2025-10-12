import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import SpaceBackground from '@/components/shared/SpaceBackground'
import Preloader from '@/components/shared/Preloader'

export const metadata = {
  title: 'Urja Sangam 2025 | The Ultimate Convergence',
  description: 'Urja Sangam 2025 - The ultimate convergence of Urjotsav, Kaltarang, Energia, and Souardhya. Join us for an extraordinary week of tech, culture, sports, and social impact.',
  keywords: ['Urja Sangam', 'RGIPT', 'Festival', 'Tech', 'Cultural', 'Sports', 'Social Impact'],
  authors: [{ name: 'RGIPT' }],
  openGraph: {
    title: 'Urja Sangam 2025 | The Ultimate Convergence',
    description: 'Join us for an extraordinary week of tech, culture, sports, and social impact',
    url: 'https://urjasangam.rgipt.edu',
    siteName: 'Urja Sangam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urja Sangam 2025',
    description: 'The ultimate convergence of excellence',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-dm bg-bg-dark text-text-light antialiased">
        <Preloader />
        <SpaceBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        
        {/* Scroll Progress Bar */}
        <div 
          id="scroll-progress" 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-energia via-urjotsav via-souardhya to-kaltarang z-[10001] transition-all duration-100"
          style={{ width: '0%' }}
        />
      </body>
    </html>
  )
}