import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbox from "@/components/Chatbox";

// import Script from "@/components/Script"

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Paddington CNMV",
  description: "A new CNMV browser by Team Paddington.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden text-text"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/JARomania-Paddington/owlbear.ico" sizes="any" />
      </head>
      <body
        className={`${poppins.className}  ${poppins.variable} bg-background`}
      >
        <Providers>
          <Navigation />
          <main className="mx-auto w-4/5">{children}</main>
          <Footer />
          <Chatbox />
        </Providers>

        {/*<Script />*/}
      </body>
    </html>
  );
}
