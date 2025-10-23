import Image from "next/image";
import { icon, iconPhone, iconwhite } from "@/assets/logo/index";


export default function Navbar() {
    return (<nav className="px-2 py-4 uppercase shadow">
        <Image className="hidden" src={icon} width={100} height={200} alt="" />
        <Image className="" src={iconPhone} width={60} height={60} alt="" />
    </nav>);
}