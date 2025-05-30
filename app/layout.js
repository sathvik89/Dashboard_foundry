import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarRende from "./components/NavbarRende";
import { SessionProvider } from "./components/SessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Pizza Hub - Order Manager",
  description: "Pizza order dashboard with Google authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          text-white
        `}
      >
        <SessionProvider>
          <NavbarRende />
          <main className="relative z-10">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
