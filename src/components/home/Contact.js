'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', interest: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { Icon: FaEnvelope, title: 'Email', value: 'urjasangam@rgipt.edu' },
    { Icon: FaPhone, title: 'Phone', value: '+91 98765 43210' },
    { Icon: FaMapMarkerAlt, title: 'Location', value: 'RGIPT Campus, Jais' },
  ]

  const socialLinks = [
    { Icon: FaFacebook, href: '#' },
    { Icon: FaTwitter, href: '#' },
    { Icon: FaInstagram, href: '#' },
    { Icon: FaLinkedin, href: '#' },
    { Icon: FaYoutube, href: '#' },
  ]

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="font-turret text-center mb-16 font-black tracking-wider animate-title-pulse"
        style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-dm text-5xl font-bold mb-8 gradient-text">
            Let's Connect
          </h3>
          <p className="text-text-dim text-xl mb-12 leading-relaxed">
            Have questions about Urja Sangam? Want to participate or sponsor? We'd love to hear from you!
          </p>

          <div className="space-y-10">
            {contactInfo.map(({ Icon, title, value }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8"
              >
                <div className="w-[70px] h-[70px] bg-gradient-to-br from-energia to-urjotsav rounded-2xl flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(147,51,234,0.4)]">
                  <Icon />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{title}</h4>
                  <p className="text-text-dim text-lg">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-6 mt-12">
            {socialLinks.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -8, rotate: 360 }}
                className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-energia/20 border-2 border-energia/40 hover:bg-energia hover:shadow-[0_15px_40px_rgba(147,51,234,0.5)] transition-all"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-[35px] p-14"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-4 font-semibold text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-4 font-semibold text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block mb-4 font-semibold text-lg">
                Event Interest
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
              >
                <option value="">Select a fest</option>
                <option value="urjotsav">Urjotsav (Tech)</option>
                <option value="kaltarang">Kaltarang (Cultural)</option>
                <option value="energia">Energia (Sports)</option>
                <option value="souardhya">Souardhya (Social)</option>
                <option value="all">All Fests</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-4 font-semibold text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-12 py-5 text-xl font-semibold rounded-full bg-gradient-to-r from-energia to-urjotsav text-white shadow-[0_10px_40px_rgba(147,51,234,0.4)] hover:shadow-[0_15px_60px_rgba(147,51,234,0.6)] transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}