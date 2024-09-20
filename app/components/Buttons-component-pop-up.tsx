import { faEye } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";


const ButtonPopUp = () =>{
    return<>
        <div className="container-pop-up-buttons">
            <div className="pop-up-buttons">
                <ul>
                    <li>Import</li>
                    <li>Exporte</li>
                    <li className="bordered-top">More action</li>
                
                    <li className="indexed-top"><FontAwesomeIcon icon={faEye}/> Show analytics bar</li>
                </ul>
                
            </div>
        </div>
    </>
}
export default ButtonPopUp;