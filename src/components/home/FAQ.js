
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlus } from 'react-icons/fa'

export default function FAQ() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Urja Sangam?',
      answer: 'Urja Sangam is a mega convergence event that brings together four major festivals - Urjotsav (Tech), Kaltarang (Cultural), Energia (Sports), and Souardhya (Social Impact) - all happening in one extraordinary week from October 10-17, 2025.',
    },
    {
      question: 'How do I register for events?',
      answer: 'Click the "Register Now" button on the homepage or any event page. Fill out the registration form with your details, select the events you want to participate in, and complete the payment process. You\'ll receive a confirmation email with your event pass.',
    },
    {
      question: 'Are there any participation fees?',
      answer: 'Yes, there\'s a nominal registration fee that varies by event. Individual events range from ₹100-500, while combo passes for multiple fests are available at discounted rates. Some workshops and competitions may have additional fees.',
    },
    {
      question: 'Can I participate in multiple fests?',
      answer: 'Absolutely! We encourage participants to explore different fests. You can register for events across all four festivals. We also offer special combo passes that give you access to multiple fests at discounted rates.',
    },
    {
      question: 'Is accommodation provided?',
      answer: 'Yes, we provide accommodation facilities for outstation participants. You can opt for accommodation during registration. We have partnerships with nearby hostels and hotels offering special rates for Urja Sangam participants.',
    },
    {
      question: 'What prizes can I win?',
      answer: 'We have a prize pool exceeding ₹10 lakhs across all events! Prizes include cash awards, certificates, trophies, internship opportunities, and exclusive merchandise. Top performers also get featured on our website and social media.',
    },
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="font-turret text-center mb-12 font-black tracking-wider animate-title-pulse"
        style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-center text-white/90 max-w-3xl mx-auto mb-16 text-xl"
      >
        Everything you need to know about Urja Sangam
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-3xl overflow-hidden hover:border-energia hover:shadow-[0_10px_40px_rgba(147,51,234,0.3)] transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-10 py-8 flex justify-between items-center text-left"
            >
              <span className="text-xl font-semibold text-white pr-8">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 135 : 0 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="text-3xl flex-shrink-0"
                style={{ color: activeIndex === index ? '#9333EA' : '#F59E0B' }}
              >
                <FaPlus />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-8 text-white/85 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

