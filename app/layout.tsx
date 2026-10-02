import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { profile, t } from '@/src/data/profile'
import './globals.css'

export const metadata: Metadata = {
  title: t(profile.seo.title, 'en'),
  description: t(profile.seo.description, 'en'),
  keywords: ['Baker Jemai', 'Hafiz Quran', 'Quran reciter', 'Taraweeh Imam', 'Tunisia'],
  openGraph: { title: t(profile.seo.title, 'en'), description: t(profile.seo.description, 'en'), type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f1e9', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
