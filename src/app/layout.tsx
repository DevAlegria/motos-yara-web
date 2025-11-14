import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";

const poppins = Geist({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}}`}>
      <body className="h-screen flex flex-col">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
