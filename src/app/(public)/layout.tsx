import type { Metadata } from "next";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export const metadata: Metadata = {
  title:"Repuestos Yara",
  description:"",
  icons:"./yara-icon.ico"
}

export default function publicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}
