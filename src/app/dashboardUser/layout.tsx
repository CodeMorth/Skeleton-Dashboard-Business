import type { Metadata } from "next";
import { Header, NavBar } from "@/components/global";
export const metadata: Metadata = {
  title: "Inicio",
  description: "Inicio de la pagina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="dashboard-layout">
        <NavBar />
        {children}
      </div>
    </>
  );
}
