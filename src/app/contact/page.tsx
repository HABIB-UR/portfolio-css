"use client";

import "@/style/contact.css"
 
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email)
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div className="father">
      
      <section className="section">
        <h1 className="contact">Contact Me</h1>
        <p className="para">
          Feel free to reach out for any inquiries, collaborations, or just to say hello!
        </p>
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="name" className="name">
              Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className=""
            /> </div>
            <div>
              <label htmlFor="email" className="email">
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=""
              />
            </div>
            <div>
              <label htmlFor="message" className="message">
                Message
              </label> <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className=""
            />
          </div>
          <button
            type="submit"
            className="submit"
          >
            Send Message
          </button>
        </form>
      </section>  </div>
  );
};

export default Contact;

      


  

