import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Support request sent by ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ y: -50, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 style={{ color: "black" }}>Expense Management Support</h2>
      <div className="contact-container">
        {/* Support Info */}
        <motion.div
          className="contact-info"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Need Help?</h3>
          <p>💼 Our support team is here to assist you with any expense-related queries or technical issues.</p>
          <p>📞 +92 300 123 4567</p>
          <p>📧 support@expensetracker.com</p>
          <p>🕒 Support Hours: Monday – Friday | 9:00 AM – 6:00 PM</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Send a Support Request</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Describe your issue"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}























// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Contact() {
//     const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Message Sent by ${formData.name}`);
//         setFormData({ name: "", email: "", message: "" }); // Reset form after submission
//     };

//     return (
//         <motion.div className="contact-page"

//             initial={{ y: -50, opacity: 1 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             viewport={{ once: false, amount: 0.2 }}
//         >
//             <h2 style={{ color: 'black' }}>Contact Us</h2>
//             <div className="contact-container">

//                 <motion.div className="contact-info"
//                     whileInView={{ y: 0, opacity: 1 }}
//                     initial={{ y: 100, opacity: 0 }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: false, amount: 0.3 }}

//                 >
//                     <h3>Get in Touch</h3>
//                     <p>📍 Chowk Churtta, Board Office Road, Near Zainab Hospital, Dera Ghazi Khan, Pakistan</p>
//                     <p>📞 +92 3285 459 661 </p>
//                     <p>📧 contact@Wadanihostel.com</p>
//                     {/* Google Map Embed */}
//                     <iframe
//                         src="https://www.google.com/maps?q=30.0505,70.6332&z=15&output=embed"
//                         width="100%"
//                         height="200"
//                         style={{ border: "0" }}
//                         allowFullScreen=""
//                         loading="lazy"
//                     ></iframe>
//                 </motion.div>



//                 {/* Contact Form */}
//                 <motion.div className="contact-form"
//                     whileInView={{ y: 0, opacity: 1 }}
//                     initial={{ y: 100, opacity: 0 }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: false, amount: 0.3 }}>
//                     <h3>Send us a Message</h3>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Your Name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Your Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <textarea
//                             name="message"
//                             placeholder="Your Message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         ></textarea>
//                         <button type="submit">Send Message</button>
//                     </form>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// };

