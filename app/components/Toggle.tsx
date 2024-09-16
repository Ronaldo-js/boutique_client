import { useState } from "react";

const ToggleAction = ()=>{
    const [expanded, setExpanded] = useState(false);
    
    // alert("most expanded");
    const toggleDiv = () => {
        setExpanded(!expanded);
      };
  
    
};

export default function ToggleAction;