import { faBell, faSearch } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";

export  function Header(){
    return(
        <>
            <div className="espacement">
                
            </div>
            <div className="header-container">
                <div className="header-left">Accueil</div>
                <div className="header-container-degree1">
                    <div className="parent-input-icon">
                        <input type="search" placeholder="search" className="search-input"/>
                        <FontAwesomeIcon icon={faSearch} className="fa-fw input-icon"/>
                    </div>
                    <div className="header-container-degree1 grow-up">
                        <div className="fa-bells"><FontAwesomeIcon icon={faBell} className=""/></div>
                        <div className="image-profile"></div>
                        <div className="label-name-profile">Ronaldo Rembala</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}