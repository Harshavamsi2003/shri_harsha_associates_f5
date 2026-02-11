// import { useState } from "react";
// import Footer from "../components/Footer";
// import "../styles/residuals-page.css";

// // Import apartment images
// const apartments = Object.values(
//   import.meta.glob("../assets/projects/residents/apartments/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// // Import villa images
// const villas = Object.values(
//   import.meta.glob("../assets/projects/residents/villa/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// // Combine all images for gallery
// const allImages = [...apartments, ...villas];

// export default function ResidualsPage() {
//   const [selectedImage, setSelectedImage] = useState(allImages[0] || null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevImage = () => {
//     const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(allImages[newIndex]);
//   };

//   const handleNextImage = () => {
//     const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(allImages[newIndex]);
//   };

//   const handleThumbnailClick = (img, index) => {
//     setSelectedImage(img);
//     setCurrentIndex(index);
//   };

//   return (
//     <>
//       <main className="residuals-page">
        
//         {/* HERO SECTION */}
//         <section className="residuals-hero">
//           <div className="residuals-hero-overlay"></div>
//           <div className="residuals-hero-content">
//             <h2>Apartments & Villas</h2>
//             <p className="residuals-desc">Where architectural excellence meets the art of refined living</p>
//           </div>
//         </section>

//         {/* APARTMENTS SECTION */}
//         <section className="residuals-category-section">
//           <div className="residuals-content-section">
//             <div className="residuals-headline">
//               <h3>Apartments</h3>
//               <p>
//                 Our apartment projects redefine urban living through meticulous attention to spatial harmony and contemporary design sensibilities. Each development is conceived as a vertical community where modern aesthetics seamlessly integrate with functional excellence. From the precision of structural engineering to the refinement of interior finishes, every element is orchestrated to deliver living spaces that transcend conventional apartment living and establish new benchmarks in residential sophistication.
//               </p>
//             </div>

//             <div className="residuals-showcase-grid">
//               {apartments.slice(0, 8).map((img, i) => (
//                 <div key={i} className="residuals-showcase-image">
//                   <img src={img} alt={`Apartment Project ${i + 1}`} loading="lazy" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* VILLAS SECTION */}
//         <section className="residuals-category-section">
//           <div className="residuals-content-section">
//             <div className="residuals-headline">
//               <h3>Villas</h3>
//               <p>
//                 Our villa projects epitomize the pinnacle of bespoke residential architecture, where each estate is meticulously crafted to reflect the distinct personality and aspirations of its owners. These are not mere residences but masterfully orchestrated living environments that harmonize luxury, privacy, and architectural brilliance. From expansive layouts to exquisite material selections, every villa stands as a testament to our unwavering commitment to creating timeless living spaces that embody elegance, comfort, and enduring value.
//               </p>
//             </div>

//             <div className="residuals-showcase-grid">
//               {villas.slice(0, 8).map((img, i) => (
//                 <div key={i} className="residuals-showcase-image">
//                   <img src={img} alt={`Villa Project ${i + 1}`} loading="lazy" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CLOSING QUOTE */}
//         <section className="residuals-quote-section">
//           <div className="residuals-quote">
//             <p>"Creating homes is not merely about construction; it is about crafting sanctuaries where life's most precious moments unfold with grace and distinction"</p>
//           </div>
//         </section>

//         {/* GALLERY SECTION */}
//         <section className="residuals-category-section">
//           <div className="residuals-content-section">
//             {allImages.length > 0 && (
//               <div className="residuals-gallery">
//                 <div className="gallery-main">
//                   <div className="main-image-container">
//                     <img src={selectedImage} alt={`Project ${currentIndex + 1}`} className="main-image" />
//                     <button className="gallery-arrow prev" onClick={handlePrevImage} aria-label="Previous Image">
//                       <svg viewBox="0 0 24 24" fill="none">
//                         <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                     <button className="gallery-arrow next" onClick={handleNextImage} aria-label="Next Image">
//                       <svg viewBox="0 0 24 24" fill="none">
//                         <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                     <div className="image-counter">
//                       <span>{currentIndex + 1}</span>
//                       <span className="counter-divider">/</span>
//                       <span>{allImages.length}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="gallery-thumbnails">
//                   <div className="thumbnails-track">
//                     {allImages.map((img, i) => (
//                       <div 
//                         key={i} 
//                         className={`thumbnail ${i === currentIndex ? 'active' : ''}`} 
//                         onClick={() => handleThumbnailClick(img, i)}
//                       >
//                         <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" />
//                         <div className="thumbnail-overlay"></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//       </main>

