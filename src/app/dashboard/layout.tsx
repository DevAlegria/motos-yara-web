import type { Metadata } from "next";
import DashboardNavBar from "./_components/DashboardNavBar";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard layout for the application',
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (<>
  <DashboardNavBar />
    {children}
  </>

  );
}