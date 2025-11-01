import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شاشه الصندوق",
  description: "تم تطويره بواسطة السيد حسين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
