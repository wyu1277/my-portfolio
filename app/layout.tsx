import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.name}: Designer + front-end developer`, template: `%s | ${site.name}` },
  description: "Digital design with a reason behind every choice.",
  // Remove this line when you are ready to launch, so search engines can index the site.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable} suppressHydrationWarning>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
