import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.svg";
import { BiPyramid } from "react-icons/bi";

export default function Logo() {
  return (
    <Link
      className="inline-flex justify-center  font-inter items-center from-slate-400  to-slate-200"
      href="/"
      aria-label="Cruip"
    >
      <BiPyramid className="h-8 w-8 text-emerald-100 pr-2 " />
      <span className="text-lg font-bold   tracking-wider text-emerald-100 uppercase">
        Shaga
      </span>
      {/* <Image className="max-w-none" src={LogoImg} width={38} height={38} priority alt="Stellar" /> */}
    </Link>
  );
}
