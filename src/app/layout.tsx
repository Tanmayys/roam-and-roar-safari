import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roamandroarsafari.com"),
  title: {
    default: "Roam & Roar Safari | Official Jim Corbett Safari Bookings",
    template: "%s | Roam & Roar Safari"
  },
  description: "Book premium safari experiences in Jim Corbett National Park. Expert naturalists, seamless safari planning, and luxury Dhikala stays based in Ramnagar, Uttarakhand.",
  openGraph: {
    title: "Roam & Roar Safari | Jim Corbett Safari Bookings",
    description: "Book Jim Corbett safari experiences with local Ramnagar experts. Core zone permits, Dhikala stay packages, and Elephant rides.",
    url: "https://roamandroarsafari.com",
    siteName: "Roam & Roar Safari",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/bijrani.png",
        width: 1200,
        height: 630,
        alt: "Jim Corbett National Park Safari Experience"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://roamandroarsafari.com/#organization",
      "name": "Roam & Roar Safari",
      "url": "https://roamandroarsafari.com",
      "logo": "https://roamandroarsafari.com/bijrani.png",
      "image": "https://roamandroarsafari.com/bijrani.png",
      "description": "Secure core zone permits for Jim Corbett National Park. Expert-guided Jeep and Canter safaris based in Ramnagar, Uttarakhand.",
      "telephone": "+918077354975",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lutabarh, Berajhal, Ramnagar",
        "addressLocality": "Nainital",
        "addressRegion": "Uttarakhand",
        "postalCode": "244715",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "29.3952",
        "longitude": "79.1246"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://wa.me/918077354975"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://roamandroarsafari.com/#website",
      "url": "https://roamandroarsafari.com",
      "name": "Roam & Roar Safari",
      "description": "Official Jim Corbett Safari Bookings",
      "publisher": {
        "@id": "https://roamandroarsafari.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased text-[#fdfaf1] bg-[#0a180a]`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
