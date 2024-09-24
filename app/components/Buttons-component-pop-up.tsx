import { faEye } from "@/node_modules/@fortawesome/free-regular-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";


const ButtonPopUp = ({buttonImport, buttonExport, buttonMoreAction, buttonIcon, icon}) =>{
    return<>
        <div className="container-pop-up-buttons">
            <div className="pop-up-buttons">
                <ul>
                    {buttonImport &&
                        <li>{buttonImport}</li>}
                    {buttonExport &&
                        <li>{buttonExport}</li>}
                    {buttonMoreAction &&
                        <li className="bordered-top">{buttonMoreAction}</li>
                    }
                    {buttonIcon &&
                        <li className="indexed-top"><FontAwesomeIcon icon={icon}/> {buttonIcon}</li>
                    }
                </ul>
                
            </div>
        </div>
    </>
}
export default ButtonPopUp;