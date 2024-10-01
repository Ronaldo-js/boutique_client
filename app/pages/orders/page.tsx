
'use client'

import ButtonHeadsComponent from "@/app/components/Button-heads-compenent";
import Button from "@/app/components/Buttons-component";
import ButtonPopUp from "@/app/components/Buttons-component-pop-up";
import { faEye } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";
import { faChevronDown, faCalendar } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { useState } from "react";


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

const CreateOrderstButton = () => (
  <Button
    label={"Create Orders"}
    className= {`bg-gray-950 text-white hover:bg-gray-800 focus:ring-gray-100`}
  />
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
            className={`hidden ${expanded ? 'block' : ''}`}
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