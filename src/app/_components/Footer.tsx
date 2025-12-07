import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/assets/icons";
import { yaraLogo } from "@/assets/logo";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "./atoms/icons";

export default function Footer() {
  return (<footer className="bg-background-950 px-8 py-16 gap-8 flex flex-col text-background-50 lg:flex-row lg:justify-around lg:items-start">

    <Image className="" src={yaraLogo} width={140} height={32} alt="" />
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <IconButton name="envelope" className="hover:bg-transparent scale-110" />
        <p><span className="font-oxanium font-bold block -mb-2">Correo:</span> contacto@motorepuestosyara.com</p>
      </div>
      <div className="flex gap-4">
        <IconButton name="phone" className="hover:bg-transparent scale-125" />
        <p><span className="font-oxanium font-bold block -mb-2">Telefono:</span>321 675 2345</p>
      </div>
      <div className="flex gap-4">
        <IconButton name="mapPin" className="hover:bg-transparent scale-125" />
        <p><span className="font-oxanium font-bold block -mb-2">Direccion:</span> Calle 123, Ciudad, País</p>
      </div>
    </div>
    <div className="h-0.5 bg-background-50 w-5/6 rounded self-center shadow-lg shadow-black lg:hidden"></div>
    <div className="flex flex-col gap-4 items-center">
      <p className="font-oxanium font-bold">Siguenos</p>
      <div className="flex gap-6">
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
    </div>
  </footer>);
}  