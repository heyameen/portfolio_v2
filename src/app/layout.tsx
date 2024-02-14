import React from "react";
/* eslint-disable camelcase */
import { poppins, josefin_sans, dosis, space_grotesk } from "@/lib/fonts";

export const metadata = {
  metadataBase: new URL("https://ameenalade.dev"),
  title: "Ameen | Creative Software Engineer",
  description:
    "I am passionate about innovation, scalability, performance optimization and excellent user experiences.",
  image: "https://Ameenalade.dev/meta/ameen.jpg",
  type: "website",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${josefin_sans.variable} ${dosis.variable} ${space_grotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
