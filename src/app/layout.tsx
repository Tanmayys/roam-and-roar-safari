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
  title: "Roam & Roar Safari | Premium Jim Corbett Safari Bookings",
  description: "Book premium safari experiences in Jim Corbett National Park. Expert naturalists, guaranteed bookings, and luxury Dhikala stays based in Ramnagar, Uttarakhand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased text-[#fdfaf1] bg-[#0a180a]`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
