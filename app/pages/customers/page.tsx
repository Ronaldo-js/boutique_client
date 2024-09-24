'use client'

import ButtonHeadsComponent from "@/app/components/Button-heads-compenent";
import ButtonPopUp from "@/app/components/Buttons-component-pop-up";
import { useState } from "react";


const Customers = ()=>{

  const [expanded, setExpanded] = useState(false);

  const toggleDiv = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };
  

  const ButtonImport = () => (
    <button className="btn-secondary m-1">Import</button>
  );
  
  const ButtonExport = () => (
    <button className="btn-secondary m-1">Export</button>
  );
  
  const CreateOrderstButton = () => (
    <button className="btn-defaults m-1">Add Customer</button>
  );
  
  
  return<> 
        <div className="command-container">
          <div className="button-item">
            <ButtonHeadsComponent
              titleh1="Customer"
              // ButtonImport= {AddCustomerButton}
              ButtonExport= {ButtonExport}
              ButtonImport= {ButtonImport}
              ButtonPopUp={ButtonPopUp}
              ButtonToggleState={() => (
                <button className="btn-secondary mx-2" onClick={toggleDiv}>
                  ...
                </button>
              )}  
              addCustomer={CreateOrderstButton} 
              // addCustomer={AddCustomerButton}
            />

            {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
          <div 
             //ref={divRef} Attache la référence au div à masquer
            className={`display-none-collapsed collapsable-menu ${expanded ? 'show' : ''}`}
          >
            <ButtonPopUp 
              buttonExport={"Export"}
              buttonImport = {"Import"}
            />
          </div>
            
          </div>
        </div>
      </>
}
export default Customers;