import "@/styles/globals.css";
import { Geist, Poppins } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "500", "600", "700"],
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
