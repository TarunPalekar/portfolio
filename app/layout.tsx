import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" 
    >
      <body className={`${inter.className}bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 h-[3000px]`}>
       <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem] w-[50rem] rounded-full blur-[50rem] sm:w-[30.75rem] dark:bg-[#946263] "></div>
       <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[35rem] h-[25rem] w-[50rem] rounded-full blur-[50rem] sm:w-[58.75rem] md:left-[-33rem]  lg:left-[rem] xl:left-[rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:bg-[#676394]"></div> 
     <ThemeContextProvider>
      <ActiveSectionContextProvider>
       <Header/>
        {children}
        <footer/>
        <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  );
}