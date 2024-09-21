import Button from "@/app/components/Buttons-component";
import { faChevronDown, faCalendar } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";

const Orders = () =>{
    return<> 
        <div className="orders-container">

          <div className="orders-container-head">
            <div className="orders-data-content ">

              <div className="orders-data-content-heads flex">
                  <div className="orders-content">
                    <h1>Commandes</h1>
                  </div>
                  <div className="orders-content flex">
                    <div className="orders-content">
                      <Button
                        className="btn-light"
                        label={" More actions"}
                        icon ={faChevronDown}
                      />
                    </div>

                    <div className="orders-content">
                      <Button
                        className="btn-defaults"
                        label={" More actions"}
                      />
                    </div>
                  </div>
              </div>

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