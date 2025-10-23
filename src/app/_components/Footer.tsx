import { iconwhite } from "@/assets/logo";
import Image from "next/image";

export default function Footer() {
  return (<footer className="bg-gray-900 px-2 py-12 flex items-center justify-between relative">
    <Image src={iconwhite} width={150} height={80} alt="" />
    <div className="flex gap-2">
    <div className="w-8 aspect-square bg-white rounded"></div>
    <div className="w-8 aspect-square bg-white rounded"></div>
    <div className="w-8 aspect-square bg-white rounded"></div>
    </div>
    <span className="absolute bottom-0 left-1 text-gray-400">By yhonier.alegria@gmail.com</span>
  </footer>);
}  