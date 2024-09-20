import { createContext, useEffect, useState } from 'react';

// Créer le contexte
export const SideBarContext = createContext();

// Fournir le contexte à toute l'application
export function MenuProvider({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(prevShowSideBar => !prevShowSideBar);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

   // Fermer le menu lors du redimensionnement en dessous de 768px
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSideBar(true); // Toujours afficher le menu au-dessus de 768px
      } else {
        setShowSideBar(false); // Masquer le menu par défaut en dessous de 768px
      }
    };

    // Ajouter l'écouteur d'événements
    handleResize();
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  

  return (
    <SideBarContext.Provider value={{ showSideBar, toggleSideBar, closeSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

