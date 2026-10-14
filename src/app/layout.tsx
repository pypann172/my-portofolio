import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SplashScreen from "./components/splash-screen";
import Footer from "./components/footer";
import { getProfil } from "@/lib/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://irfansyah.web.id";
const siteTitle = "Moh. Irfan Syah | Full-Stack Developer & Web Engineer dari Pasuruan";
const siteDescription = "Portofolio Irfan Syah, pelajar RPL SMK Negeri 1 Pasuruan, full-stack developer, expert di Next.js, React, dan web development. Lihat project dan portfolio saya.";
const profileImage = "/ipann/irfanFormal.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Irfan Syah",
    "Moh. Irfan Syah",
    "Full-Stack Developer Pasuruan",
    "Web Engineer Pasuruan",
    "Next.js developer",
    "React developer",
    "web development",
    "SMK Negeri 1 Pasuruan",
  ],
  authors: [{ name: "Moh. Irfan Syah", url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Portfolio Moh. Irfan Syah",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: profileImage, alt: "Moh. Irfan Syah, Full-Stack Developer dari Pasuruan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [profileImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eff6ff",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const profile = await getProfil();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moh. Irfan Syah",
    jobTitle: "Full-Stack Developer",
    hasOccupation: { "@type": "Occupation", name: "Full-Stack Developer" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pasuruan",
      addressCountry: "ID",
    },
    image: new URL(profile?.fotoTentang || profileImage, siteUrl).toString(),
    url: siteUrl,
    affiliation: {
      "@type": "EducationalOrganization",
      name: "SMK Negeri 1 Pasuruan",
    },
    sameAs: profile?.githubUrl ? [profile.githubUrl] : [],
    knowsAbout: ["Next.js", "React", "Full-Stack Development", "Web Development"],
  };
  const personSchemaJson = JSON.stringify(personSchema).replace(/</g, "\\u003c");

  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personSchemaJson }} />
        <SplashScreen />
        <Navbar namaTampil={profile?.namaTampil ?? ""} logo={profile?.logo || "/ipann/logoIpann.jpg"} />
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
