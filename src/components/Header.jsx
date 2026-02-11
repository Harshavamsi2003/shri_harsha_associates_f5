



// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   }, [location]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.nav-dropdown') && !e.target.closest('.mobile-submenu')) {
//         setProjectsDropdownOpen(false);
//       }
//     };
//     if (projectsDropdownOpen) {
//       document.addEventListener('click', handleClickOutside);
//     }
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [projectsDropdownOpen]);

//   const goHome = () => {
//     if (location.pathname !== "/") navigate("/");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   };

//   const goSection = (id) => {
//     if (location.pathname !== "/") {
//       navigate(`/#${id}`);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   };

//   const goAbout = () => {
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//     if (location.pathname === "/about") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       navigate("/about");
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     }
//   };

//   const goProjectCategory = (category) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(`projects-${category}`)?.scrollIntoView({ behavior: "smooth" });
//       }, 200);
//     } else {
//       document.getElementById(`projects-${category}`)?.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   };

//   const lightMode = scrolled || location.pathname === "/about";

//   return (
//     <>
//       <header className={`site-header ${lightMode ? "light" : ""}`}>
//         <div className="header-container">
//           <div className="header-brand" onClick={goHome}>
//             <img src={logo} alt="Shri Harsha Associates Logo" />
//             <div className="brand-text">
//               <h1>Shri Harsha Associates</h1>
//               <span>Construction & Infrastructure</span>
//             </div>
//           </div>

//           <nav className="header-nav">
//             <button onClick={goHome}>Home</button>
//             <button onClick={goAbout}>About</button>
//             <button onClick={() => goSection("services")}>Services</button>
            
//             <div className="nav-dropdown">
//               <button 
//                 onClick={(e) => { e.stopPropagation(); setProjectsDropdownOpen(!projectsDropdownOpen); }}
//                 className={projectsDropdownOpen ? "active" : ""}
//               >
//                 Projects
//                 <i className={`fas fa-chevron-down ${projectsDropdownOpen ? "rotate" : ""}`}></i>
//               </button>
              
//               <div className={`dropdown-menu ${projectsDropdownOpen ? "open" : ""}`}>
//                 <button onClick={() => goProjectCategory("residential")}>Residential</button>
//                 <button onClick={() => goProjectCategory("commercial")}>Commercial</button>
//                 <button onClick={() => goProjectCategory("interiors")}>Interiors</button>
//               </div>
//             </div>

//             <button onClick={() => goSection("contact")}>Contact</button>
//           </nav>

//           <button 
//             className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </header>

//       <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
//         <button onClick={goHome}>Home</button>
//         <button onClick={goAbout}>About</button>
//         <button onClick={() => goSection("services")}>Services</button>
        
//         <div className="mobile-submenu">
//           <button 
//             onClick={(e) => { e.stopPropagation(); setProjectsDropdownOpen(!projectsDropdownOpen); }}
//             className="mobile-submenu-trigger"
//           >
//             Projects
//             <i className={`fas fa-chevron-down ${projectsDropdownOpen ? "rotate" : ""}`}></i>
//           </button>
          
//           <div className={`mobile-submenu-content ${projectsDropdownOpen ? "open" : ""}`}>
//             <button onClick={() => goProjectCategory("residential")}>Residential</button>
//             <button onClick={() => goProjectCategory("commercial")}>Commercial</button>
//             <button onClick={() => goProjectCategory("interiors")}>Interiors</button>
//           </div>
//         </div>

//         <button onClick={() => goSection("contact")}>Contact</button>
//       </div>
//     </>
//   );
// }





// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   }, [location]);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.nav-dropdown') && !e.target.closest('.mobile-submenu')) {
//         setProjectsDropdownOpen(false);
//       }
//     };
//     if (projectsDropdownOpen) {
//       document.addEventListener('click', handleClickOutside);
//     }
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [projectsDropdownOpen]);

//   const goHome = () => {
//     if (location.pathname !== "/") navigate("/");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   };

//   const goSection = (id) => {
//     if (location.pathname !== "/") {
//       navigate(`/#${id}`);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   };

//   const goAbout = () => {
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//     if (location.pathname === "/about") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       navigate("/about");
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     }
//   };

//   const goProjectCategory = (category) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(`projects-${category}`)?.scrollIntoView({ behavior: "smooth" });
//       }, 200);
//     } else {
//       document.getElementById(`projects-${category}`)?.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//     setProjectsDropdownOpen(false);
//   };

//   const lightMode = scrolled || location.pathname === "/about";

//   return (
//     <>
//       <header className={`site-header ${lightMode ? "light" : ""}`}>
//         <div className="header-container">
//           <div className="header-brand" onClick={goHome}>
//             <img src={logo} alt="Shri Harsha Associates Logo" />
//             <div className="brand-text">
//               <h1>Shri Harsha Associates</h1>
//               <span>Construction & Infrastructure</span>
//             </div>
//           </div>

