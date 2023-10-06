/* eslint-disable camelcase */
import { Josefin_Sans, Dosis, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

const josefin_sans = Josefin_Sans({
  weight: ["300", "400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--josefin-font",
});

const dosis = Dosis({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--dosis-font",
});

export { poppins, josefin_sans, dosis };
