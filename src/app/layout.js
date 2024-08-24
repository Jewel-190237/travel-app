import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Shared from "@/components/Shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Shared></Shared>
        </body>
    </html>
  );
}
