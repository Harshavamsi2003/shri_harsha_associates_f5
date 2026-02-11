
//----------------------------------------------------------------------------------------------------


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

//     const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
//     const body = encodeURIComponent(
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Phone: ${formData.phone}\n\n` +
//       `Project Details:\n${formData.message}`
//     );
    
//     const mailtoLink = `mailto:info@shriharshaassociates.com?subject=${subject}&body=${body}`;
//     window.location.href = mailtoLink;
    
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

//         {/* PREMIUM LAYOUT */}
//         <div className="contact-wrapper">
          
//           {/* FORM SECTION */}
//           <div className="contact-form-container">
//             <div className="form-title">
//               <h3>Send us a Message</h3>
//               <p>Fill out the form and we'll get back to you shortly</p>
//             </div>
            
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-row">
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
//               </div>

//               <div className="form-group">
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required 
//                 />
//                 <label className={formData.phone ? 'active' : ''}>Phone</label>
//               </div>

//               <div className="form-group">
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5" 
//                   required
//                 ></textarea>
//                 <label className={formData.message ? 'active' : ''}>Project Details</label>
//               </div>

//               <button type="submit" disabled={isSubmitting} className="submit-btn">
//                 <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
//                 <i className="fas fa-arrow-right"></i>
//               </button>

//               {submitStatus && (
//                 <p className="submit-status">{submitStatus}</p>
//               )}
//             </form>
//           </div>

//           {/* INFO + MAP SECTION */}
//           <div className="contact-info-container">
            
//             {/* CONTACT CARDS */}
//             <div className="contact-cards">
//               <div className="info-card">
//                 <div className="card-icon">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div className="card-content">
//                   <h4>Visit Us</h4>
//                   <p>
//                     No.7, Vivekanandhar Street,<br />
//                     Thirumoolar Colony,<br />
//                     Anna Nagar West,<br />
//                     Chennai – 600040
//                   </p>
//                 </div>
//               </div>

//               <div className="info-card">
//                 <div className="card-icon">
//                   <i className="fas fa-phone-alt"></i>
//                 </div>
//                 <div className="card-content">
//                   <h4>Call Us</h4>
//                   <p>+91 98414 19288</p>
//                 </div>
//               </div>

//               <div className="info-card">
//                 <div className="card-icon">
//                   <i className="fas fa-envelope"></i>
//                 </div>
//                 <div className="card-content">
//                   <h4>Email Us</h4>
//                   <p>info@shriharshaassociates.com</p>
//                 </div>
//               </div>
//             </div>

//             {/* CLICKABLE MAP */}
//             <a 
//               href="https://maps.app.goo.gl/hFjQJichhgVMhMiv6" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="contact-map-link"
//             >
//               <div className="contact-map">
//                 <iframe
//                   title="Shri Harsha Associates Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1321341485736!2d80.20357487484407!3d13.085946112231362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265b2a2dfcc7b%3A0x8b8d7f17b6cdb02f!2sVivekanandhar%20St%2C%20Anna%20Nagar%20West%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1732720000000"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   style={{ pointerEvents: 'none' }}
//                 ></iframe>
//                 <div className="map-overlay">
//                   <i className="fas fa-external-link-alt"></i>
//                   <span>Open in Google Maps</span>
//                 </div>
//               </div>
//             </a>

//             {/* SOCIAL LINKS */}
//             <div className="contact-socials">
//               <a 
//                 href="tel:+919841419288" 
//                 aria-label="Call us"
//                 className="social-link"
//               >
//                 <i className="fas fa-phone"></i>
//               </a>
//               <a 
//                 href="https://wa.me/919841419288" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="social-link"
//               >
//                 <i className="fab fa-whatsapp"></i>
//               </a>
//               <a 
//                 href="https://www.instagram.com/shriharshaassociates" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="social-link"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a 
//                 href="mailto:info@shriharshaassociates.com" 
//                 aria-label="Email us"
//                 className="social-link"
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

//---------------1

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

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: 'e62c0108-52dd-4314-9aae-9486b63f3080', // Replace with your Web3Forms access key
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message,
//           subject: `New Enquiry from ${formData.name} - Shri Harsha Associates`,
//           from_name: 'Shri Harsha Associates Website',
//           to: 'info@shriharshaassociates.com' // Your email
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitStatus('Thank you! Your enquiry has been sent successfully.');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: ''
//         });
        
//         // Clear success message after 5 seconds
//         setTimeout(() => {
//           setSubmitStatus('');
//         }, 5000);
//       } else {
//         setSubmitStatus('Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       setSubmitStatus('Failed to send. Please try again later.');
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
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

//         {/* PREMIUM LAYOUT */}
//         <div className="contact-wrapper">
          
//           {/* FORM SECTION */}
//           <div className="contact-form-container">
//             <div className="form-title">
//               <h3>Send us a Message</h3>
//               <p>Fill out the form and we'll get back to you shortly</p>
//             </div>
            
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-row">
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
//               </div>

//               <div className="form-group">
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required 
//                 />
//                 <label className={formData.phone ? 'active' : ''}>Phone</label>
//               </div>

//               <div className="form-group">
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5" 
//                   required
//                 ></textarea>
//                 <label className={formData.message ? 'active' : ''}>Project Details</label>
//               </div>

//               <button type="submit" disabled={isSubmitting} className="submit-btn">
//                 <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
//                 <i className="fas fa-arrow-right"></i>
//               </button>

//               {submitStatus && (
//                 <p className={`submit-status ${submitStatus.includes('Thank you') ? 'success' : 'error'}`}>
//                   {submitStatus}
//                 </p>
//               )}
//             </form>
//           </div>

//           {/* INFO + MAP SECTION */}
//           <div className="contact-info-container">
            
//             {/* CONTACT CARDS */}
//             <div className="contact-cards">
//               <div className="info-card">
//                 <div className="card-icon">
//                   <i className="fas fa-map-marker-alt"></i>
//                 </div>
//                 <div className="card-content">
//                   <h4>Visit Us</h4>
//                   <p>
//                     No.7, Vivekanandhar Street,<br />
//                     Thirumoolar Colony,<br />
//                     Anna Nagar West,<br />
//                     Chennai – 600040
//                   </p>
//                 </div>
//               </div>

//               <div className="info-card">
//                 <div className="card-icon">
//                   <i className="fas fa-phone-alt"></i>
//                 </div>
//                 <div className="card-content">
//                   <h4>Call Us</h4>
//                   <p>+91 98414 19288</p>
//                 </div>
//               </div>

//               <div className="info-card">
//                 <div className="card-icon">
//                   <i className="fas fa-envelope"></i>
//                 </div>
//                 <div className="card-content">
//                   <h4>Email Us</h4>
//                   <p>info@shriharshaassociates.com</p>
//                 </div>
//               </div>
//             </div>

//             {/* CLICKABLE MAP */}
//             <a 
//               href="https://maps.app.goo.gl/hFjQJichhgVMhMiv6" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="contact-map-link"
//             >
//               <div className="contact-map">
//                 <iframe
//                   title="Shri Harsha Associates Location"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1321341485736!2d80.20357487484407!3d13.085946112231362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265b2a2dfcc7b%3A0x8b8d7f17b6cdb02f!2sVivekanandhar%20St%2C%20Anna%20Nagar%20West%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1732720000000"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   style={{ pointerEvents: 'none' }}
//                 ></iframe>
//                 <div className="map-overlay">
//                   <i className="fas fa-external-link-alt"></i>
//                   <span>Open in Google Maps</span>
//                 </div>
//               </div>
//             </a>

//             {/* SOCIAL LINKS */}
//             <div className="contact-socials">
//               <a 
//                 href="tel:+919841419288" 
//                 aria-label="Call us"
//                 className="social-link"
//               >
//                 <i className="fas fa-phone"></i>
//               </a>
//               <a 
//                 href="https://wa.me/919841419288" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="social-link"
//               >
//                 <i className="fab fa-whatsapp"></i>
//               </a>
//               <a 
//                 href="https://www.instagram.com/shriharshaassociates" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="social-link"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a 
//                 href="mailto:info@shriharshaassociates.com" 
//                 aria-label="Email us"
//                 className="social-link"
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


//2

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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - at least 2 characters
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation - Indian mobile number (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, ''); // Remove non-digits
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Message validation - at least 10 characters
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      setSubmitStatus('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e62c0108-52dd-4314-9aae-9486b63f3080',
          to: 'info@shriharshaassociates.com',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Enquiry from ${formData.name} - Shri Harsha Associates`,
          from_name: 'Shri Harsha Associates Website'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('Thank you! Your enquiry has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        setSubmitStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Failed to send. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                  {errors.name && <span className="error-message">{errors.name}</span>}
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
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  required 
                />
                <label className={formData.phone ? 'active' : ''}>Phone</label>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
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
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              {submitStatus && (
                <p className={`submit-status ${submitStatus.includes('Thank you') ? 'success' : 'error'}`}>
                  {submitStatus}
                </p>
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