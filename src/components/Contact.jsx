


// import { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('');

//     // Create mailto link with form data
//     const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
//     const body = encodeURIComponent(
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Phone: ${formData.phone}\n\n` +
//       `Project Details:\n${formData.message}`
//     );
    
//     const mailtoLink = `mailto:info@shriharshaassociates.com?subject=${subject}&body=${body}`;
    
//     // Open mail client
//     window.location.href = mailtoLink;
    
//     // Reset form after a delay
//     setTimeout(() => {
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
//       setIsSubmitting(false);
//       setSubmitStatus('Thank you! Your enquiry has been sent.');
//     }, 1000);
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="contact-container">

//         {/* SECTION HEADER */}
//         <div className="contact-header">
//           <h2>Get in Touch</h2>
//           <p className="contact-subtitle">
//             We welcome meaningful conversations about projects that demand
//             precision, integrity, and thoughtful execution. Share your
//             requirements, and our team will connect with you directly.
//           </p>
//         </div>

//         {/* TWO COLUMN LAYOUT */}
//         <div className="contact-content">
          
//           {/* LEFT: FORM */}
//           <div className="contact-form-section">
//             <div className="contact-form">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <input 
//                     type="text" 
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required 
//                   />
//                   <label className={formData.name ? 'active' : ''}>Name</label>
//                 </div>

//                 <div className="form-group">
//                   <input 
//                     type="email" 
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required 
//                   />
//                   <label className={formData.email ? 'active' : ''}>Email</label>
//                 </div>

//                 <div className="form-group">
//                   <input 
//                     type="tel" 
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required 
//                   />
//                   <label className={formData.phone ? 'active' : ''}>Phone</label>
//                 </div>

//                 <div className="form-group">
//                   <textarea 
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="5" 
//                     required
//                   ></textarea>
//                   <label className={formData.message ? 'active' : ''}>Project Details</label>
//                 </div>

//                 <button type="submit" disabled={isSubmitting}>
//                   <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
//                 </button>

//                 {submitStatus && (
//                   <p className="submit-status">{submitStatus}</p>
//                 )}
//               </form>
//             </div>
//           </div>

//           {/* RIGHT: INFO + MAP */}
//           <div className="contact-info-section">
            
//             {/* ADDRESS CARD */}
//             <div className="contact-details-grid">
//               <div className="detail-card">
//                 <div className="detail-content">
//                   <strong>Address</strong>
//                   <span>
//                     No.7, Vivekanandhar Street,<br />
//                     Thirumoolar Colony, Anna Nagar West,<br />
//                     Chennai – 600040
//                   </span>
//                 </div>
//               </div>

//               <div className="detail-card">
//                 <div className="detail-content">
//                   <strong>Phone</strong>
//                   <span>+91 98414 19288</span>
//                 </div>
//               </div>

//               <div className="detail-card">
//                 <div className="detail-content">
//                   <strong>Email</strong>
//                   <span>info@shriharshaassociates.com</span>
//                 </div>
//               </div>
//             </div>

//             {/* MAP */}
//             <div className="contact-map">
//               <iframe
//                 title="Shri Harsha Associates Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1321341485736!2d80.20357487484407!3d13.085946112231362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265b2a2dfcc7b%3A0x8b8d7f17b6cdb02f!2sVivekanandhar%20St%2C%20Anna%20Nagar%20West%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1732720000000"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             {/* SOCIAL LINKS - NO LINKEDIN */}
//             <div className="contact-socials">
//               <a 
//                 href="tel:+919841419288" 
//                 aria-label="Call us"
//                 className="social-icon"
//               >
//                 <i className="fas fa-phone"></i>
//               </a>
//               <a 
//                 href="https://wa.me/919841419288" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="social-icon"
//               >
//                 <i className="fab fa-whatsapp"></i>
//               </a>
//               <a 
//                 href="https://www.instagram.com/shriharshaassociates" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="social-icon"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a 
//                 href="mailto:info@shriharshaassociates.com" 
//                 aria-label="Email us"
//                 className="social-icon"
//               >
//                 <i className="fas fa-envelope"></i>
//               </a>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Project Details:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:info@shriharshaassociates.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
      setSubmitStatus('Thank you! Your enquiry has been sent.');
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* SECTION HEADER */}
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            We welcome meaningful conversations about projects that demand
            precision, integrity, and thoughtful execution. Share your
            requirements, and our team will connect with you directly.
          </p>
        </div>

        {/* PREMIUM LAYOUT */}
        <div className="contact-wrapper">
          
          {/* FORM SECTION */}
          <div className="contact-form-container">
            <div className="form-title">
              <h3>Send us a Message</h3>
              <p>Fill out the form and we'll get back to you shortly</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <label className={formData.name ? 'active' : ''}>Name</label>
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  <label className={formData.email ? 'active' : ''}>Email</label>
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
                <label className={formData.phone ? 'active' : ''}>Phone</label>
              </div>

              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  required
                ></textarea>
                <label className={formData.message ? 'active' : ''}>Project Details</label>
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              {submitStatus && (
                <p className="submit-status">{submitStatus}</p>
              )}
            </form>
          </div>

          {/* INFO + MAP SECTION */}
          <div className="contact-info-container">
            
            {/* CONTACT CARDS */}
            <div className="contact-cards">
              <div className="info-card">
                <div className="card-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="card-content">
                  <h4>Visit Us</h4>
                  <p>
                    No.7, Vivekanandhar Street,<br />
                    Thirumoolar Colony,<br />
                    Anna Nagar West,<br />
                    Chennai – 600040
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="card-content">
                  <h4>Call Us</h4>
                  <p>+91 98414 19288</p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="card-content">
                  <h4>Email Us</h4>
                  <p>info@shriharshaassociates.com</p>
                </div>
              </div>
            </div>

            {/* CLICKABLE MAP */}
            <a 
              href="https://maps.app.goo.gl/hFjQJichhgVMhMiv6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-map-link"
            >
              <div className="contact-map">
                <iframe
                  title="Shri Harsha Associates Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1321341485736!2d80.20357487484407!3d13.085946112231362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265b2a2dfcc7b%3A0x8b8d7f17b6cdb02f!2sVivekanandhar%20St%2C%20Anna%20Nagar%20West%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1732720000000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ pointerEvents: 'none' }}
                ></iframe>
                <div className="map-overlay">
                  <i className="fas fa-external-link-alt"></i>
                  <span>Open in Google Maps</span>
                </div>
              </div>
            </a>

            {/* SOCIAL LINKS */}
            <div className="contact-socials">
              <a 
                href="tel:+919841419288" 
                aria-label="Call us"
                className="social-link"
              >
                <i className="fas fa-phone"></i>
              </a>
              <a 
                href="https://wa.me/919841419288" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="https://www.instagram.com/shriharshaassociates" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="mailto:info@shriharshaassociates.com" 
                aria-label="Email us"
                className="social-link"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}