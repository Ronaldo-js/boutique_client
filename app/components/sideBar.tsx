"use client";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBagShopping, faBullseye, faCartShopping, faHome, faPercent, faReceipt, faUser } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import React from 'react';
import Logo from '../img/Corten.png';
import { icon } from '@/node_modules/@fortawesome/fontawesome-svg-core/index';
import { faBarChart } from '@/node_modules/@fortawesome/free-regular-svg-icons/index';
import { FontAwesomeIconProps } from '@/node_modules/@fortawesome/react-fontawesome/index';
import Image from '@/node_modules/next/image';
import SideBarItem from './SideBarItem';

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
            <li  className='logo-header'>
                <picture>
                    <Image
                        src={Logo}
                        alt="Corten +"
                        width={168}
                        height={56}
                        placeholder = 'blur'
                        priority
                    />
                </picture>        
            </li>
                {items.map(item=>(
                   <SideBarItem key={item.path} item = {item}/>       
                ))}
            </ul>
        </div>
    </>
    )
}
export default SideBar;