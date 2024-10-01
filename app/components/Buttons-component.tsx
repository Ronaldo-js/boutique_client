// components/Button.js

import { FontAwesomeIcon } from '@/node_modules/@fortawesome/react-fontawesome/index';
import React from 'react';

const Button = ({ label, onClick, type = 'button', className = '', icon = null }) => {
  return (
    <button type={type} className={`py-1 px-2 mr-1 font-medium  rounded-md focus:outline-none focus:ring-1  ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon}/>}
      {` ` +label}
    </button>
  );
};



export default Button;
// export ButtonChevronDown;
