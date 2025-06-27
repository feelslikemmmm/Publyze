import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
