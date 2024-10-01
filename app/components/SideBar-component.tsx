"use client";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBagShopping, faBullseye, faCartShopping, faHome, faPercent, faReceipt, faUser, faStoreAlt, faGear, faBars } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import React, { useContext, useState } from 'react';
import { faBarChart, faSadCry } from '@/node_modules/@fortawesome/free-regular-svg-icons/index';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@/node_modules/@fortawesome/react-fontawesome/index';
import SideBarItem from './SideBarItem-component';
import { faAppStoreIos } from '@/node_modules/@fortawesome/free-brands-svg-icons/index';
import Header from './Header-component';
import { SideBarContext } from './context/SideBar-component-context';

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
const {showSidebar} = useContext(SideBarContext);
    return(<><div

                className={`p-6 fixed bg-lightgray_sidebar h-screen z-20 top-16   lg:w-64 lg:left-0 peer-focus:left-0 peer:transition ease-out duration-200 ${showSidebar ? "left-0":"-left-96"}`}
                >
                        <ul>
                            {items.map(item=>(
                            <SideBarItem key={item.path} item = {item}/>       
                            ))}
                        </ul>
                        <div className='my-10'> {/* 50vh  */}
                            <div className="mb-6">
                                <h3 className='text-ti'>Sales Channels</h3>
                                <ul>
                                    <li className='p-3 cursor-pointer'> <FontAwesomeIcon icon={faStoreAlt}/> Online Store</li>
                                    <li className='p-3 cursor-pointer'><FontAwesomeIcon icon={faAppStoreIos}/> Point of Sale</li>
                                </ul>
                            </div>
                            <div className="container-apps">
                                <h3 className=''>Apps</h3>
                                    <ul>
                                        <li className='p-3 cursor-pointer'><FontAwesomeIcon icon={faGear}/>Setting</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
    </>
    )
}
export default SideBar;