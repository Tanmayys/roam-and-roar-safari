import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Roam & Roar Safari',
  description: 'Read the official disclaimer of Roam & Roar Safari. We are a private travel agency and not affiliated with the Jim Corbett National Park forest department.',
  alternates: {
    canonical: 'https://roamandroarsafari.com/disclaimer',
  },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
