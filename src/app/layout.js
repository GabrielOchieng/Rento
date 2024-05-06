import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "RENTO",
  description:
    "Website for listing and searching for vacant rental houses to help people find suitable accommodations more efficiently. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
