import { Hero } from "@/app/hero";
import { LatestKits } from "@/app/latest-kits";
import Navbar from "@/components/ui/navbar";
import { TrendingKits } from "./trending-kits";
import { TrendingSamples } from "./trending-samples";
import { GenreCard } from "@/components/ui/genre-card";
import { SampleCard } from "@/components/ui/sample-card";

export default function Home() {
  const sampleData = [
    {
      title: "Midnight Groove",
      producer: "BeatMaster",
      genre: "Hip Hop",
      image: "/img/cover.1.png",
      downloads: 1200,
      bpm: 95,
      chord_key: "Am",
      hasStems: true
    },
    {
      title: "Urban Vibes",
      producer: "SoundKing",
      genre: "R&B",
      image: "/img/cover.2.png",
      downloads: 850,
      bpm: 120,
      chord_key: "Fm",
      hasStems: true
    },
    {
      title: "Electric Dreams",
      producer: "WaveMaker",
      genre: "Electronic",
      image: "/img/cover.3.png",
      downloads: 2000,
      bpm: 128,
      chord_key: "Cm",
      hasStems: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <main className="container mx-auto px-4 py-8 space-y-12">
        <LatestKits />
        <TrendingKits />
        <TrendingSamples />

        <section className="flex flex-col">
          <h2 className="text-2xl font-bold mb-6 font-euclid">Browse by Genre</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <GenreCard title="Hip Hop" image="/img/cover.1.png" />
            <GenreCard title="R&B" image="/img/cover.2.png" />
            <GenreCard title="Electronic" image="/img/cover.3.png" />
            <GenreCard title="Pop" image="/img/cover.4.png" />
            <GenreCard title="Rock" image="/img/cover.5.png" />
            <GenreCard title="Jazz" image="/img/cover.0.png" />
          </div>
        </section>
      </main>
    </div>
  );
}
