import "@/styles/globals.css";
import localFont from "next/font/local";
import { TRPCReactProvider } from "@/trpc/react";


const ethnocentric = localFont({
  src: "../../public/fonts/EthnocentricRg.otf",
  variable: "--font-ethnocentric",
});

const oxanium = localFont({
  src: "../../public/fonts/Oxanium.ttf",  
  variable: "--font-oxanium",
});
const poppins = localFont({
  src: [{path: "../../public/fonts/Poppins-Regular.ttf", weight: "400"},],  
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ethnocentric.variable} ${oxanium.variable} ${poppins.variable}`}>
      <body className="h-screen flex flex-col font-poppins">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
