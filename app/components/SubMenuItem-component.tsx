'use client';
import { usePathname, useRouter } from '@/node_modules/next/navigation';
import React, { useMemo, useState } from 'react';

interface ISubItem {
    name: string;
    path: string;
}

const SubMenuItem = ({ item }:{ item: ISubItem })=>{
    const {name, path,} = item;
    // const {name} = item;
    const router = useRouter();
    const pathname = usePathname();

    const isActive = useMemo(()=>{
        return path === pathname;
    },[path,pathname])
    const onClick = ()=>{
        // alert(path);
        router.push(path);

    }

    return(
        <li 
            className={`${isActive && "font-semibold text-slate-800"} ml-4 rounded-md cursor-pointer  hover:bg-lightgray_hover_antokiniaina p-2 `}
            onClick={onClick}
        >{name}</li>
    )
}
export default SubMenuItem