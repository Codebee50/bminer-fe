import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import { Suspense } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";
import PageLoader from "@/components/PageLoader";
import StoreProvider from "./StoreProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitcoin miner",
  description: "Your trusted and reliable platform for mining bitcoin",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ToastContainer />
            <Suspense fallback={<PageLoader />}>
              <Header /> 
              {children}
            </Suspense>
          </body>
        </html>
      </StoreProvider>
    </ReactQueryProvider>
  );
}
