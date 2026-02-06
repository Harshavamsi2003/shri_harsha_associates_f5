


// import { useState } from "react";
// import EnquiryPanel from "./EnquiryPanel";
// import EnquiryTab from "./EnquiryTab";
// import FloatingSocials from "./FloatingSocials";
// import WhatsAppFloat from "./WhatsAppFloat";

// export default function Hero() {
//   const [enquiryOpen, setEnquiryOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToProjectCategory = (category) => {
//     const element = document.getElementById(`projects-${category}`);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const handleQuoteClick = () => {
//     setEnquiryOpen(true);
//   };

//   return (
//     <>
//       <section className="hero">
//         <div className="hero-bg"></div>
//         <div className="hero-overlay"></div>

//         <div className="hero-content">
//           <div className="hero-accent"></div>

//           <h1 className="hero-title">Shri Harsha Associates</h1>

//           <p className="hero-tagline">Building Excellence, Crafting Legacies</p>

//           <p className="hero-description">
//             Delivering exceptional residential, commercial, and infrastructure 
//             projects with uncompromising quality, precision engineering, and 
//             timeless design standards.
//           </p>

//           <div className="hero-cta-group">
//             <button className="hero-cta hero-cta-primary" onClick={handleQuoteClick}>
//               <span>Request a Quote</span>
//             </button>
            
//             <div className="hero-cta-divider"></div>
            
//             <button className="hero-cta hero-cta-secondary" onClick={() => scrollToProjectCategory("residential")}>
//               <span>Residential</span>
//             </button>
//             <button className="hero-cta hero-cta-secondary" onClick={() => scrollToProjectCategory("commercial")}>
//               <span>Commercial</span>
//             </button>
//             <button className="hero-cta hero-cta-secondary" onClick={() => scrollToProjectCategory("interiors")}>
//               <span>Interiors</span>
//             </button>
            
//             <div className="hero-cta-divider"></div>
            
//             <button className="hero-cta hero-cta-secondary" onClick={() => scrollToSection("services")}>
//               <span>Services</span>
//             </button>
            
//             <div className="hero-cta-divider"></div>
            
//             <button className="hero-cta hero-cta-secondary" onClick={() => scrollToSection("contact")}>
//               <span>Contact</span>
//             </button>
//           </div>

//           <div className="hero-scroll">
//             <div className="hero-scroll-line"></div>
//             <span className="hero-scroll-text">Scroll</span>
//           </div>
//         </div>
//       </section>

//       <FloatingSocials />
//       <EnquiryTab onOpen={() => setEnquiryOpen(true)} />
//       <EnquiryPanel open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
//       <WhatsAppFloat />
//     </>
//   );
// }

import { useState } from "react";
import EnquiryPanel from "./EnquiryPanel";
import EnquiryTab from "./EnquiryTab";
import FloatingSocials from "./FloatingSocials";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Hero() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjectCategory = (category) => {
    const element = document.getElementById(`projects-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleQuoteClick = () => {
    scrollToSection("contact");
  };

  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-accent"></div>

          <h1 className="hero-title">Shri Harsha Associates</h1>

          <p className="hero-tagline">Building Excellence, Crafting Legacies</p>

          <p className="hero-description">
            Delivering exceptional residential, commercial, and infrastructure 
            projects with uncompromising quality, precision engineering, and 
            timeless design standards.
          </p>

          {/* DIVIDER LINE */}
          <div className="hero-divider"></div>

          {/* OUR PROJECTS LABEL */}
          <div className="hero-projects-label">
            <span>Our Projects</span>
          </div>

          {/* PROJECT CATEGORY BUTTONS */}
          <div className="hero-project-categories">
            <button 
              className="hero-category-btn" 
              onClick={() => scrollToProjectCategory("residential")}
            >
              <span>Residential</span>
            </button>
            <button 
              className="hero-category-btn" 
              onClick={() => scrollToProjectCategory("commercial")}
            >
              <span>Commercial</span>
            </button>
            <button 
              className="hero-category-btn" 
              onClick={() => scrollToProjectCategory("interiors")}
            >
              <span>Interiors</span>
            </button>
          </div>

          {/* REQUEST A QUOTE BUTTON */}
          <button className="hero-quote-btn" onClick={handleQuoteClick}>
            <span>Request a Quote</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* SCROLL INDICATOR - POSITIONED AT ABSOLUTE BOTTOM */}
        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>

      {/* FLOATING UI ELEMENTS */}
      <FloatingSocials />
      <EnquiryTab onOpen={() => setEnquiryOpen(true)} />
      <EnquiryPanel open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <WhatsAppFloat />
    </>
  );
}