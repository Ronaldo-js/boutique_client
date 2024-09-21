import React from "react";
import ButtonPopUp from "./Buttons-component-pop-up";

const ButtonHeadsComponent = (titleh1, ButtonPopUp, Button, orders, drafs, products, iventory, puchase, transfers, gift) =>{
    return <>
        <div className="div-button-container">
          <div className="div-button-container-1 flex">
            <h1>{titleh1}</h1>
            <div className="button-item flex">
              {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
              <div 
                 // Attache la référence au div à masquer
                className={`display-none-collapsed collapsable-menu`}
              >
                <ButtonPopUp />
              </div>

              <div className="group-menu display-none">
                {/* Le bouton qui toggle l'état */}
                <Button 
                  className="btn-secondary mx-2" 
                  label={"..."} 
                  onClick={toggleDiv} />
              </div>

              <div className="flex toggle-group-buttons">
                <div className="export">
                  <Button 
                    className="btn-secondary m-1" 
                    label="Export" 
                    onClick={() => { /* Logique du bouton */ }} /> 
                </div>
                <div className="import">
                  <Button 
                    className="btn-secondary m-1" 
                    label="Import" 
                    onClick={() => { /* Logique du bouton */ }} />
                </div>
                <div className="more_action">
                  <Button 
                    className="btn-secondary m-1 pr-1 btn-chevron-down" 
                    icon={faChevronDown}
                    label=" More actions" 
                    onClick={() => { /* Logique du bouton */ }} />
                </div>
              </div>

              <div className="add_product">
                <Button 
                  className="btn-defaults m-1" 
                  label="Add Product" 
                  onClick={() => { /* Logique du bouton */ }} />
              </div>
            </div>
          </div>
        </div>
    </>
}

export default ButtonHeadsComponent;