'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons"; // Import fa-bars and fa-bell icons
import Ferber from '../img/FERBER-ENTERPRISE.svg';

import Image from 'next/image';
import { faSearch } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import ButtonToogle, { toggleMenu } from "./Button-toggle";

const Header: React.FC = () => {
    const [notifications, setNotifications] = useState(1); // Example: 3 notifications

    return (
        <header className="header">
            <div className="design"></div>
            {/* Menu icon (fa-bars) on the left */}
            <div className="menu-icon">
                <div className="logo-ferber ">
                    <picture>
                        <Image
                            src={Ferber}
                            alt="Shopify +"
                            width={116}
                            height={36}
                            priority
                        />
                    </picture>        
                </div>
                <div className="icon-bars-item">
                    <ButtonToogle />  
                </div>
            </div>

            {/* Search Bar in the center */}
            <div className="search-bar mx-2">
                <div className="container-position">
                    <input className="in-search-bar" type="text" placeholder="Search..." />
                    {/* <span className="icon-search-bar">
                        <FontAwesomeIcon icon={faSearch} size="lg"/>
                    </span> */}
                </div>
            </div>

            {/* Notifications and Profile on the right */}
            <div className="right-section">
                {/* Notification bell */}
                <div className="notification-icon">
                    <FontAwesomeIcon icon={faBell} size="lg" />
                    {notifications > 0 && <span className="notification-badge">{notifications}</span>}
                </div>

                {/* User Profile picture */}
                <div className="profile-pic">
                    <span>A.R</span>
                    {/* <Image src="/profile-icon.png" alt="User Profile" width={40} height={40} /> */}
                </div>
                <div className="store-profile mx-1">A RStore</div>
            </div>
        </header>
    );
};

export default Header;