//       {/* FOOTER */}
//       <Footer />
//     </>
//   );

// }


// import { useState } from "react";
// import Footer from "../components/Footer";
// import "../styles/residuals-page.css";

// // Import apartment images
// const apartments = Object.values(
//   import.meta.glob("../assets/projects/residents/apartments/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// // Import villa images
// const villas = Object.values(
//   import.meta.glob("../assets/projects/residents/villa/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// // Combine all images for gallery
// const allImages = [...apartments, ...villas];

// export default function ResidualsPage() {
//   const [selectedImage, setSelectedImage] = useState(allImages[0] || null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevImage = () => {
//     const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(allImages[newIndex]);
//   };

//   const handleNextImage = () => {
//     const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(allImages[newIndex]);
//   };

//   const handleThumbnailClick = (img, index) => {
//     setSelectedImage(img);
//     setCurrentIndex(index);
//   };

//   return (
//     <>
//       <main className="residuals-page">
        
//         {/* HERO SECTION */}
//         <section className="residuals-hero">
//           <div className="residuals-hero-overlay"></div>
//           <div className="residuals-hero-content">
//             <h2>Residentials</h2>
//             <p className="residuals-desc">Where architectural excellence meets the art of refined living</p>
//           </div>
//         </section>

//         {/* APARTMENTS SECTION */}
//         <section className="residuals-category-section">
//           <div className="residuals-content-section">
//             <div className="residuals-headline">
//               <h3>Apartments</h3>
//               <p>
//                 Our apartment projects redefine urban living through meticulous attention to spatial harmony and contemporary design sensibilities. Each development is conceived as a vertical community where modern aesthetics seamlessly integrate with functional excellence. From the precision of structural engineering to the refinement of interior finishes, every element is orchestrated to deliver living spaces that transcend conventional apartment living and establish new benchmarks in residential sophistication.
//               </p>
//             </div>

//             <div className="residuals-showcase-grid">
//               {apartments.slice(0, 8).map((img, i) => (
//                 <div key={i} className="residuals-showcase-image">
//                   <img src={img} alt={`Apartment Project ${i + 1}`} loading="lazy" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* VILLAS SECTION */}
//         <section className="residuals-category-section">
//           <div className="residuals-content-section">
//             <div className="residuals-headline">
//               <h3>Villas</h3>
//               <p>
//                 Our villa projects epitomize the pinnacle of bespoke residential architecture, where each estate is meticulously crafted to reflect the distinct personality and aspirations of its owners. These are not mere residences but masterfully orchestrated living environments that harmonize luxury, privacy, and architectural brilliance. From expansive layouts to exquisite material selections, every villa stands as a testament to our unwavering commitment to creating timeless living spaces that embody elegance, comfort, and enduring value.
//               </p>
//             </div>

//             <div className="residuals-showcase-grid">
//               {villas.slice(0, 8).map((img, i) => (
//                 <div key={i} className="residuals-showcase-image">
//                   <img src={img} alt={`Villa Project ${i + 1}`} loading="lazy" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CLOSING QUOTE */}
//         <section className="residuals-quote-section">
//           <div className="residuals-quote">
//             <p>"Creating homes is not merely about construction; it is about crafting sanctuaries where life's most precious moments unfold with grace and distinction"</p>
//           </div>
//         </section>

//         {/* GALLERY SECTION */}
//         <section className="residuals-category-section">
//           <div className="residuals-content-section">
//             {allImages.length > 0 && (
//               <div className="residuals-gallery">
//                 <div className="gallery-main">
//                   <div className="main-image-container">
//                     <img src={selectedImage} alt={`Project ${currentIndex + 1}`} className="main-image" />
//                     <button className="gallery-arrow prev" onClick={handlePrevImage} aria-label="Previous Image">
//                       <svg viewBox="0 0 24 24" fill="none">
//                         <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                     <button className="gallery-arrow next" onClick={handleNextImage} aria-label="Next Image">
//                       <svg viewBox="0 0 24 24" fill="none">
//                         <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     </button>
//                     <div className="image-counter">
//                       <span>{currentIndex + 1}</span>
//                       <span className="counter-divider">/</span>
//                       <span>{allImages.length}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="gallery-thumbnails">
//                   <div className="thumbnails-track">
//                     {allImages.map((img, i) => (
//                       <div 
//                         key={i} 
//                         className={`thumbnail ${i === currentIndex ? 'active' : ''}`} 
//                         onClick={() => handleThumbnailClick(img, i)}
//                       >
//                         <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" />
//                         <div className="thumbnail-overlay"></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//       </main>

