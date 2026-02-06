


// import { useState } from "react";
// import "../styles/projects.css";

// const residentialCompleted = Object.values(
//   import.meta.glob("../assets/projects/residents/sold/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// const residentialOngoing = Object.values(
//   import.meta.glob("../assets/projects/residents/ongoing/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// const commercialCompleted = Object.values(
//   import.meta.glob("../assets/projects/commerical/sold/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// const interiors = Object.values(
//   import.meta.glob("../assets/projects/interiors/*.{png,jpg,jpeg}", { eager: true })
// ).map((img) => img.default);

// const residentialCompletedMeta = [
//   { area: "Pandiyan Salai", district: "Chennai" },
//   { area: "Sree Villa", district: "Poonamallee" },
//   { area: "Amman Site", district: "ECR" },
//   { area: "Govindan Nagar", district: "ECR" },
//   { area: "Iyappakam", district: "Chennai" },
//   { area: "ECR Residence", district: "Chennai" },
//   { area: "Poonamallee", district: "Chennai" },
//   { area: "Adyar", district: "Chennai" },
//   { area: "Poonamallee", district: "Chennai" },
//   { area: "Poonamallee", district: "Chennai" },
//   { area: "Poonamallee", district: "Chennai" },
// ];

// const commercialMeta = [
//   { name: "AKS Jewellers", area: "Anna Nagar", district: "Chennai" },
//   { name: "Vodafone Showroom", area: "Karapakkam", district: "Chennai" },
//   { name: "Boys Hostel", area: "Sholinganallur", district: "Chennai" },
//   { name: "Track & Trail", area: "OMR Okkiyampettai", district: "Chennai" },
// ];

// export default function Projects() {
//   const [residentialFilter, setResidentialFilter] = useState("All");
//   const [commercialFilter, setCommercialFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(interiors[0] || null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   let residentialProjects = [];
//   if (residentialFilter === "All") {
//     residentialProjects = [
//       ...residentialOngoing.map((img) => ({ img, status: "Ongoing", area: "Rathinam Nagar", district: "Coimbatore" })),
//       ...residentialCompleted.map((img, i) => ({ img, status: "Completed", ...residentialCompletedMeta[i] })),
//     ];
//   } else if (residentialFilter === "Ongoing") {
//     residentialProjects = residentialOngoing.map((img) => ({ img, status: "Ongoing", area: "Rathinam Nagar", district: "Coimbatore" }));
//   } else if (residentialFilter === "Completed") {
//     residentialProjects = residentialCompleted.map((img, i) => ({ img, status: "Completed", ...residentialCompletedMeta[i] }));
//   }

//   let commercialProjects = [];
//   if (commercialFilter === "All" || commercialFilter === "Completed") {
//     commercialProjects = commercialCompleted.map((img, i) => ({ img, status: "Completed", ...commercialMeta[i] }));
//   }

//   const handlePrevImage = () => {
//     const newIndex = currentIndex === 0 ? interiors.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(interiors[newIndex]);
//   };

//   const handleNextImage = () => {
//     const newIndex = currentIndex === interiors.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(interiors[newIndex]);
//   };

//   const handleThumbnailClick = (img, index) => {
//     setSelectedImage(img);
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="projects" id="projects">
      
//       <div className="projects-intro">
//         <h2>Our Projects</h2>
//       </div>

//       {/* RESIDENTIAL */}
//       <div className="project-category-section" id="projects-residential">
//         <div className="project-category-hero residential-hero">
//           <div className="category-hero-overlay"></div>
//           <div className="category-hero-content">
//             <h2>Residential</h2>
//             <p>Crafting bespoke homes where architectural precision meets timeless design excellence</p>
//           </div>
//         </div>

