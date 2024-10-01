// "use client";

import { createContext, useState } from 'react';

// Créer le contexte avec des valeurs par défaut
export const SideBarContext = createContext();

const MenuProvider = ({ children })=>{
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    console.log(showSidebar)
    setShowSidebar((prev) => !prev);
  }
 
  return(
    <SideBarContext.Provider value={{showSidebar, toggleSidebar}}>
      {children}
    </SideBarContext.Provider>
  )
}
export default MenuProvider;
