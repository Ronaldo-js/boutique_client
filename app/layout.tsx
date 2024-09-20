'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./styles.header.css";
import "./globals.css";
import Button from './components/Button';
import MenuContext from '../components/Menu-context';
// import { Header } from "./components/header";
// import { useState } from 'react';


import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { faThumbsUp } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import ButtonToogle from "./components/Button-toggle";
import { MenuProvider } from "./components/SideBar-context";
// import { Header } from "./components/Headers";

const inter = Inter({ subsets: ["latin"] });


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MenuProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header/>
          <SideBar/>
          <main  className="main-container">
            {children}
          </main>
        </body>
      </MenuProvider>
    </html>
  );
}
