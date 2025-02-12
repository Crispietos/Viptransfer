"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [selectedDepartureDate, setSelectedDepartureDate] = useState("");
  const [selectedReturnDate, setSelectedReturnDate] = useState("");

  useEffect(() => {
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    if (!formRef.current) {
      console.error("Form reference is null");
      alert("Form submission failed. Please refresh the page.");
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Your message has been sent successfully!");
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("An error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="section mt-120 mb-120">
      <div className="container-sub">
        <div className="mw-770">
          <div className="text-center mb-50">
            <h2 className="text-32 font-bold text-black">Contact Us</h2>
            <p className="text-18 text-black">
              If you have any questions or would like to make a reservation, please fill out the form below, and we will respond as quickly as possible.
            </p>
          </div>

          <div className="form-contact form-comment">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="row">
                {/* Full Name */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="fullname">Full Name</label>
                    <input className="form-control text-black bg-white" id="fullname" name="from_name" type="text" required placeholder="Enter your full name" />
                  </div>
                </div>

                {/* Email */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="email">Email</label>
                    <input 
                      className="form-control text-black bg-white" 
                      name="reply_to" 
                      type="email" 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="phone">Phone Number</label>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <select name="country_code" className="form-control text-black bg-white" required>
                        <option value="+353">🇮🇪 +353 (Ireland)</option>
                        <option value="+44">🇬🇧 +44 (UK)</option>
                        <option value="+48">🇵🇱 +48 (Poland)</option>
                        <option value="+1">🇺🇸 +1 (USA)</option>
                        <option value="+49">🇩🇪 +49 (Germany)</option>
                      </select>
                      <input 
                        className="form-control text-black bg-white" 
                        name="phone" 
                        type="tel" 
                        pattern="[0-9]+" 
                        placeholder="Enter phone number" 
                        required 
                        onInput={(e) => e.target.value = e.target.value.replace(/\D/, '')} 
                      />
                    </div>
                  </div>
                </div>

                {/* Service Type */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="service_type">Select Service</label>
                    <select className="form-control text-black bg-white" id="service_type" name="service_type" required>
                      <option value="" disabled selected>Choose a service</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Day Tour">Day Tour</option>
                      <option value="Hotel Transfer">Hotel Transfer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Departure Date and Time */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="departure_date">Departure Date and Time</label>
                    <input
                      className="form-control text-black bg-white"
                      id="departure_date"
                      name="departure_date"
                      type="datetime-local"
                      value={selectedDepartureDate}
                      onChange={(e) => setSelectedDepartureDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Return Date and Time */}
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="return_date">Return Date and Time (Optional)</label>
                    <input
                      className="form-control text-black bg-white"
                      id="return_date"
                      name="return_date"
                      type="datetime-local"
                      value={selectedReturnDate}
                      onChange={(e) => setSelectedReturnDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-label text-black" htmlFor="message">Message</label>
                    <textarea className="form-control text-black bg-white" id="message" name="message" required placeholder="Enter your message"></textarea>
                  </div>
                </div>

            
                {/* Consent */}
                <div className="col-lg-12">
                  <div className="form-group consent-group">
                    <input type="checkbox" id="consent" name="consent" required className="consent-checkbox" />
                    <label htmlFor="consent" className="consent-label">
                      I agree to the processing of my personal data for the purpose of booking and contact in accordance with the  
                      <br />
                      <a href="/privacy-policy" target="_blank" className="privacy-link">
                        Privacy Policy
                      </a>.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-lg-12 text-center">
                  <button className="btn btn-primary btn-lg btn-full-width text-white bg-black" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}