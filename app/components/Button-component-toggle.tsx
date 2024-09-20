import { faBars } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@/node_modules/@fortawesome/react-fontawesome/index';
import { useContext } from 'react';
import { SideBarContext } from './SideBar-component-context';

// Fonction pour basculer l'état du SideBar

// Composant Button exporté par défaut
export default function ButtonToogle() {
    const {toggleSideBar} = useContext(SideBarContext);
  return (
      <FontAwesomeIcon onClick={toggleSideBar} id="nav-toggle"  icon={faBars} size="lg" />
  );
}