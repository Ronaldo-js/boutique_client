'use client'

import MenuProvider, { SideBarContext } from "./components/context/SideBar-component-context";
import SideBar from "./components/SideBar-component";
import { useContext } from "react";
import Header from "./components/Header-component";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });




const RootLayout = ({ children }) => {
  // const {toggleSidebar} = useContext(SideBarContext);
  // console.log( toggleSidebar )
  return (
    <html lang="en">
      <MenuProvider>
       
        <body className="bg-lightgray_body_main">
          <Header/>
            <div>
                <SideBar />
              <main className="pt-10 h bg-lightgray_body_main lg:ml-60 md:ml-0 sm:ml-0 px-6 flex-1 text-medium">
                <div className="h-14 ml-60 content-center">....</div>
                {children}
              </main>
            </div>
        </body>
      </MenuProvider>
    </html>
  );
}
export default RootLayout;
