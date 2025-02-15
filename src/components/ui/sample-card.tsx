import { AudioLines, Badge, Ellipsis, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import stop_img from "/public/img/stop.svg";
import play_img from "/public/img/play.svg";
import wave_play_img from "/public/img/wave-play.svg";
import wave_idle_img from "/public/img/wave-idle.svg";
import flame_img from "/public/img/flame.svg";
import { addBasePath } from "next/dist/client/add-base-path";

/**
 * Props for the SampleCard component representing a music sample in the marketplace
 */
export type SampleCardProps = {
  title: string;
  producer: string;
  genre: string;
  image: string;
  downloads: number;
  bpm: number;
  chord_key: string;
  hasStems: boolean;
  prefix?: Partial<{ title: ReactNode; genre: ReactNode }>;
};

export function SampleCard({
  title,
  producer,
  genre,
  image,
  downloads,
  bpm,
  chord_key,
  hasStems,
  prefix,
  isPlay,
}: SampleCardProps & { isPlay: boolean }) {
  return (
    <div className="flex flex-row items-stretch mb-[15px] select-none space-x-2 cursor-pointer hover:bg-[#2b2b2b] transition-all rounded-[10px] p-2">
      <Image
        src={addBasePath(image)}
        alt={title}
        width={60}
        height={60}
        className="rounded-[6px]"
      />
      <div className="w-[10px] flex items-center min-w-[50px] md:min-w-auto justify-center">
        {isPlay ? (
          <Image src={stop_img} alt="Stop" width={24} height={24} />
        ) : (
          <Image src={play_img} alt="Play" width={24} height={24} />
        )}
      </div>
      <div className="md:flex hidden items-center max-w-[290px] pr-3">
        {isPlay ? (
          <Image
            src={wave_play_img}
            alt="Playing waveform"
            width={290}
            height={40}
          />
        ) : (
          <Image
            src={wave_idle_img}
            alt="Idle waveform"
            width={290}
            height={40}
          />
        )}
      </div>
      <div className="flex flex-col justify-center min-w-[300px] flex-1">
        <div>{title}</div>
        <div className="text-sm opacity-50">{producer}</div>
      </div>
      <div className="lg:flex hidden items-center flex-wrap text-xs">
        <Image
          src={flame_img}
          alt="Popular"
          width={20}
          height={20}
          className="mr-2"
        />
        <div className="px-[5px] py-[1px] rounded-[5px] text-[10px] tracking-wider border border-[#4d4d4d] flex items-center">
          STEMS
        </div>
        <div className="w-[70px] flex justify-center">Instrument</div>
        <div className="w-[70px] flex justify-center">Genre</div>
        <div className="w-[70px] flex justify-center">80 BPM</div>
        <div className="w-[70px] flex justify-center">A# Minor</div>
      </div>

      <div className="flex items-center space-x-3 px-2">
        <ShoppingBag size="18" />
        <Heart size="18" />
        <Ellipsis size="18" />
      </div>
    </div>
  );
}
