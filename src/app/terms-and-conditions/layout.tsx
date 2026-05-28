import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Roam & Roar Safari',
  description: 'Review the terms and conditions for booking safari permits, jeep safaris, and canter safaris with Roam & Roar Safari in Jim Corbett National Park.',
  alternates: {
    canonical: 'https://roamandroarsafari.com/terms-and-conditions',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
