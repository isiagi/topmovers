import Footer from "@/components/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "@/components/nav/Nav";
import Banner from "@/components/banner/Banner";

const inter = Roboto({
  weight: ["300", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Movers",
  description: "We provide highest quality moving services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// for font `Roboto`.
// Available weights: `100`, `300`, `400`, `500`, `700`, `900`
