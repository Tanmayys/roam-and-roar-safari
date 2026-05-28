import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Roam & Roar Safari | Government Registered Corbett Operator',
  description: 'Learn about Roam & Roar Safari, a private booking operator registered under Udyam (UDYAM-UK-07-0048632) in Ramnagar. Discover our team, local core zone expertise, and eco-tourism principles.',
  alternates: {
    canonical: 'https://roamandroarsafari.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
