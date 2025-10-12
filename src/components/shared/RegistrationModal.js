'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    fest: '',
    accommodation: 'no',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration successful! Check your email for confirmation.')
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      fest: '',
      accommodation: 'no',
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-8 bg-bg-dark/97 backdrop-blur-[25px]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className="glass rounded-[35px] p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-energia/30 hover:bg-energia hover:rotate-90 transition-all"
            >
              <FaTimes size={20} />
            </button>

            {/* Title */}
            <h2 className="font-turret text-5xl mb-10 gradient-text font-black">
              Event Registration
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-3 font-semibold text-lg">
                  Full Name
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
                <label htmlFor="email" className="block mb-3 font-semibold text-lg">
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
                <label htmlFor="phone" className="block mb-3 font-semibold text-lg">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
                />
              </div>

              <div>
                <label htmlFor="college" className="block mb-3 font-semibold text-lg">
                  College/Institution
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
                />
              </div>

              <div>
                <label htmlFor="fest" className="block mb-3 font-semibold text-lg">
                  Select Fest
                </label>
                <select
                  id="fest"
                  name="fest"
                  value={formData.fest}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
                >
                  <option value="">Choose your fest</option>
                  <option value="urjotsav">Urjotsav - Tech Festival</option>
                  <option value="kaltarang">Kaltarang - Cultural Festival</option>
                  <option value="energia">Energia - Sports Festival</option>
                  <option value="souardhya">Souardhya - Social Impact</option>
                  <option value="combo">Combo Pass - All Fests</option>
                </select>
              </div>

              <div>
                <label htmlFor="accommodation" className="block mb-3 font-semibold text-lg">
                  Need Accommodation?
                </label>
                <select
                  id="accommodation"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-bg-dark/70 border-2 border-energia/30 rounded-2xl text-white focus:outline-none focus:border-energia focus:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-12 py-5 text-xl font-semibold rounded-full bg-gradient-to-r from-energia to-urjotsav text-white shadow-[0_10px_40px_rgba(147,51,234,0.4)] hover:shadow-[0_15px_60px_rgba(147,51,234,0.6)] transition-all"
              >
                Complete Registration
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}