import { FC } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  avatarUrl?: string; // Optional
}

const TeamCard: FC<TeamCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-[14px] text-center w-full">
      <div 
        className="w-[165px] h-[165px] rounded-full bg-[#1F1F20]" 
        style={{ backgroundImage: `url(${avatarUrl})`, backgroundSize: 'cover' }} // For the avatar image
      />
      <p className="text-white font-semibold text-[30px]">{name}</p>
      <p className="text-white font-normal text-[25px]">{role}</p>
    </div>
  );
};

export default TeamCard;
