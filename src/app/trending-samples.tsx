import { KitCard } from "@/components/ui/kit-card";
import { SampleCard, SampleCardProps } from "@/components/ui/sample-card";
import Image from "next/image";
import flame_img from "/public/img/flame.svg";

export function TrendingSamples() {
  const trendingSamples: SampleCardProps[] = [
    {
      title: "SLS_SS_85_music_loop_resampled_soul",
      producer: "The Sample Stash",
      genre: "Soul",
      image: "/img/cover.1.png",
      downloads: 1200,
      bpm: 80,
      chord_key: "A# minor",
      hasStems: true,
    },
    {
      title: "OS_SV_85_vocal_full_patience_2_A#m",
      producer: "Dylan Graham",
      genre: "Vocal",
      image: "/img/cover.2.png",
      downloads: 950,
      bpm: 80,
      chord_key: "A# minor",
      hasStems: true,
    },
    {
      title: "DS_PST_80_songstarter_sun_Emin",
      producer: "Mike Devries",
      genre: "Songstarter",
      image: "/img/cover.3.png",
      downloads: 800,
      bpm: 80,
      chord_key: "A# minor",
      hasStems: true,
    },
    {
      title: "JJP_RRNB_94_drum_loop_candy",
      producer: "Dylan Graham",
      genre: "R&B",
      image: "/img/cover.4.png",
      downloads: 1100,
      bpm: 80,
      chord_key: "A# minor",
      hasStems: true,
    },
    {
      title: "Euphoria – Tangerine",
      producer: "Casky",
      genre: "Electronic",
      image: "/img/cover.5.png",
      downloads: 1500,
      bpm: 80,
      chord_key: "A# minor",
      hasStems: true,
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
        Trending Samples
      </h2>

      <div className="flex flex-col items-stretch">
        {trendingSamples.map((sample, index) => (
          <SampleCard {...sample} key={index as any} isPlay={index === 0} />
        ))}
      </div>
    </section>
  );
}
