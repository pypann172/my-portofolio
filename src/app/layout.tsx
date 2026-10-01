import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SplashScreen from "./components/splash-screen";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Irfan Syah",
  description: "Portofolio Irfan Syah RPL SMKN 1 Pasuruan",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
        <video autoPlay loop muted playsInline className="fixed inset-0 -z-50 hidden h-full w-full object-cover opacity-0 md:block wanderer">
          <source sizes="50px" src="/video/PREVIEW-Purple-Flowers-Night-Sky.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className="fixed inset-0 -z-50 block h-full w-full object-cover opacity-0 md:hidden wanderer">
          <source sizes="50px" src="/video/MOBILE-Purple Flowers Night Sky.mp4" type="video/mp4" />
        </video>
      </body>
    </html>
  );
}
