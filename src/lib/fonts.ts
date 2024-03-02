/* eslint-disable camelcase */
import { Josefin_Sans, Dosis, Poppins, Space_Grotesk } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--poppins-font',
})

const josefin_sans = Josefin_Sans({
  weight: ['300', '400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--josefin-font',
})

const dosis = Dosis({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--dosis-font',
})

const space_grotesk = Space_Grotesk({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--space-grotesk',
})

export { poppins, josefin_sans, dosis, space_grotesk }
