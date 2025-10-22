import Image from "next/image";
import HomeView from './home/page'

export default function Home() {
  return (
    <div className="w-full px-2 min-h-screen flex items-center justify-center">
      <HomeView />
    </div>
  );
}