//         <div className="project-filters-container">
//           <div className="project-filters">
//             {["All", "Ongoing", "Completed"].map((filter) => (
//               <button key={filter} className={residentialFilter === filter ? "active" : ""} onClick={() => setResidentialFilter(filter)}>
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="project-grid-container">
//           <div className="project-grid">
//             {residentialProjects.map((p, i) => (
//               <div className="project-card" key={i}>
//                 <div className="project-image-wrapper">
//                   <img src={p.img} alt={p.area} loading="lazy" />
//                   <div className="project-status-badge">{p.status}</div>
//                 </div>
//                 <div className="project-info">
//                   <h4>{p.area}</h4>
//                   <p>{p.district}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* COMMERCIAL */}
//       <div className="project-category-section" id="projects-commercial">
//         <div className="project-category-hero commercial-hero">
//           <div className="category-hero-overlay"></div>
//           <div className="category-hero-content">
//             <h2>Commercial</h2>
//             <p>Engineering performance-driven spaces that elevate business operations and brand presence</p>
//           </div>
//         </div>

//         <div className="project-filters-container">
//           <div className="project-filters">
//             {["All", "Ongoing", "Completed"].map((filter) => (
//               <button key={filter} className={commercialFilter === filter ? "active" : ""} onClick={() => setCommercialFilter(filter)}>
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="project-grid-container">
//           <div className="project-grid">
//             {commercialProjects.map((p, i) => (
//               <div className="project-card" key={i}>
//                 <div className="project-image-wrapper">
//                   <img src={p.img} alt={p.name} loading="lazy" />
//                   <div className="project-status-badge">{p.status}</div>
//                 </div>
//                 <div className="project-info">
//                   <h4>{p.name}</h4>
//                   <p>{p.area}, {p.district}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* INTERIORS */}
//       <div className="project-category-section" id="projects-interiors">
//         <div className="project-category-hero interiors-hero">
//           <div className="category-hero-overlay"></div>
//           <div className="category-hero-content">
//             <h2>Interiors</h2>
//             <p>Curating immersive interior environments where refined aesthetics harmonize with functional elegance</p>
//           </div>
//         </div>

//         <div className="interior-content-section">
//           <div className="interior-headline">
//             <h3>Designing Spaces That Reflect Your Story</h3>
//             <p>
//               At Shri Harsha Associates, we transform interior spaces into personalized sanctuaries that reflect your unique lifestyle and aesthetic vision. Our interior design philosophy seamlessly blends functionality with refined elegance, creating environments that inspire and comfort. From selecting premium materials to orchestrating every design detail, we ensure each space tells your story while maintaining the highest standards of craftsmanship and sophistication that define truly exceptional interiors.
//             </p>
//           </div>

//           <div className="interior-showcase-grid-four">
//             <div className="interior-showcase-image-equal">
//               <img src={interiors[0] || "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1200"} alt="Interior" loading="lazy" />
//             </div>
//             <div className="interior-showcase-image-equal">
//               <img src={interiors[1] || "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800"} alt="Interior" loading="lazy" />
//             </div>
//             <div className="interior-showcase-image-equal">
//               <img src={interiors[2] || "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"} alt="Interior" loading="lazy" />
//             </div>
//             <div className="interior-showcase-image-equal">
//               <img src={interiors[3] || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"} alt="Interior" loading="lazy" />
//             </div>
//           </div>

//           <div className="interior-quote">
//             <p>Every Detail Crafted With Purpose and Passion</p>
//           </div>
//         </div>

//         <div className="project-grid-container">
//           {interiors.length > 0 && (
//             <div className="interiors-gallery">
//               <div className="gallery-main">
//                 <div className="main-image-container">
//                   <img src={selectedImage} alt={`Interior ${currentIndex + 1}`} className="main-image" />
//                   <button className="gallery-arrow prev" onClick={handlePrevImage} aria-label="Previous">
//                     <svg viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   </button>
//                   <button className="gallery-arrow next" onClick={handleNextImage} aria-label="Next">
//                     <svg viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                   </button>
//                   <div className="image-counter">
//                     <span>{currentIndex + 1}</span><span className="counter-divider">/</span><span>{interiors.length}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="gallery-thumbnails">
//                 <div className="thumbnails-track">
//                   {interiors.map((img, i) => (
//                     <div key={i} className={`thumbnail ${i === currentIndex ? 'active' : ''}`} onClick={() => handleThumbnailClick(img, i)}>
//                       <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" />
//                       <div className="thumbnail-overlay"></div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//     </section>
//   );
// }

