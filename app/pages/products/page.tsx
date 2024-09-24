'use client';

import { useState, useEffect, useRef } from "react";
import ButtonHeadsComponent from "@/app/components/Button-heads-compenent";
import ButtonPopUp from "@/app/components/Buttons-component-pop-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../buttons.css";
import "../../globals.css";
import ProductTable from "@/app/components/Product-component-table";
import { faEye } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";

// Création des composants boutons individuels
const ButtonMoreAction = () => (
  <button className="btn-secondary m-1 btn-chevron-down">
    <FontAwesomeIcon icon={faChevronDown} /> More actions
  </button>
);

const ButtonImport = () => (
  <button className="btn-secondary m-1">Import</button>
);

const ButtonExport = () => (
  <button className="btn-secondary m-1">Export</button>
);

const AddProductButton = () => (
  <button className="btn-defaults m-1">Add Product</button>
);

const Product = () => {
  const [expanded, setExpanded] = useState(false);

  // Référence pour le div qui doit être togglé
  const divRef = useRef(null);


  // Fonction pour toggler l'affichage du div
  const toggleDiv = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  // Fonction pour masquer le div si un clic est fait en dehors
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    // Ajoute un écouteur de clic sur tout le document
    document.addEventListener('click', handleClickOutside);
    
    // Nettoie l'écouteur lors du démontage du composant
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <> 
      <div className="command-container">
        <div className="button-item">
          <ButtonHeadsComponent
            titleh1="Product" // Le titre gère quel bouton afficher pour "Add"
            ButtonMoreAction={ButtonMoreAction} // Le bouton "More actions"
            ButtonImport={ButtonImport}        // Le bouton "Import"
            ButtonExport={ButtonExport}        // Le bouton "Export"
            ButtonPopUp={ButtonPopUp}          // Le pop-up
            ButtonToggleState={() => (
              <button className="btn-secondary mx-2" onClick={toggleDiv}>
                ...
              </button>
            )}                                // Le bouton pour toggler le menu
            addProduct={AddProductButton}      // Le bouton "Add Product" spécifique pour les produits
          />

          {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
          <div 
             //ref={divRef} Attache la référence au div à masquer
            className={`display-none-collapsed collapsable-menu ${expanded ? 'show' : ''}`}
          >
            <ButtonPopUp 
              buttonExport={"Export"}
              buttonMoreAction={"More action"}
              buttonImport={"Import"}
              buttonIcon = {"Show analytics bar"}
              icon = {faEye}
            />
          </div>
        </div>
        <ProductTable />
      </div>
    </>
  );
};

export default Product;
