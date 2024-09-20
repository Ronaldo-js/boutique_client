"use client";

import React, { useMemo, useState } from 'react';
import { usePathname, useRouter } from '@/node_modules/next/navigation';
import { FontAwesomeIcon, FontAwesomeIconProps } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { faChevronDown, faChevronUp } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import SubMenuItem from './SubMenuItem-component';
import { truncate } from 'fs';

interface ISideBarItem {
    name: string;
    icon: FontAwesomeIconProps;
    path: string;
    items?: ISubItem[];
}
interface ISubItem {
    name: string;
    path: string;
}

const SideBarItem = ({ item }: { item: ISideBarItem}) => {
    if (!item) {
        console.log('Item est indéfini:', item);
        return null; // Or return a fallback UI if needed
      }
    const { name, icon, items, path } = item;
    const router = useRouter();
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);

    const isActive = useMemo(()=>{
        if(items && items.length>0){
            // Garde le parent sub-menu active si on click sur leur enfant
            if (items.find(item => item.path === pathname)){
                setExpanded(true);
                return true;
            };
        }
        
        return path === pathname;
    },[path,pathname,items])

    // console.log(items);
    const onClick = ()=>{

        // alert(path);
        router.push(path);

        if(items && items.length>0){
            // alert("most expanded");
            return setExpanded(!expanded);
        }
        
    };
    return <>
        <li 
            onClick={onClick}  
            className={`${isActive && "active"}`}   
        >
            <FontAwesomeIcon icon={icon} /> {name}
            {items && items.length>0 &&(
                <FontAwesomeIcon className='chevron-down' icon={expanded?faChevronUp:faChevronDown} fontSize={10}/>
            )}
        </li>
            {expanded && 
            items && 
            items.length> 0 && 
            items.map((item) => <SubMenuItem key={item.path}
                item={item}
            />)} 
        
    </>
}
export default SideBarItem;