import { KitCard } from "@/components/ui/kit-card";
import Image from "next/image";
import flame_img from "/public/img/flame.svg";

export function TrendingKits() {
  const latestKits = [
    {
      title: "ANA",
      producer: "Producer Name",
      genre: "Genre",
      image: "/img/cover.1.png",
      downloads: 20.0,
    },
    {
      title: "THE RITUAL",
      producer: "Producer Name",
      genre: "Genre",
      image: "/img/cover.2.png",
      downloads: 20.0,
    },
    {
      title: "NOX",
      producer: "Producer Name",
      genre: "Genre",
      image: "/img/cover.3.png",
      downloads: 20.0,
    },
    {
      title: "HOTEL",
      producer: "Producer Name",
      genre: "Genre",
      image: "/img/cover.4.png",
      downloads: 20.0,
    },
    {
      title: "DIABLO",
      producer: "Producer Name",
      genre: "Genre",
      image: "/img/cover.5.png",
      downloads: 20.0,
    },
    {
      title: "MICROCOSMICEFFECTS",
      producer: "Producer Name",
      genre: "Genre",
      image: "/img/cover.0.png",
      downloads: 20.0,
    },
  ];

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold mb-6 font-euclid mt-[50px] flex items-center">
        <Image 
          src={flame_img} 
          alt="Trending icon" 
          width={22} 
          height={22} 
          className="mr-2" 
        /> 
        Trending Kits
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {latestKits.map((kit, index) => (
          <KitCard
            key={index}
            {...kit}
            prefix={{
              genre: (
                <Image 
                  src={flame_img} 
                  alt="Trending" 
                  width={12} 
                  height={12} 
                  className="mr-1 -mt-1" 
                />
              ),
            }}
          />
        ))}
      </div>
    </section>
  );
}
