import { faBars } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '@/node_modules/@fortawesome/react-fontawesome/index';
import { useContext, useState } from 'react';
import { SideBarContext } from './context/SideBar-component-context';

// Fonction pour basculer l'état du SideBar

// Composant Button exporté par défaut
const ButtonToggle = () => {
  return (
      <FontAwesomeIcon  id="nav-toggle"  icon={faBars} size="lg" />
  );
}

export default ButtonToggle;