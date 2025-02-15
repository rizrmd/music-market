import Image from "next/image";
import { ReactNode } from "react";

type GenreCardProps = {
  title: string;
  image: string;
  prefix?: Partial<{ title: ReactNode }>;
};

export function GenreCard({ title, image, prefix }: GenreCardProps) {
  return (
    <div className="group relative overflow-hidden border border-transparent hover:border-[#383838] hover:bg-[#2b2b2b] cursor-pointer transition-all rounded-[18px] h-[100px] flex">
      <div className="relative aspect-square overflow-hidden p-[7px] cursor-pointer flex flex-1">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="absolute inset-0 w-full object-cover transition-transform duration-300 rounded-[12px] opacity-10 group-hover:opacity-30"
        />
        <div className="flex items-center justify-center flex-1 text-white text-xl font-medium font-euclid">
          {title}
        </div>
      </div>
    </div>
  );
}
