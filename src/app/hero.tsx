"use client";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { addBasePath } from 'next/dist/client/add-base-path';
import Image from "next/image";
import browse_img from "/public/img/browse.svg";

type Pack = {
  title: string;
  description: string;
  image: string;
};

const packs: Pack[] = [
  {
    title: "Trap Nation",
    description:
      "Hard-hitting 808s and crisp hi-hats crafted for modern trap production",
    image: "/img/hero-prev.webp",
  },
  {
    title: "After Hours",
    description:
      "An eclectic mix or smooth jazz sounds to encourage the ever loving baby making process",
    image: "/img/hero.webp",
  },
  {
    title: "Lo-Fi Dreams",
    description:
      "Nostalgic melodies and warm vinyl textures for your chill beats",
    image: "/img/hero-next.webp",
  },
  {
    title: "House Essentials",
    description:
      "Premium four-on-the-floor drums and uplifting synth progressions",
    image: "/img/hero.webp",
  },
];

export function Hero() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Carousel className="h-full" opts={{ startIndex: 1, loop: true }}>
        <CarouselContent className="h-full">
          {packs.map((pack, index) => (
            <CarouselItem key={index} className="basis-[80%] h-[600px]">
              <div className="relative w-full h-full select-none ">
                <Image
                  src={addBasePath(pack.image)}
                  alt={pack.title}
                  width={1177}
                  height={720}
                  className="w-full max-h-[600px] h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-12 z-20">
                  <h1 className="text-5xl font-bold text-white mb-4 text-center">
                    {pack.title}
                  </h1>
                  <p className="text-lg text-white/90 mb-8 max-w-xl text-center">
                    {pack.description}
                  </p>
                  <Image
                    alt="browse"
                    src={browse_img}
                    className="cursor-pointer transition-all rounded-full hover:opacity-80 w-[160px]"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 border-none rounded-none h-[100px] w-[30px] rounded-r-[10px]" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 border-none rounded-none h-[100px] w-[30px] rounded-l-[10px]" />
        <CarouselDots className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2" />
      </Carousel>
    </div>
  );
}
