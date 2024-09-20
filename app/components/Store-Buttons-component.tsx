
'use client';
import { faStar } from "@/node_modules/@fortawesome/free-regular-svg-icons";
import { faStoreAlt } from "@/node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome";
import React from "react";


const StoreButtonsComponent = ({ hideMenu })  => {
    return(
        <div className="menu_store_buttons_component">
            <div className="menu_store_buttons_component_container">
                <div className="menu_store_buttons_component_data">
                    <div className="menu_store_buttons_component_content1">
                        <div className="menu_store_buttons_component_content p-personalised">
                            <ul>
                                <li onClick={hideMenu}> <FontAwesomeIcon icon={faStoreAlt}/> SiFame</li>
                                <li onClick={hideMenu}>  <FontAwesomeIcon icon={faStoreAlt}/> Ferber</li>
                                <li onClick={hideMenu}>  <FontAwesomeIcon icon={faStar}/> All Store</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu_store_buttons_component_content2">
                        <div className="menu_store_buttons_component_content p-personalised">
                            <ul>
                                <li onClick={hideMenu}> Help Center</li>
                                <li onClick={hideMenu}> Changelog</li>
                                <li onClick={hideMenu}> Community forums</li>
                                <li onClick={hideMenu}> Hire a Ferber Partner</li>
                                <li onClick={hideMenu}> Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="menu_store_buttons_component_content3">
                        <div className="menu_store_buttons_component_content p-personalised">
                            <ul>
                                <li onClick={hideMenu}> qtokyjs@gmail.com</li>
                                <li onClick={hideMenu}> Manage account</li>
                                <li onClick={hideMenu}> Log out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreButtonsComponent;
