'use client';

import { useState, useEffect, useRef } from "react";
import ButtonHeadsComponent from "@/app/components/Button-heads-compenent";
import ButtonPopUp from "@/app/components/Buttons-component-pop-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../buttons.css";
import "../../globals.css";
import TableCell from "@/app/components/Table-component";
import { faEye } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";
import Button from "@/app/components/Buttons-component";

// Création des composants boutons individuels
const ButtonMoreAction = () => (

  <Button
    label={"More actions"}
    className ={`bg-gray-200 hover:bg-gray-300 focus:ring-gray-400`}
    icon={faChevronDown}
  
  />
);

const ButtonImport = () => (
  <Button
      label={"Import"}
      className= {`bg-gray-200 hover:bg-gray-300 focus:ring-gray-400`}
    />
);

const ButtonExport = () => (
  <Button
    label={"Export"}
    className= {`bg-gray-200 hover:bg-gray-300 focus:ring-gray-400`}
  />
);

const AddProductButton = () => (
  <Button
    label={"Add Product"}
    className= {`bg-gray-950 text-white hover:bg-gray-800 focus:ring-gray-100`}
  />
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
            className={`hidden ${expanded ? 'show' : ''}`}
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
        <TableCell />
      </div>
    </>
  );
};

export default Product;
