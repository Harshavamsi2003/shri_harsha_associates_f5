// import { useEffect, useState } from "react";

// const testimonials = [
//   {
//     text: "Excellent construction quality and flawless interior finishing. The team was punctual, transparent, and delivered exactly what was promised. Highly reliable and professional service.",
//     name: "Mangala Devi.",
//     role: ""
//   },
//   {
//     text: "Our home interiors turned out beautiful and functional. They understood our requirements clearly and executed every detail perfectly within the committed timeline.",
//     name: "Aman.",
//     role: ""
//   },
//     {
//     text: "From planning to final handover, the entire construction process was smooth. Quality materials, skilled workmanship, and great coordination made the experience stress-free",
//     name: "Nandha Kumar",
//     role: ""
//   }
    
  
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="testimonials" id="testimonials">
//       <div className="testimonials-container">

//         {/* INTRO */}
//         <div className="testimonials-intro">
//           <h2>Client Reflections</h2>
//           <p>
//             A testament to our commitment to quality, transparency,
//             and uncompromised execution.
//           </p>
//         </div>

//         {/* QUOTE */}
//         <div className="testimonial-quote">
//           <p className="quote-text">
//             “{testimonials[index].text}”
//           </p>

//           <div className="quote-author">
//             <strong>{testimonials[index].name}</strong>
//             <span>{testimonials[index].role}</span>
//           </div>
//         </div>

//         {/* INDICATORS */}
//         <div className="testimonial-dots">
//           {testimonials.map((_, i) => (
//             <span
//               key={i}
//               className={i === index ? "active" : ""}
//               onClick={() => setIndex(i)}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { useState } from "react";

const testimonials = [
  {
    text: "Excellent construction quality and flawless interior finishing. The team was punctual, transparent, and delivered exactly what was promised. Highly reliable and professional service.",
    name: "Mangala Devi",
    role: ""
  },
  {
    text: "Our home interiors turned out beautiful and functional. They understood our requirements clearly and executed every detail perfectly within the committed timeline.",
    name: "Aman",
    role: ""
  },
  {
    text: "From planning to final handover, the entire construction process was smooth. Quality materials, skilled workmanship, and great coordination made the experience stress-free.",
    name: "Nandha Kumar",
    role: ""
  },
  {
    text: "Very impressed with their interior design ideas and execution. They maximized space efficiently and delivered a modern look that exceeded our expectations.",
    name: "Aasif",
    role: ""
  },
  {
    text: "Professional team with strong technical knowledge. Construction quality is solid, and interior finishing is premium. Truly value for money and trustworthy service.",
    name: "Satish Kumar",
    role: ""
  },
  {
    text: "They handled our project with great care and attention to detail. Timely completion, clean worksite, and excellent design sense made them stand out.",
    name: "Chitra Senan",
    role: ""
  },
  {
    text: "Outstanding construction and interior work. Considerate of budget, transparent in communication, and committed to delivering high-quality results.",
    name: "Palani",
    role: ""
  },
  {
    text: "The interiors were executed exactly as designed. Finishing, lighting, and material choices were top-notch. Very satisfied with their professionalism.",
    name: "Ganesan",
    role: ""
  },
  {
    text: "A dependable construction company with excellent project management. The team delivered durable construction and elegant interiors without any compromise on quality.",
    name: "Chiyna",
    role: ""
  },
  {
    text: "They transformed our space beautifully. Creative designs, quality workmanship, and timely delivery made the entire experience smooth and satisfying.",
    name: "Dhanimi",
    role: ""
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleDotClick = (i) => {
    if (isTransitioning || i === index) return;
    setIsTransitioning(true);
    setIndex(i);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        {/* INTRO */}
        <div className="testimonials-intro">
          <h2>Client Reflections</h2>
          <p>
            A testament to our commitment to quality, transparency,
            and uncompromised execution.
          </p>
        </div>

        {/* QUOTE WITH NAVIGATION */}
        <div className="testimonial-quote-wrapper">
          {/* LEFT NAVIGATION BUTTON */}
          <button 
            className="testimonial-nav testimonial-nav-prev" 
            onClick={handlePrev}
            disabled={isTransitioning}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* QUOTE */}
          <div className={`testimonial-quote ${isTransitioning ? 'transitioning' : ''}`}>
            <p className="quote-text">
              "{testimonials[index].text}"
            </p>

            <div className="quote-author">
              <strong>{testimonials[index].name}</strong>
              {testimonials[index].role && <span>{testimonials[index].role}</span>}
            </div>
          </div>

          {/* RIGHT NAVIGATION BUTTON */}
          <button 
            className="testimonial-nav testimonial-nav-next" 
            onClick={handleNext}
            disabled={isTransitioning}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* INDICATORS */}
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleDotClick(i);
                }
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}