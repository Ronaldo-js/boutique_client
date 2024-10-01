
'use client';
import { faStar } from "@/node_modules/@fortawesome/free-regular-svg-icons";
import { faStoreAlt } from "@/node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome";
import React from "react";


const StoreButtonsComponent = ({ hideMenu })  => {
    return(
        <div className="text-base">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="border-solid border-b border-gray-200 ">
                            <ul className="px-3 py-1">
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> <FontAwesomeIcon icon={faStoreAlt}/> SiFame</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}>  <FontAwesomeIcon icon={faStoreAlt}/> Ferber</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}>  <FontAwesomeIcon icon={faStar}/> All Store</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-solid border-b border-gray-200">
                        <div className="">
                            <ul className="px-3 py-3">
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Help Center</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Changelog</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Community forums</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Hire a Ferber Partner</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <ul className="px-3 py-1">
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> qtokyjs@gmail.com</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Manage account</li>
                                <li className={"p-1 cursor-pointer rounded-lg hover:bg-gray-200"} onClick={hideMenu}> Log out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreButtonsComponent;
