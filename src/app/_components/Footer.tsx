import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/assets/icons";
import { iconwhite } from "@/assets/logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (<footer className="bg-gray-900 px-2 py-12 flex flex-col items-center justify-between relative gap-8 md:flex-row">
    <Image src={iconwhite} width={150} height={80} alt="" />
    <div className="flex gap-8">
    <Link href="https://www.tiktok.com/@motorepuestos_yara" className="w-8 aspect-square bg-white rounded p-1">
      <TiktokIcon />
    </Link>
    <Link href="https://web.facebook.com/people/Moto-Repuestos-Yara/61554632012488/" className="w-8 aspect-square bg-white rounded">
      <FacebookIcon />
    </Link>
    <Link href="https://www.instagram.com/motorepuestos_yara/" className="w-8 aspect-square bg-white rounded">
      <InstagramIcon />
    </Link>
    </div>
    <span className="absolute bottom-0 right-1 text-gray-400">By yhonier.alegria@gmail.com</span>
  </footer>);
}  