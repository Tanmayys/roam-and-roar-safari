import { notFound } from "next/navigation";
import BookingTerminal from "./BookingTerminal";

const servicesMapping = {
  "bijrani": { name: "Bijrani Zone", price: 7500, img: "/bijrani.png", description: "Vibrant forests and open fields, a top choice for sightings in the core Jim Corbett territory.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "jhirna": { name: "Jhirna Zone", price: 7500, img: "/jhirna.png", description: "Accessible year-round, ideal for birdwatchers and sloth bears in the dense green corridors.", bestTime: "Year-Round", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "dhela": { name: "Dhela Zone", price: 7500, img: "/dhela.png", description: "Lush biodiversity with frequent big cat encounters in one of the park's youngest territories.", bestTime: "Year-Round", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "garjia": { name: "Garjia Zone", price: 7500, img: "/garjia.png", description: "Riverine beauty near Kosi, perfect for morning safaris with breathtaking riverbed views.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "durga-devi": { name: "Durga Devi Zone", price: 7500, img: "/durga_devi.png", description: "A birding paradise with hilly terrain and stunning views of the Ramganga river.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "phato": { name: "Phato Zone", price: 6000, img: "/phato.png", description: "Quiet, off-the-beaten-path territory for peaceful nature observation and secluded tracks.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "sitabani": { name: "Sitabani Zone", price: 6000, img: "/sitabani.png", description: "Mythical landscapes and wide-open jungle paths, famous for ancient temples and wildlife.", bestTime: "Year-Round", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "heritage": { name: "Heritage Zone", price: 6000, img: "/heritage.png", description: "A cultural journey through the foundations of the reserve, exploring historical tracks.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "haathidagar": { name: "Haathidagar Zone", price: 6000, img: "/haathidagar.png", description: "Rugged and ready for adventure seekers in raw, mountainous safari terrain.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "canter-safari": { name: "Canter Safari", price: 2500, img: "/canter_safari.png", description: "A 16-seater high-clearance bus (Canter) to explore the deepest core heart zones of Dhikala.", bestTime: "November to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" },
  "dhikala-stay": { name: "Dikala Jeep & Stay", price: 46000, img: "/dhikala_lodge.png", description: "The premier 'Heart Zone' experience. Includes overnight stay in Dhikala and private jeep safari (Required by Govt rules).", bestTime: "November to June", timing: "Full Cycle Access" },
  "elephant-safari": { name: "Elephant Safari", price: 4000, img: "/elephant_safari.png", description: "Authentic silent hunt experience. Available exclusively in Dhikala and Bijrani zones. Maximum 4 people capacity.", bestTime: "October to June", timing: "06:00 AM - 10:00 AM | 02:00 PM - 06:00 PM" }
};

export async function generateStaticParams() {
  return Object.keys(servicesMapping).map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const service = servicesMapping[id as keyof typeof servicesMapping];

  if (!service) {
    notFound();
  }

  return <BookingTerminal service={service} />;
}
