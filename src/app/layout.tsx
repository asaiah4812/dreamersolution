import type { Metadata } from "next";
import { Lato } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Favicon from "@/components/Favicon";
import Footer from "@/components/Footer";
// import NewNavbar from "@/components/NewNavbar";

const lat = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "DreamerSolution",
  description: "Generated by DreamerWebdev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <Favicon/>
      <body
        className={lat.className}
      >
        <Navbar/>
        <main className="mt-[6rem]">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
