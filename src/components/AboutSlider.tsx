import { useEffect, useState } from "react";
import SliderCard from "./SliderCard";

const AboutSlider = () => {
  const initialStylesDesktop = [
    {
      width: 538,
      height: 232,
      left: "50%",
      zIndex: 1,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% + 538px + 120px)",
      zIndex: 2,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% + 538px + 120px + 538px + 120px)",
      zIndex: 3,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% - 538px - 120px)",
      zIndex: 4,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% + 538px + 120px + 538px + 120px + 538px + 120px)",
      zIndex: 5,
    },
  ];
  const cardData = [
    {
      avatar: "/imgs/toly.jpeg",
      name: "Toly | Solana Founder",
      username: "@aeyakovenko",
      content: "Decentralized Stadia is a pretty awesome idea. I want this thing (Shaga) to exist.",
    },
    {
      avatar: "/imgs/staratlas.jpeg",
      name: "Michael | Star Atlas CEO",
      username: "@at_mwagner",
      content: "You know what's cool about composability? This (Shaga)",
    },
    {
      avatar: "/imgs/abhay.jpeg",
      name: "Abhay | Helium Foundation CEO",
      username: "@abhay",
      content: "Shaga’s aligned supply & demand will be key to its DePIN success",
    },
    {
      avatar: "/imgs/hank.png",
      name: "harkl",
      username: "@harkl_",
      content: "A company got $9m to develop a web3 version of GeoForce Now and still haven't cracked a prototype. Shaga did it in his bedroom in a few weeks for a hackathon. You are not bullish enough on Solana devs.",
    },
    {
      avatar: "/imgs/paul.jpeg",
      name: "Paul Bohm | Teleport Founder",
      username: "@paulbohm",
      content: "@web3shaga Gaming at the speed of light.",
    },
    // ... add more objects to match the number of styles ...
  ];

  const [styles, setStyles] = useState(initialStylesDesktop);
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    const result = initialStylesDesktop
      .slice(activeId)
      .concat(initialStylesDesktop.slice(0, activeId));
    setStyles(result);
    // eslint-disable-next-line
  }, [activeId]);

  return (
    <div className="w-full mt-[94px]">
      <div className="">
        {styles.map((item, index) => (
          <SliderCard left={item.left}
          id={index + 1}
          key={index}
          data={cardData[index]} // Pass the corresponding data to each card
          />
        ))}
      </div>
      <div className="flex items-center justify-center pt-[302px] gap-[18px]">
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(0)}
          style={{
            background: activeId === 0 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(1)}
          style={{
            background: activeId === 1 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(2)}
          style={{
            background: activeId === 2 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(3)}
          style={{
            background: activeId === 3 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(4)}
          style={{
            background: activeId === 4 ? "#29B080" : "transparent",
          }}
        />
      </div>
    </div>
  );
};

export default AboutSlider;
