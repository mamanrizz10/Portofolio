import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pendaftaran Santri Baru - Ponpes Assalam Kubar",
  description: "Pendaftaran Santri Baru Pondok Pesantren Assalam Kubar untuk Madrasah Tsanawiyah dan Aliyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
