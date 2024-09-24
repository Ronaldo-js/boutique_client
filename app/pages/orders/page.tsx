
'use client'

import ButtonHeadsComponent from "@/app/components/Button-heads-compenent";
import Button from "@/app/components/Buttons-component";
import ButtonPopUp from "@/app/components/Buttons-component-pop-up";
import { faEye } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";
import { faChevronDown, faCalendar } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { useState } from "react";


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

const CreateOrderstButton = () => (
  <button className="btn-defaults m-1">Create Orders</button>
);

const Orders = () =>{
    const [expanded, setExpanded] = useState(false);
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

    return<> 
        <div className="orders-container">

          <div className="button-item">
          <ButtonHeadsComponent
            titleh1="Orders" // Le titre gère quel bouton afficher pour "Add"
            ButtonMoreAction={ButtonMoreAction} // Le bouton "More actions"
            ButtonExport={ButtonExport}        // Le bouton "Export"
            ButtonPopUp={ButtonPopUp}          // Le pop-up
            ButtonToggleState={() => (
              <button className="btn-secondary mx-2" onClick={toggleDiv}>
                ...
              </button>
            )}                                // Le bouton pour toggler le menu
            createOrders={CreateOrderstButton}      // Le bouton "Add Product" spécifique pour les produits
          />

          {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
          <div 
             //ref={divRef} Attache la référence au div à masquer
            className={`display-none-collapsed collapsable-menu ${expanded ? 'show' : ''}`}
          >
            <ButtonPopUp 
              buttonExport={"Export"}
              buttonMoreAction = {"More action"}
              buttonIcon = {"Show analytics bar"}
              icon = {faEye}
            />
          </div>
          
          </div>

          <div className="orders-container-body-first">
              <div className="orders-container-body-first-data">
                <div className="orders-container-body-first-cotent">
                    <div className="orders-container-body-first-item1">
                      <p className="order-container-body-first-item"> <FontAwesomeIcon icon={faCalendar}/> Today</p>
                    </div>
                    <div className="orders-container-body-first-item2"></div>
                    <div className="orders-container-body-first-item3"></div>
                    <div className="orders-container-body-first-item4"></div>
                    <div className="orders-container-body-first-item5"></div>
                    <div className="orders-container-body-first-item6"></div>
                    <div className="orders-container-body-first-item7"></div>
                </div>
              </div>
          </div>
        </div>
      </>
}

export default  Orders;