//           <nav className="header-nav">
//             <button onClick={goHome}>Home</button>
//             <button onClick={goAbout}>About</button>
//             <button onClick={() => goSection("services")}>Services</button>
            
//             <div className="nav-dropdown">
//               <button 
//                 onClick={(e) => { e.stopPropagation(); setProjectsDropdownOpen(!projectsDropdownOpen); }}
//                 className={projectsDropdownOpen ? "active" : ""}
//               >
//                 Projects
//                 <i className={`fas fa-chevron-down ${projectsDropdownOpen ? "rotate" : ""}`}></i>
//               </button>
              
//               <div className={`dropdown-menu ${projectsDropdownOpen ? "open" : ""}`}>
//                 <button onClick={() => goProjectCategory("residential")}>Residential</button>
//                 <button onClick={() => goProjectCategory("commercial")}>Commercial</button>
//                 <button onClick={() => goProjectCategory("interiors")}>Interiors</button>
//               </div>
//             </div>

//             <button onClick={() => goSection("contact")}>Contact</button>
//           </nav>

//           <button 
//             className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </header>

//       <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
//         <button onClick={goHome}>Home</button>
//         <button onClick={goAbout}>About</button>
//         <button onClick={() => goSection("services")}>Services</button>
        
//         <div className="mobile-submenu">
//           <button 
//             onClick={(e) => { e.stopPropagation(); setProjectsDropdownOpen(!projectsDropdownOpen); }}
//             className="mobile-submenu-trigger"
//           >
//             Projects
//             <i className={`fas fa-chevron-down ${projectsDropdownOpen ? "rotate" : ""}`}></i>
//           </button>
          
//           <div className={`mobile-submenu-content ${projectsDropdownOpen ? "open" : ""}`}>
//             <button onClick={() => goProjectCategory("residential")}>Residential</button>
//             <button onClick={() => goProjectCategory("commercial")}>Commercial</button>
//             <button onClick={() => goProjectCategory("interiors")}>Interiors</button>
//           </div>
//         </div>

//         <button onClick={() => goSection("contact")}>Contact</button>
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-dropdown') && !e.target.closest('.mobile-submenu')) {
        setProjectsDropdownOpen(false);
      }
    };
    if (projectsDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [projectsDropdownOpen]);

  const goHome = () => {
    if (location.pathname !== "/") navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  };

  const goSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  };

  const goAbout = () => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    if (location.pathname === "/about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/about");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const goProjectCategory = (category) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(`projects-${category}`)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(`projects-${category}`)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  };

  // Header is light (solid background) when:
  // 1. Scrolled down on any page
  // 2. On the about page
  // 3. On the residuals page
  const lightMode = scrolled || location.pathname === "/about" || location.pathname === "/residuals";

  return (
    <>
      <header className={`site-header ${lightMode ? "light" : ""}`}>
        <div className="header-container">
          <div className="header-brand" onClick={goHome}>
            <img src={logo} alt="Shri Harsha Associates Logo" />
            <div className="brand-text">
              <h1>Shri Harsha Associates</h1>
              <span>Construction & Infrastructure</span>
            </div>
          </div>

          <nav className="header-nav">
            <button onClick={goHome}>Home</button>
            <button onClick={goAbout}>About</button>
            <button onClick={() => goSection("services")}>Services</button>
            
            <div className="nav-dropdown">
              <button 
                onClick={(e) => { e.stopPropagation(); setProjectsDropdownOpen(!projectsDropdownOpen); }}
                className={projectsDropdownOpen ? "active" : ""}
              >
                Projects
                <i className={`fas fa-chevron-down ${projectsDropdownOpen ? "rotate" : ""}`}></i>
              </button>
              
              <div className={`dropdown-menu ${projectsDropdownOpen ? "open" : ""}`}>
                <button onClick={() => goProjectCategory("residential")}>Residential</button>
                <button onClick={() => goProjectCategory("commercial")}>Commercial</button>
                <button onClick={() => goProjectCategory("interiors")}>Interiors</button>
              </div>
            </div>

            <button onClick={() => goSection("contact")}>Contact</button>
          </nav>

          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button onClick={goHome}>Home</button>
        <button onClick={goAbout}>About</button>
        <button onClick={() => goSection("services")}>Services</button>
        
        <div className="mobile-submenu">
          <button 
            onClick={(e) => { e.stopPropagation(); setProjectsDropdownOpen(!projectsDropdownOpen); }}
            className="mobile-submenu-trigger"
          >
            Projects
            <i className={`fas fa-chevron-down ${projectsDropdownOpen ? "rotate" : ""}`}></i>
          </button>
          
          <div className={`mobile-submenu-content ${projectsDropdownOpen ? "open" : ""}`}>
            <button onClick={() => goProjectCategory("residential")}>Residential</button>
            <button onClick={() => goProjectCategory("commercial")}>Commercial</button>
            <button onClick={() => goProjectCategory("interiors")}>Interiors</button>
          </div>
        </div>

        <button onClick={() => goSection("contact")}>Contact</button>
      </div>
    </>
  );
}
