// 'use client';
import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Import fa-bars and fa-bell icons
import Ferber from '../img/FERBER-ENTERPRISE.svg';

import Image from 'next/image';
import StoreButtonsComponent from "./Store-Buttons-component";
import { SideBarContext } from "./context/SideBar-component-context";
import ButtonToogle from "./Button-component-toggle";
import ButtonToggle from "./Button-component-toggle";
import { faSearch } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";

const Header: React.FC = () => {
    
    const [notifications, setNotifications] = useState(1); // Example: 3 notifications
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const {toggleSidebar} = useContext(SideBarContext);
        
    const toggleMenu=()=> {
        setIsMenuVisible(!isMenuVisible);
    };
     
    // fonction pour masquer le menu
    const hideMenu = () =>{
        setIsMenuVisible(false)
    }
    
    // Cacher le menu en cliquant en dehors de div
    // useEffect(()=>{
    //     const handleClickOutside = (event) => {
    //         // const menuElement = document.querySelector('.container-store_buttons_component');
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             hideMenu();
    //         }
    //     };
    //     document.addEventListener('click', handleClickOutside); 
    //     return ()=> {
    //         document.removeEventListener('click', handleClickOutside)
    //     };
        
    // }, []);


    
    return (
        <header className="bg-darkgray_header w-full text-white px-4 text-xl fixed h-16 top-0 left-0 z-10 md:content-center content-center sm:content-center">
            <div className="flex items-center justify-between ">
            {/* Menu icon (fa-bars) on the left */}
                <div className="flex ">
                    <div className="logo-ferber hidden sm:hidden md:hidden lg:block  w-40 cursor-pointer">
                        <picture>
                            <Image
                                src={Ferber}
                                alt="Shopify +"
                                width={112}
                                height={36}
                                priority
                            />
                        </picture>        
                    </div>
                    <div 
                        className="icon-bars-item p-3 block 2xl:hidden xl:hidden lg:hidden md:block sm:block cursor-pointer"
                        onClick = {toggleSidebar}
                    >
                        <ButtonToggle 
                            aria-hidden = "true"
                            
                        />  
                    </div>
                </div>

                {/* Search Bar in the center */}
                <div className="content-center w-1/5 relative">
                    <input className="w-full rounded text-gray-950 px-8 md:w-96"  type="text" placeholder="Search..." />
                    <div className="absolute top-0 left-1 text-gray-400">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>

                {/* Notifications and Profile on the right /*ref={menuRef}*/}
                 <div   className="flex relative"> 
                    
                    {/* Notification bell */}
                    <div className="content-center flex-1 relative">
                        <FontAwesomeIcon icon={faBell} size="lg" className="px-6 py-4 cursor-pointer rounded-md hover:bg-zinc-800 active:bg-zinc-700"/>
                        {notifications > 0 && <span className="absolute top-3 left-2 px-1 rounded-full text-xs text-white bg-fuchsia-800">{notifications}</span>}
                    </div>

                    {/* User Profile picture */}
                    <div onClick={toggleMenu} className="flex px-4 py-2 rounded-md cursor-pointer rounded-md hover:bg-zinc-800 active:bg-zinc-700">
                        <div className="content-center p-2 mx-1 rounded-lg bg-fuchsia-800">
                            <span>A.R</span>
                            {/* <Image src="/profile-icon.png" alt="User Profile" width={40} height={40} /> */}
                        </div>
                        <div className="store-profile  flex">
                            <p className="content-center">A RStore</p>
                        </div>
                    </div>
                    <div className=" absolute top-16 right-0 rounded-lg bg-slate-50 text-black w-80 shadow-md" >
                        {isMenuVisible && <StoreButtonsComponent  hideMenu ={hideMenu}/>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
