import { Inter, Exo_2, DM_Sans } from 'next/font/google'
 // Using an absolute path to resolve the module error

// Define fonts here, in the root layout
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const exo = Exo_2({ subsets: ['latin'], variable: '--font-exo' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' })

export const metadata = {
  title: 'Urjasangam 2025',
  description: 'The official website for Urjasangam 2025, the annual techno-cultural-sports festival.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply font variables and theme class to the body */}
      <body className={`${inter.variable} ${exo.variable} ${dmSans.variable} energia-theme`}>
        {children}
      </body>
    </html>
  )
}

