import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Roam & Roar Safari',
  description: 'Read the privacy policy of Roam & Roar Safari. Understand how we collect, use, and protect your information when booking Jim Corbett safari permits.',
  alternates: {
    canonical: 'https://roamandroarsafari.com/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
