import Image from "next/image";
import { ReactNode } from "react";

type TopCreatorProps = {
  name: string;
  image: string;
  badges: string[];
  prefix?: Partial<{ name: ReactNode }>;
};

export function TopCreator({ name, image, badges, prefix }: TopCreatorProps) {
  return (
    <div className="group relative overflow-hidden border border-transparent hover:border-[#383838] hover:bg-[#2b2b2b] cursor-pointer transition-all rounded-[18px]">
      <div className="relative aspect-square overflow-hidden p-[7px] cursor-pointer">
        <Image
          src={image}
          alt={name}
          className="object-cover h-full w-full transition-transform duration-300 rounded-[12px]"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-[12px] bg-black/40">
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
            View Profile
          </div>
        </div>
      </div>
      <div className="mt-2 space-y-2 px-2 pb-2">
        <div className="flex flex-col">
          <h3 className="font-medium text-[#ffffff]">{name}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="text-[11px] px-[7px] py-[2px] bg-[#3e3e3e] text-[#BBB9B9] rounded-full"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