//       {/* FOOTER */}
//       <Footer />
//     </>
//   );
// }


import { useState } from "react";
import Footer from "../components/Footer";
import EnquiryPanel from "../components/EnquiryPanel";
import EnquiryTab from "../components/EnquiryTab";
import FloatingSocials from "../components/FloatingSocials";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/residuals-page.css";

// Import apartment images
const apartments = Object.values(
  import.meta.glob("../assets/projects/residents/apartments/*.{png,jpg,jpeg}", { eager: true })
).map((img) => img.default);

// Import villa images
const villas = Object.values(
  import.meta.glob("../assets/projects/residents/villa/*.{png,jpg,jpeg}", { eager: true })
).map((img) => img.default);

// Combine all images for gallery
const allImages = [...apartments, ...villas];

export default function ResidualsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(allImages[0] || null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImage = () => {
    const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const handleThumbnailClick = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  return (
    <>
      <main className="residuals-page">
        
        {/* HERO SECTION */}
        <section className="residuals-hero">
          <div className="residuals-hero-overlay"></div>
          <div className="residuals-hero-content">
            <h2>Apartments & Villas</h2>
            <p className="residuals-desc">Where architectural excellence meets the art of refined living</p>
          </div>
        </section>

        {/* APARTMENTS SECTION */}
        <section className="residuals-category-section">
          <div className="residuals-content-section">
            <div className="residuals-headline">
              <h3>Apartments</h3>
              <p>
                Our apartment projects redefine urban living through meticulous attention to spatial harmony and contemporary design sensibilities. Each development is conceived as a vertical community where modern aesthetics seamlessly integrate with functional excellence. From the precision of structural engineering to the refinement of interior finishes, every element is orchestrated to deliver living spaces that transcend conventional apartment living and establish new benchmarks in residential sophistication.
              </p>
            </div>

            <div className="residuals-showcase-grid">
              {apartments.slice(0, 8).map((img, i) => (
                <div key={i} className="residuals-showcase-image">
                  <img src={img} alt={`Apartment Project ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VILLAS SECTION */}
        <section className="residuals-category-section">
          <div className="residuals-content-section">
            <div className="residuals-headline">
              <h3>Villas</h3>
              <p>
                Our villa projects epitomize the pinnacle of bespoke residential architecture, where each estate is meticulously crafted to reflect the distinct personality and aspirations of its owners. These are not mere residences but masterfully orchestrated living environments that harmonize luxury, privacy, and architectural brilliance. From expansive layouts to exquisite material selections, every villa stands as a testament to our unwavering commitment to creating timeless living spaces that embody elegance, comfort, and enduring value.
              </p>
            </div>

            <div className="residuals-showcase-grid">
              {villas.slice(0, 8).map((img, i) => (
                <div key={i} className="residuals-showcase-image">
                  <img src={img} alt={`Villa Project ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING QUOTE */}
        <section className="residuals-quote-section">
          <div className="residuals-quote">
            <p>"Creating homes is not merely about construction; it is about crafting sanctuaries where life's most precious moments unfold with grace and distinction"</p>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="residuals-category-section">
          <div className="residuals-content-section">
            {allImages.length > 0 && (
              <div className="residuals-gallery">
                <div className="gallery-main">
                  <div className="main-image-container">
                    <img src={selectedImage} alt={`Project ${currentIndex + 1}`} className="main-image" />
                    <button className="gallery-arrow prev" onClick={handlePrevImage} aria-label="Previous Image">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="gallery-arrow next" onClick={handleNextImage} aria-label="Next Image">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="image-counter">
                      <span>{currentIndex + 1}</span>
                      <span className="counter-divider">/</span>
                      <span>{allImages.length}</span>
                    </div>
                  </div>
                </div>

                <div className="gallery-thumbnails">
                  <div className="thumbnails-track">
                    {allImages.map((img, i) => (
                      <div 
                        key={i} 
                        className={`thumbnail ${i === currentIndex ? 'active' : ''}`} 
                        onClick={() => handleThumbnailClick(img, i)}
                      >
                        <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" />
                        <div className="thumbnail-overlay"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING UI ELEMENTS */}
      <FloatingSocials />
      <EnquiryTab onOpen={() => setEnquiryOpen(true)} />
      <EnquiryPanel open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <WhatsAppFloat />
    </>
  );
}

