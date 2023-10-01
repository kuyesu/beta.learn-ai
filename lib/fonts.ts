import { JetBrains_Mono as FontMono, Inter as FontSans, Roboto as FontRoboto } from 'next/font/google'
import { DM_Sans, Inter } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const fontRoboto = FontRoboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '500'
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})