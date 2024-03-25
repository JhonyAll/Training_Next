import type { Metadata } from "next";
import "./globals.css";
import styles from "@/components/theme.module.css";

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
      <body className={`w-screen ${styles.body_theme}`}>{children}</body>
    </html>
  );
}
