import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/ui/topNav";
import SideNav from "@/components/ui/sideNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "برنامج نقاط البيع",
  description: "تم تطويره بواسطة السيد حسين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex min-h-screen flex-col">
          <TopNav />
          <div className="flex min-h-screen flex-col md:flex-row flex-1">
            <div className="w-8/9">{children}</div>
            <SideNav />
          </div>
        </main>
      </body>
    </html>
  );
}