import { useState } from "react";
import "../styles/projects.css";

const residentialCompleted = Object.values(
  import.meta.glob("../assets/projects/residents/sold/*.{png,jpg,jpeg}", { eager: true })
).map((img) => img.default);

const residentialOngoing = Object.values(
  import.meta.glob("../assets/projects/residents/ongoing/*.{png,jpg,jpeg}", { eager: true })
).map((img) => img.default);

const commercialCompleted = Object.values(
  import.meta.glob("../assets/projects/commerical/sold/*.{png,jpg,jpeg}", { eager: true })
).map((img) => img.default);

const interiors = Object.values(
  import.meta.glob("../assets/projects/interiors/*.{png,jpg,jpeg}", { eager: true })
).map((img) => img.default);

const residentialCompletedMeta = [
  { area: "Pandiyan Salai", district: "Chennai" },
  { area: "Sree Villa", district: "Poonamallee" },
  { area: "Amman Site", district: "ECR" },
  { area: "Govindan Nagar", district: "ECR" },
  { area: "Iyappakam", district: "Chennai" },
  { area: "ECR Residence", district: "Chennai" },
  { area: "Poonamallee", district: "Chennai" },
  { area: "Adyar", district: "Chennai" },
  { area: "Poonamallee", district: "Chennai" },
  { area: "Poonamallee", district: "Chennai" },
  { area: "Poonamallee", district: "Chennai" },
];

const commercialMeta = [
  { name: "AKS Jewellers", area: "Anna Nagar", district: "Chennai" },
  { name: "Vodafone Showroom", area: "Karapakkam", district: "Chennai" },
  { name: "Boys Hostel", area: "Sholinganallur", district: "Chennai" },
  { name: "Track & Trail", area: "OMR Okkiyampettai", district: "Chennai" },
];

