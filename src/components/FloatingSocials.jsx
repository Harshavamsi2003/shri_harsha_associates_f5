// export default function FloatingSocials() {
//   return (
//     <div className="floating-socials">
//       <a 
//         href="tel:+919841419288" 
//         aria-label="Call"
//         title="Call Us"
//       >
//         <i className="fa-solid fa-phone"></i>
//       </a>

//       <a
//         href="https://www.instagram.com/shriharshaassociates"
//         target="_blank"
//         rel="noreferrer"
//         aria-label="Instagram"
//         title="Instagram"
//       >
//         <i className="fa-brands fa-instagram"></i>
//       </a>

//       <a 
//         href="mailto:info@shriharshaassociates.com" 
//         aria-label="Email"
//         title="Email Us"
//       >
//         <i className="fa-solid fa-envelope"></i>
//       </a>
//     </div>
//   );
// }

import React from "react";
import "../styles/floating-ui.css";

/*
  FloatingSocials Component
  -------------------------
  Shows on ALL devices - Desktop, Tablet, Mobile
  Vertical social icons on right side
*/

const FloatingSocials = () => {
  return (
    <div className="floating-socials">
      <a 
        href="tel:+919841419288" 
        aria-label="Call"
        title="Call Us"
      >
        <i className="fa-solid fa-phone"></i>
      </a>

      <a
        href="https://www.instagram.com/shriharshaassociates"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a 
        href="mailto:info@shriharshaassociates.com" 
        aria-label="Email"
        title="Email Us"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
};

export default FloatingSocials;