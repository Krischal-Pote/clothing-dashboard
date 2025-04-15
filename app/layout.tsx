import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  authors: {
    name: "Krischal Om Pote",
  },
  title: "Moncq Dashboard",
  icons: {
    icon: {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/new_logo.png",
    },
  },
  description:
    "Moncq is a fashion company which celebrates self-love, optimism, empathy, and tolerance. We offer high-quality, ethically made clothing and accessories for men and women. Our collections feature young and adorable designs, using sustainable materials such as organic cotton. We are dedicated to creating fashion that is not only stylish and sustainable but also inspiring and lovable. Our products can be found online, and we ship throughout Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