export default function Projects() {
  const [residentialFilter, setResidentialFilter] = useState("All");
  const [commercialFilter, setCommercialFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(interiors[0] || null);
  const [currentIndex, setCurrentIndex] = useState(0);

  let residentialProjects = [];
  if (residentialFilter === "All") {
    residentialProjects = [
      ...residentialOngoing.map((img) => ({ img, status: "Ongoing", area: "Rathinam Nagar", district: "Coimbatore" })),
      ...residentialCompleted.map((img, i) => ({ img, status: "Completed", ...residentialCompletedMeta[i] })),
    ];
  } else if (residentialFilter === "Ongoing") {
    residentialProjects = residentialOngoing.map((img) => ({ img, status: "Ongoing", area: "Rathinam Nagar", district: "Coimbatore" }));
  } else if (residentialFilter === "Completed") {
    residentialProjects = residentialCompleted.map((img, i) => ({ img, status: "Completed", ...residentialCompletedMeta[i] }));
  }

  let commercialProjects = [];
  if (commercialFilter === "All" || commercialFilter === "Completed") {
    commercialProjects = commercialCompleted.map((img, i) => ({ img, status: "Completed", ...commercialMeta[i] }));
  }

  const handlePrevImage = () => {
    const newIndex = currentIndex === 0 ? interiors.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(interiors[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentIndex === interiors.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(interiors[newIndex]);
  };

  const handleThumbnailClick = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  return (
    <section className="projects" id="projects">
      
      <div className="projects-intro">
        <h2>Our Projects</h2>
      </div>

      {/* RESIDENTIAL */}
      <div className="project-category-section" id="projects-residential">
        <div className="project-category-hero residential-hero">
          <div className="category-hero-overlay"></div>
          <div className="category-hero-content">
            <h2>Residential</h2>
            <p className="residential-desc">Crafting bespoke homes where architectural precision meets timeless design excellence</p>
          </div>
        </div>

        <div className="project-filters-container">
          <div className="project-filters">
            {["All", "Ongoing", "Completed"].map((filter) => (
              <button key={filter} className={residentialFilter === filter ? "active" : ""} onClick={() => setResidentialFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid-container">
          <div className="project-grid">
            {residentialProjects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-image-wrapper">
                  <img src={p.img} alt={p.area} loading="lazy" />
                  <div className="project-status-badge">{p.status}</div>
                </div>
                <div className="project-info">
                  <h4>{p.area}</h4>
                  <p>{p.district}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMMERCIAL */}
      <div className="project-category-section" id="projects-commercial">
        <div className="project-category-hero commercial-hero">
          <div className="category-hero-overlay"></div>
          <div className="category-hero-content">
            <h2>Commercial</h2>
            <p className="commercial-desc">Engineering performance-driven spaces that elevate business operations and brand presence</p>
          </div>
        </div>

        <div className="project-filters-container">
          <div className="project-filters">
            {["All", "Ongoing", "Completed"].map((filter) => (
              <button key={filter} className={commercialFilter === filter ? "active" : ""} onClick={() => setCommercialFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid-container">
          <div className="project-grid">
            {commercialProjects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-image-wrapper">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div className="project-status-badge">{p.status}</div>
                </div>
                <div className="project-info">
                  <h4>{p.name}</h4>
                  <p>{p.area}, {p.district}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERIORS */}
      <div className="project-category-section" id="projects-interiors">
        <div className="project-category-hero interiors-hero">
          <div className="category-hero-overlay"></div>
          <div className="category-hero-content">
            <h2>Interiors</h2>
            <p className="interiors-desc">Curating immersive interior environments where refined aesthetics harmonize with functional elegance</p>
          </div>
        </div>

        <div className="interior-content-section">
          <div className="interior-headline">
            <h3>Designing Spaces That Reflect Your Story</h3>
            <p>
              At Shri Harsha Associates, we transform interior spaces into personalized sanctuaries that reflect your unique lifestyle and aesthetic vision. Our interior design philosophy seamlessly blends functionality with refined elegance, creating environments that inspire and comfort. From selecting premium materials to orchestrating every design detail, we ensure each space tells your story while maintaining the highest standards of craftsmanship and sophistication that define truly exceptional interiors.
            </p>
          </div>

          <div className="interior-showcase-grid-four">
            <div className="interior-showcase-image-equal">
              <img src={interiors[0] || "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1200"} alt="Interior" loading="lazy" />
            </div>
            <div className="interior-showcase-image-equal">
              <img src={interiors[1] || "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800"} alt="Interior" loading="lazy" />
            </div>
            <div className="interior-showcase-image-equal">
              <img src={interiors[2] || "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"} alt="Interior" loading="lazy" />
            </div>
            <div className="interior-showcase-image-equal">
              <img src={interiors[3] || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"} alt="Interior" loading="lazy" />
            </div>
          </div>

          <div className="interior-quote">
            <p>Every Detail Crafted With Purpose and Passion</p>
          </div>
        </div>

        <div className="project-grid-container">
          {interiors.length > 0 && (
            <div className="interiors-gallery">
              <div className="gallery-main">
                <div className="main-image-container">
                  <img src={selectedImage} alt={`Interior ${currentIndex + 1}`} className="main-image" />
                  <button className="gallery-arrow prev" onClick={handlePrevImage} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button className="gallery-arrow next" onClick={handleNextImage} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <div className="image-counter">
                    <span>{currentIndex + 1}</span><span className="counter-divider">/</span><span>{interiors.length}</span>
                  </div>
                </div>
              </div>

              <div className="gallery-thumbnails">
                <div className="thumbnails-track">
                  {interiors.map((img, i) => (
                    <div key={i} className={`thumbnail ${i === currentIndex ? 'active' : ''}`} onClick={() => handleThumbnailClick(img, i)}>
                      <img src={img} alt={`Thumbnail ${i + 1}`} loading="lazy" />
                      <div className="thumbnail-overlay"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}