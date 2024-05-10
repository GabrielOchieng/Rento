import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReduxProvider } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ReduxProvider>
          <Navbar />
          <ToastContainer />
          {children}

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
