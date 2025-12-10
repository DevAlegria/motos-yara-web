import Image from "next/image";
import { yaraLogo } from "@/assets/logo/index";
import { IconButton } from "./atoms/icons";


export default function Navbar() {
    return (<nav className="p-6 shadow flex justify-between items-center text-actions sticky top-0 bg-background-50/60 backdrop-blur-md z-50">
        <Image className="" src={yaraLogo} width={140} height={32} alt="" />
        <IconButton name="search" size={32} className="p-1 text-action"/>
    </nav>);
}