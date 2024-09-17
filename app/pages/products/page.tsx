'use client';
import Button from "@/app/components/buttons-nav";
import ButtonPopUp from "@/app/components/Buttons-Pop-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import "../../buttons.css";
import "../../globals.css";
import ProductTable from "@/app/components/Product-table";

const Product = () => {
  const [expanded, setExpanded] = useState(false);
  
  // Référence pour le div qui doit être togglé
  const divRef = useRef(null);

  // Fonction pour toggler l'affichage du div
  const toggleDiv = () => {
    setExpanded(!expanded);
  };

  // Fonction pour masquer le div si un clic est fait en dehors
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    // Ajoute un écouteur de clic sur tout le document
    document.addEventListener('mousedown', handleClickOutside);
    
    // Nettoie l'écouteur lors du démontage du composant
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <> 
      <div className="command-container">
        <div className="div-button-container">
          <div className="div-button-container-1 flex">
            <h1>Product</h1>
            <div className="button-item flex">
              {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
              <div 
                ref={divRef} // Attache la référence au div à masquer
                className={`display-none-collapsed collapsable-menu ${expanded ? 'show' : ''}`}
              >
                <ButtonPopUp />
              </div>

              <div className="group-menu display-none">
                {/* Le bouton qui toggle l'état */}
                <Button className="btn-secondary mx-2" label={"..."} onClick={toggleDiv} />
              </div>

              <div className="flex toggle-group-buttons">
                <div className="export">
                  <Button className="btn-secondary m-1" label="Export" onClick={() => { /* Logique du bouton */ }} /> 
                </div>
                <div className="import">
                  <Button className="btn-secondary m-1" label="Import" onClick={() => { /* Logique du bouton */ }} />
                </div>
                <div className="more_action">
                  <Button className="btn-secondary m-1 pr-1 btn-chevron-down" label="More actions" onClick={() => { /* Logique du bouton */ }} />
                  <FontAwesomeIcon className="FontAwesomeIcons" icon={faChevronDown} />
                </div>
              </div>

              <div className="add_product">
                <Button className="btn-defaults m-1" label="Add Product" onClick={() => { /* Logique du bouton */ }} />
              </div>
            </div>
          </div>
        </div>
        <ProductTable/>
      </div>
    </>
  );
};

export default Product;
