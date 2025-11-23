import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acasă | Flowers by Bella",
  description: "Descoperă buchete și aranjamente florale deosebite, livrare rapidă oriunde. Flowers by Bella - emoție și eleganță în fiecare floare.",
  openGraph: {
    title: "Acasă | Flowers by Bella",
    description: "Descoperă buchete și aranjamente florale deosebite, livrare rapidă oriunde.",
    images: ["/og-image.jpg"],
  },
};
import HomeView from './home/page'

export default function Home() {
  return (
    <div className="w-full px-2 min-h-screen flex items-center justify-center">
      <HomeView />
    </div>
  );
}
