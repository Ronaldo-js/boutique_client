'use client'

import ButtonHeadsComponent from "@/app/components/Button-heads-compenent";
import Button from "@/app/components/Buttons-component";
import ButtonPopUp from "@/app/components/Buttons-component-pop-up";
import FormCustomer from "@/app/components/Form-customer-component";
import { useState } from "react";


const Customers = ()=>{

  const [expanded, setExpanded] = useState(false);

  const toggleDiv = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };
  

  const ButtonImport = () => (
    // <button className="py-1 px-4 mr-1 font-medium bg-gray-200 hover:bg-gray-300  rounded-md focus:outline-none focus:ring focus:ring-opacity-75">Import</button>
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
      label={"Add Customer"}
      className ={`bg-gray-950 text-white hover:bg-gray-800 focus:ring-gray-100`}
    />
  );
  
  
  return<> 
        <div className="command-container">
          <div className="button-item">
            <ButtonHeadsComponent
              titleh1="Customer"
              ButtonExport= {ButtonExport}
              ButtonImport= {ButtonImport}
              ButtonPopUp={ButtonPopUp}
              ButtonToggleState={() => (
                <button className="btn-secondary mx-2" onClick={toggleDiv}>
                  ...
                </button>
              )}  
              addCustomer={CreateOrderstButton} 
            />

            {/* La div est togglée selon l'état expanded, elle est cachée lorsqu'on clique à l'extérieur */}
          <div 
             //ref={divRef} Attache la référence au div à masquer
            className={`hidden ${expanded ? 'show' : ''}`}
          >
            <ButtonPopUp 
              buttonExport={"Export"}
              buttonImport = {"Import"}
            />
          </div>
            
          </div>

          <div className="formulaire-customer">
              {/* <FormCustomer/> */}
          </div>
          
        </div>
      </>
}
export default Customers;