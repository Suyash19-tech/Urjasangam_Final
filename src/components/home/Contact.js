'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@400;600&display=swap');

        .contact-wrapper {
          font-family: 'Poppins', sans-serif;
          background-color: #05020a;
          background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
          color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .contact-section {
          width: 100%;
          max-width: 1100px;
        }

        .contact-section h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 40px;
          color: #fff;
          text-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 40px;
        }

        .form-column h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #22d3ee;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: rgba(240, 240, 240, 0.7);
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          color: #f0f0f0;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #22d3ee;
          box-shadow: 0 0 15px -2px #22d3ee;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background-color: #22d3ee;
          color: #000;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px -5px #22d3ee;
        }

        .submit-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 0 30px 0px #22d3ee;
        }

        .info-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .info-item h3 {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(240, 240, 240, 0.7);
          margin-bottom: 5px;
        }

        .info-item p,
        .info-item a {
          font-size: 1.1rem;
          color: #f0f0f0;
          text-decoration: none;
        }

        .info-item a:hover {
          color: #22d3ee;
        }

        .map-container {
          width: 100%;
          flex-grow: 1;
          min-height: 200px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%) invert(90%) contrast(80%);
        }

        .popup-icons-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .icon-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .icon-wrapper:hover {
          background: #22d3ee;
          border-color: #22d3ee;
          transform: translateY(-5px);
        }

        .icon-wrapper svg {
          color: #f0f0f0;
          transition: color 0.3s ease;
        }

        .icon-wrapper:hover svg {
          color: #000;
        }

        .tooltip {
          position: absolute;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background-color: #111;
          color: #f0f0f0;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .icon-wrapper:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          .info-column {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            padding: 40px 15px;
          }
          .contact-section h1 {
            font-size: 2.2rem;
          }
          .contact-container {
            padding: 30px;
          }
        }
      `}</style>

      <div className="contact-wrapper">
        <section className="contact-section">
          <h1>Get In Touch</h1>
          <div className="contact-container">
            <div className="form-column">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Query about Energia"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="info-column">
              <div className="info-item">
                <h3>CONTACT EMAIL</h3>
                <a href="mailto:contact@urjasangam.com">
                  contact@urjasangam.com
                </a>
              </div>
              <div className="info-item">
                <h3>COLLEGE ADDRESS</h3>
                <p>
                  Rajiv Gandhi Institute of Petroleum Technology,
                  <br />
                  Mubarakpur Mukhetia More, Post Harbanshganj, Jais, Amethi,
                  Uttar Pradesh 229304
                </p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5267766876844!2d81.07673931504424!3d26.804854783174458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdedb73e!2sRajiv%20Gandhi%20Institute%20of%20Petroleum%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  loading="lazy"
                />
              </div>
              <div className="popup-icons-container">
                <a href="#" className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="tooltip">Instagram</span>
                </a>
                <a href="#" className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  <span className="tooltip">Twitter</span>
                </a>
                <a href="#" className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="tooltip">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}