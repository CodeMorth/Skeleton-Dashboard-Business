import type { Metadata } from "next";
import "@/styles/index.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { Toaster } from "sonner";

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
    <html lang="es">
      <PrimeReactProvider>
        <body>
          {children}
          <Toaster position="top-center" richColors />
        </body>
      </PrimeReactProvider>
    </html>
  );
}
