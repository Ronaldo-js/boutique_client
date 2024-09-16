'use client';
import Button from "@/app/components/buttons-nav";
import ButtonPopUp from "@/app/components/Buttons-Pop-up";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../buttons.css";
import "../../globals.css";


const Product = ()=>{

  const handleClick = () => {
    alert('Button clicked!');
  };
    return<> 
        <div className="command-container">
          <div className="div-button-container">
            <div className="div-button-container-1 flex">
              <h1>Product</h1>
              <div className="button-item flex">
                <div className="collapsable-menu display-none-collapsed">
                  <ButtonPopUp/>
                </div>
                  <div 
                  className="group-menu display-none">
                    <Button className="btn-secondary mx-2" label={"..."}/>
                  </div>
                <div className="flex toggle-group-buttons ">
                  <div className="export">
                    <Button className="btn-secondary m-1" label="Export" onClick={handleClick} /> 
                  </div>
                  <div className="import">
                    <Button className="btn-secondary m-1" label="Import" onClick={handleClick} />
                  </div>
                  <div className="more_action">
                      <Button className="btn-secondary m-1 pr-1 btn-chevron-down" label="More actions" onClick={handleClick} />
                      <FontAwesomeIcon className="FontAwesomeIcons" icon={faChevronDown}/>
                  </div>
                </div>
                <div className="add_product">
                  <Button className="btn-defaults m-1" label="Add Product" onClick={handleClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
}
export default Product;