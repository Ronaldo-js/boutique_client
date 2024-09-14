"use client";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBagShopping, faBullseye, faCartShopping, faHome, faPercent, faReceipt, faUser, faStoreAlt, faGear } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import React from 'react';
import Logo from '../img/Corten.png';
import { icon } from '@/node_modules/@fortawesome/fontawesome-svg-core/index';
import { faBarChart, faSadCry } from '@/node_modules/@fortawesome/free-regular-svg-icons/index';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@/node_modules/@fortawesome/react-fontawesome/index';
import Image from '@/node_modules/next/image';
import SideBarItem from './SideBarItem';
import { faAppStoreIos } from '@/node_modules/@fortawesome/free-brands-svg-icons/index';

interface ISideBarItem{
    name: string;
    icon: FontAwesomeIconProps;
    path: string;
    items?: ISubItem[];
}
interface ISubItem{
    name: string;
    path: string;
}

// Liste des Sidebar en Tableau
const items: ISideBarItem[] = [
    {
        name: "Home",
        icon: faHome,
        path: "/",
    },
    {
        name: "Orders",
        icon: faCartShopping,
        path: "/pages/orders",
        items: [
            {
                name: "Drafts",
                path: "/pages/orders/drafts",
            },
            {
                name: "Abandoned",
                path: "/pages/orders/abandoned",
            },
        ],
    },
    {
        name: "Products",
        icon: faBagShopping,
        path: "/pages/products",
        items : [
            {
                name: "Collections",
                path: "/pages/products/collections",
            },
            {
                name: "Inventory",
                path: "/pages/products/inventory",
            },
            {
                name: "Purchase",
                path: "/pages/products/purchase"
            },
            {
                name: "Tranfers",
                path: "/pages/products/transfer",
            },
            {
                name: "Gift",
                path: "/pages/products/gift",
            },
        ],
    },
    {
        name: "Customers",
        icon: faUser,
        path: "/pages/customers",
        items: [
            {
                name: "Segment",
                path: "/pages/customers/segments",
            }
        ],
    },
    {
        name: "Content",
        icon: faReceipt,
        path: "/pages/content",
        items: [
            {
                name: "MetaObjects",
                path: "/pages/content/metaobjects",
            },
            {
                name: "Files",
                path: "/pages/content/files"
            },
        ],
    },
    {
        name: "Analytics",
        icon: faBarChart,
        path: "/pages/analytics",
        items:[
            {
                name: "Reports",
                path: "/pages/analytics/reports",
            },
            {
                name: "Live view",
                path: "/pages/analytics/live",
            }
        ],
    },
    {
        name: "Marketing",
        icon: faBullseye,
        path: "/pages/marketing",
        items:[
            {
                name: "Campaigns",
                path: "/pages/marketing/campaigns",
            },
            {
                name: "Automations",
                path: "/pages/marketing/automations",
            },
        ],
    },
    {
        name: "Discount",
        icon: faPercent,
        path: "/pages/discount",
    },


]


const SideBar= ()=>{
    return(<> 
        <div
            className="sideBar"
        >
            <ul>
                {items.map(item=>(
                   <SideBarItem key={item.path} item = {item}/>       
                ))}
            </ul>
             <div className='espacement-sidebar'> {/* 50vh  */}
                <div className="container-sales-channels">
                    <h3>Sales Channels</h3>
                    <ul>
                        <li> <FontAwesomeIcon icon={faStoreAlt}/> Online Store</li>
                        <li><FontAwesomeIcon icon={faAppStoreIos}/> Point of Sale</li>
                    </ul>
                </div>
                <div className="container-apps">
                    <h3>Apps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faGear}/>Setting</li>
                        </ul>
                </div>
            </div>
        </div>
    </>
    )
}
export default SideBar;