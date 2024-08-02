"use client"
// Button.js

import '../tailwinds-modules/buttons/standard.css' 
import '../tailwinds-modules/buttons/Parallelogram.css'
import '../tailwinds-modules/buttons/circle.css'
import '../tailwinds-modules/buttons/oval.css'

export default function Button ({ label, variant, extra }) {

  return (
    <button className={`btn-${variant} ${extra}`} onClick={async (variant)=>{
      variant= "oval"
    }}>
      {label}
    </button>
    
  );
};


