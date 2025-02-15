import { AudioLines, AudioWaveform, Heart, Play } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import play_img from "/public/img/play.svg";
import { addBasePath } from 'next/dist/client/add-base-path';

/**
 * Props for the KitCard component representing a music kit/pack in the marketplace
 */
type KitCardProps = {
  title: string;
  producer: string;
  genre: string;
  image: string;
  downloads: number;
  prefix?: Partial<{ title: ReactNode; genre: ReactNode }>;
};

export function KitCard({
  title,
  producer,
  genre,
  image,
  downloads,
  prefix,
}: KitCardProps) {
  return (
    <div className="group relative overflow-hidden border border-transparent hover:border-[#383838] hover:bg-[#2b2b2b] cursor-pointer transition-all rounded-[18px]">
      <div className="relative aspect-square overflow-hidden p-[7px] cursor-pointer">
        <Image
          src={addBasePath(image)}
          alt={title}
          width={400}
          height={400}
          className="object-cover h-full w-full transition-transform duration-300 rounded-[12px]"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-[12px]">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full  bg-[#0169ff] text-white">
            <Image 
              src={play_img} 
              alt="Play" 
              width={12} 
              height={12} 
              className="w-3 h-3" 
            />
          </button>
        </div>
      </div>
      <div className="mt-2 space-y-2 px-2 pb-2">
        <div className="flex flex-col space-x-[0px]">
          <h3 className="font-medium -mb-[3px] text-[#ffffff]">
            {title.substring(0, 10)}
          </h3>
          <p className="text-[#8d8d8d] text-[13px]">{producer}</p>
        </div>
        <div className="flex items-center">
          {prefix?.genre}
          <div className="text-[13px] px-[7px] bg-[#3e3e3e] text-[#BBB9B9] rounded-full">
            {genre}
          </div>
        </div>
      </div>
      <div className="absolute top-[13px] right-[13px] flex items-center space-x-1">
        <div className="bg-[#3e3e3e] text-[#bbb9b9] space-x-1 rounded-lg h-[16px] px-1 flex items-center cursor-pointer hover:bg-[#777]">
          <AudioLines className="w-[10px]" />{" "}
          <div className="text-[10px]">{downloads}</div>
        </div>
        <div className="bg-[#3e3e3e] text-[#bbb9b9] space-x-1 rounded-lg h-[16px] px-1 flex items-center cursor-pointer hover:bg-[#777]">
          <Heart className="w-[10px]" />
        </div>
      </div>
    </div>
  );
}
