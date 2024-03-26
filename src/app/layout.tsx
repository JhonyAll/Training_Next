import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Library",
  description: "A web aplication product by Library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="w-screen dark:bg-zinc-700 bg-gray-300">{children}</body>
    </html>
  );
}
