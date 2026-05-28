import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Roam & Roar Safari | Jim Corbett Booking Office',
  description: 'Reach our official Jim Corbett National Park booking office in Ramnagar, Uttarakhand. Contact us 24/7 via phone (+91 80773 54975) or email to secure core safari zone permits.',
  alternates: {
    canonical: 'https://roamandroarsafari.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
