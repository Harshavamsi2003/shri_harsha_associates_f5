

//---------------------------


// import { useState } from "react";

// export default function EnquiryPanel({ open, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     const subject = encodeURIComponent(`Quick Enquiry from ${form.name}`);
//     const body = encodeURIComponent(
//       `Name: ${form.name}\n` +
//       `Phone: ${form.phone}\n\n` +
//       `Requirement:\n${form.message}`
//     );
    
//     const mailtoLink = `mailto:info@shriharshaassociates.com?subject=${subject}&body=${body}`;
//     window.location.href = mailtoLink;
    
//     setTimeout(() => {
//       setForm({
//         name: "",
//         phone: "",
//         message: ""
//       });
//       setIsSubmitting(false);
//       setSubmitStatus("Thank you! Your enquiry has been sent.");
      
//       // Close panel after 2 seconds
//       setTimeout(() => {
//         setSubmitStatus("");
//         onClose();
//       }, 2000);
//     }, 1000);
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`enquiry-overlay ${open ? "show" : ""}`}
//         onClick={onClose}
//       />

//       {/* Panel */}
//       <div className={`enquiry-panel ${open ? "open" : ""}`}>
//         <span className="close-btn" onClick={onClose}>
//           ×
//         </span>

//         <h3>Quick Enquiry</h3>
//         <p className="enquiry-subtitle">
//           Get a call back from our experts
//         </p>

//         <form className="enquiry-form" onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />
//           <input 
//             type="tel" 
//             placeholder="Phone Number" 
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             required
//           />
//           <textarea 
//             placeholder="Your Requirement" 
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             required
//           />

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Sending..." : "Send Enquiry"}
//           </button>

//           {submitStatus && (
//             <p style={{ 
//               marginTop: '15px', 
//               textAlign: 'center',
//               fontSize: '14px',
//               color: '#25D366'
//             }}>
//               {submitStatus}
//             </p>
//           )}
//         </form>
//       </div>
//     </>
//   );
// }

//1

// import { useState } from "react";

// export default function EnquiryPanel({ open, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus("");

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: 'e62c0108-52dd-4314-9aae-9486b63f3080', // Replace with your Web3Forms access key
//           name: form.name,
//           phone: form.phone,
//           message: form.message,
//           subject: `Quick Enquiry from ${form.name} - Shri Harsha Associates`,
//           from_name: 'Shri Harsha Associates Website',
//           to: 'info@shriharshaassociates.com' // Your email
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setSubmitStatus("Thank you! Your enquiry has been sent.");
//         setForm({
//           name: "",
//           phone: "",
//           message: ""
//         });
        
//         // Close panel after 2 seconds
//         setTimeout(() => {
//           setSubmitStatus("");
//           onClose();
//         }, 2000);
//       } else {
//         setSubmitStatus("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setSubmitStatus("Failed to send. Please try again later.");
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`enquiry-overlay ${open ? "show" : ""}`}
//         onClick={onClose}
//       />

//       {/* Panel */}
//       <div className={`enquiry-panel ${open ? "open" : ""}`}>
//         <span className="close-btn" onClick={onClose}>
//           ×
//         </span>

//         <h3>Quick Enquiry</h3>
//         <p className="enquiry-subtitle">
//           Get a call back from our experts
//         </p>

//         <form className="enquiry-form" onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             required
//           />

//           <input 
//             type="tel" 
//             placeholder="Phone Number" 
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             required
//           />

//           <textarea 
//             placeholder="Your Requirement" 
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             required
//           />

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Sending..." : "Send Enquiry"}
//           </button>

//           {submitStatus && (
//             <p style={{ 
//               marginTop: '15px', 
//               textAlign: 'center',
//               fontSize: '14px',
//               color: submitStatus.includes('Thank you') ? '#25D366' : '#ff4444'
//             }}>
//               {submitStatus}
//             </p>
//           )}
//         </form>
//       </div>
//     </>
//   );
// }

//2


import { useState } from "react";

export default function EnquiryPanel({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - at least 2 characters
    if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation - Indian mobile number (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = form.phone.replace(/\D/g, ''); // Remove non-digits
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Message validation - at least 5 characters
    if (form.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      setSubmitStatus("Please fix the errors");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e62c0108-52dd-4314-9aae-9486b63f3080',
          to: 'info@shriharshaassociates.com',
          name: form.name,
          phone: form.phone,
          message: form.message,
          subject: `Quick Enquiry from ${form.name} - Shri Harsha Associates`,
          from_name: 'Shri Harsha Associates Website'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("Thank you! Your enquiry has been sent.");
        setForm({
          name: "",
          phone: "",
          message: ""
        });
        setErrors({});
        
        // Close panel after 2 seconds
        setTimeout(() => {
          setSubmitStatus("");
          onClose();
        }, 2000);
      } else {
        setSubmitStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("Failed to send. Please try again later.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`enquiry-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div className={`enquiry-panel ${open ? "open" : ""}`}>
        <span className="close-btn" onClick={onClose}>
          ×
        </span>

        <h3>Quick Enquiry</h3>
        <p className="enquiry-subtitle">
          Get a call back from our experts
        </p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
          {errors.name && (
            <span style={{ 
              color: '#ff4444', 
              fontSize: '12px', 
              marginTop: '-10px', 
              marginBottom: '10px',
              display: 'block'
            }}>
              {errors.name}
            </span>
          )}

          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            maxLength="10"
            required
          />
          {errors.phone && (
            <span style={{ 
              color: '#ff4444', 
              fontSize: '12px', 
              marginTop: '-10px', 
              marginBottom: '10px',
              display: 'block'
            }}>
              {errors.phone}
            </span>
          )}

          <textarea 
            placeholder="Your Requirement" 
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            required
          />
          {errors.message && (
            <span style={{ 
              color: '#ff4444', 
              fontSize: '12px', 
              marginTop: '-10px', 
              marginBottom: '10px',
              display: 'block'
            }}>
              {errors.message}
            </span>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>

          {submitStatus && (
            <p style={{ 
              marginTop: '15px', 
              textAlign: 'center',
              fontSize: '14px',
              color: submitStatus.includes('Thank you') ? '#25D366' : '#ff4444'
            }}>
              {submitStatus}
            </p>
          )}
        </form>
      </div>
    </>
  );
}