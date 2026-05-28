import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You for Booking | Roam & Roar Safari',
  description: 'Thank you for submitting your safari booking details. A Corbett ranger is processing your slots and permit parameters right now.',
  alternates: {
    canonical: 'https://roamandroarsafari.com/thank-you',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
