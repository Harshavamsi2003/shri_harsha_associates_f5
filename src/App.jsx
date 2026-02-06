// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// /* COMPONENTS */
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// /* PAGES */
// import AboutPage from "./pages/AboutPage";

// /* SCROLL FIX COMPONENT */
// function ScrollToSection() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100); // wait for DOM render
//       }
//     }
//   }, [location]);

//   return null;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <ScrollToSection />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Services />
//               <Projects />
//               <Testimonials />
//               <Contact />
//               <Footer />
//             </>
//           }
//         />

//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// /* COMPONENTS */
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// /* PAGES */
// import AboutPage from "./pages/AboutPage";

// /* SCROLL FIX COMPONENT */
// function ScrollToSection() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//     }
//   }, [location]);

//   return null;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <ScrollToSection />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Services />
//               <Projects />
//               <Testimonials />
//               <Contact />
//               <Footer />
//             </>
//           }
//         />

//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

/* COMPONENTS */
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* PAGES */
import AboutPage from "./pages/AboutPage";

/* SCROLL FIX COMPONENT */
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToSection />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Services />
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}