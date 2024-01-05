import { FC } from "react";
import { SliderComma } from "./Svglist";

interface SliderItemProps {
  left: number | string;
  id: number;
  data?: {
    avatar: string;
    name: string;
    username: string;
    content: string;
  };
}

const SliderCard: FC<SliderItemProps> = ({ left, id, data }) => {
  if (!data) {
    return <div>Loading...</div>; // Or some other placeholder
  }

  return (
    <div
      className="absolute bg-gradient-to-b from-[#1F1F20] to-[transparent] rounded-[22px] p-[32px] gap-[32px] md:w-[538px] w-full overflow-auto -translate-x-1/2 transition-all duration-200"
      style={{ left }}
    >
      <div className="flex items-center justify-start gap-[10px]">
      <img 
        src={data.avatar} 
        alt="Avatar" 
        className="avatar-image" 
      />
        <div className="flex flex-col gap-[5px]">
          <p className="text-[21px] text-white">{data.name}</p>
          <span className="text-[15px] text-[#71767B]">{data.username}</span>
        </div>
      </div>
      <div className="flex text-[#B3B3B7] relativetext-[21px] mt-[32px] gap-3">
        <i>
          <SliderComma />
        </i>
        <span>{data.content}</span>
      </div>
    </div>
  );
};

export default SliderCard;
