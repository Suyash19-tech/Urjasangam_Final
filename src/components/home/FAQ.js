'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Urja Sangam?',
      answer: "Urja Sangam is our grand annual festival, representing the ultimate convergence of energy, talent, and innovation. It's the umbrella under which our four core fests—technical, cultural, sports, and social—come together for an unforgettable multi-day celebration."
    },
    {
      question: 'What are the major fests under Urja Sangam?',
      answer: [
        { title: 'Energia:', description: 'Our high-octane Sports Festival, celebrating athleticism and teamwork.' },
        { title: 'Urjotsav:', description: 'The Technical Festival, a hub for innovation, coding, and robotics.' },
        { title: 'Souardhya:', description: 'The Social Fest, focused on community engagement and making a difference.' },
        { title: 'Kaltarang:', description: 'Our vibrant Cultural Festival, showcasing art, music, and dance.' }
      ]
    },
    {
      question: "What is the theme for this year's festival?",
      answer: "This year's theme is <strong>Six Infinity Stones</strong>. It celebrates the merging of different streams of talent and ideas—where technology meets art, athletes meet social innovators, and all forms of energy and creativity unite in one spectacular event."
    },
    {
      question: 'Who can participate in Urja Sangam?',
      answer: 'Urja Sangam is an inter-college event open to all undergraduate and postgraduate students from any recognized institution. We invite all thinkers, creators, athletes, and performers to join us. Just be sure to carry your valid college ID.'
    },
    {
      question: 'Why should I attend Urja Sangam?',
      answer: "Attending Urja Sangam is more than just participating in events. It's an opportunity to network with brilliant minds, showcase your talents on a grand stage, win amazing prizes, and be part of an electrifying atmosphere of celebration, learning, and competition."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@400;600&display=swap');

        .faq-wrapper {
          font-family: 'Poppins', sans-serif;
          background-color: #05020a;
          background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
          color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          padding: 50px 20px;
        }

        .faq-container {
          width: 100%;
          max-width: 800px;
        }

        .faq-container h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 40px;
          color: #fff;
          text-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
        }

        .faq-item {
          margin-bottom: 20px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          transform: scale(1.02);
          box-shadow: 0 0 25px -5px #22d3ee;
        }

        .faq-item.active {
          box-shadow: 0 0 35px -5px #22d3ee;
          border-color: #22d3ee;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          cursor: pointer;
          width: 100%;
          border: none;
          background: transparent;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #f0f0f0;
        }

        .faq-question:focus {
          outline: none;
        }

        .faq-icon {
          width: 24px;
          height: 24px;
          position: relative;
          flex-shrink: 0;
          margin-left: 20px;
          transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .faq-icon::before,
        .faq-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 2px;
          background-color: #22d3ee;
          border-radius: 1px;
          transform: translate(-50%, -50%);
        }

        .faq-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .faq-item.active .faq-icon {
          transform: rotate(135deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
          padding: 0 25px;
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
          padding: 0 25px 25px 25px;
          transition: max-height 0.5s ease-in-out, padding 0.4s ease-in-out;
        }

        .faq-answer p {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(240, 240, 240, 0.7);
        }

        .faq-answer ul {
          list-style: none;
          padding-left: 0;
          color: rgba(240, 240, 240, 0.7);
        }

        .faq-answer li {
          margin-bottom: 10px;
        }

        .faq-answer strong {
          color: #f0f0f0;
        }

        @media (max-width: 768px) {
          .faq-wrapper {
            padding: 30px 15px;
          }
          .faq-container h1 {
            font-size: 2.2rem;
            margin-bottom: 30px;
          }
          .faq-question {
            font-size: 1rem;
            padding: 18px 20px;
          }
          .faq-answer p,
          .faq-answer li {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="faq-wrapper">
        <div className="faq-container">
          <h1>Frequently Asked Questions</h1>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <div className="faq-icon"></div>
              </button>
              <div className="faq-answer">
                {Array.isArray(faq.answer) ? (
                  <ul>
                    {faq.answer.map((item, i) => (
                      <li key={i}>
                        <strong>{item.title}</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}