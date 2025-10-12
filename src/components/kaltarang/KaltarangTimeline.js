// components/kaltarang/KaltarangTimeline.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'

export default function KaltarangTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      day: 'Day 1',
      date: 'February 15, 2025',
      events: [
        {
          time: '9:00 AM',
          title: 'Registration & Opening Ceremony',
          venue: 'Main Auditorium',
          description: 'Welcome address and fest inauguration',
        },
        {
          time: '11:00 AM',
          title: 'Solo Singing Competition - Round 1',
          venue: 'Music Hall',
          description: 'Audition rounds for solo singing',
        },
        {
          time: '2:00 PM',
          title: 'Dance Battle - Prelims',
          venue: 'Open Stage',
          description: 'Initial rounds for solo and group dance',
        },
        {
          time: '5:00 PM',
          title: 'Battle of Bands - Round 1',
          venue: 'Main Stage',
          description: 'Band performances and selection',
        },
      ],
    },
    {
      day: 'Day 2',
      date: 'February 16, 2025',
      events: [
        {
          time: '10:00 AM',
          title: 'Fashion Show - Auditions',
          venue: 'Fashion Arena',
          description: 'Ramp walk and theme presentation',
        },
        {
          time: '1:00 PM',
          title: 'Drama Competition - Prelims',
          venue: 'Theatre Hall',
          description: 'Short plays and street performances',
        },
        {
          time: '4:00 PM',
          title: 'Folk Dance Competition',
          venue: 'Cultural Stage',
          description: 'Traditional and folk dance performances',
        },
        {
          time: '7:00 PM',
          title: 'Evening Cultural Nights',
          venue: 'Main Ground',
          description: 'Celebrity performances and DJ night',
        },
      ],
    },
    {
      day: 'Day 3',
      date: 'February 17, 2025',
      events: [
        {
          time: '10:00 AM',
          title: 'Grand Finale - All Events',
          venue: 'Multiple Venues',
          description: 'Final rounds of all competitions',
        },
        {
          time: '3:00 PM',
          title: 'Star Night Performance',
          venue: 'Main Stage',
          description: 'Celebrity artist performance',
        },
        {
          time: '6:00 PM',
          title: 'Prize Distribution & Closing',
          venue: 'Main Auditorium',
          description: 'Awards ceremony and fest closure',
        },
      ],
    },
  ]

  return (
    <section ref={ref} className="py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 rounded-full text-sm font-bold mb-6 bg-kaltarang/20 text-kaltarang border-2 border-kaltarang/50"
          >
            EVENT SCHEDULE
          </motion.span>
          <h2 className="heading-xl mb-6 text-kaltarang">
            Kaltarang Timeline
          </h2>
          <p className="text-xl text-text-dim max-w-2xl mx-auto">
            Three days of non-stop cultural extravaganza
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {timelineEvents.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: dayIndex * 0.2 }}
              className="mb-16 last:mb-0"
            >
              {/* Day Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="glass rounded-2xl px-8 py-4 border-2 border-kaltarang/40">
                  <h3 className="text-3xl font-black text-kaltarang">
                    {day.day}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-text-dim">
                  <FiCalendar className="text-2xl text-kaltarang" />
                  <span className="text-xl">{day.date}</span>
                </div>
              </div>

              {/* Events for the day */}
              <div className="relative pl-12">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-kaltarang via-red-600 to-kaltarang/20" />

                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                    className="relative mb-8 last:mb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[52px] top-6 w-6 h-6 rounded-full bg-kaltarang shadow-glow-red" />

                    {/* Event Card */}
                    <div className="glass rounded-2xl p-6 border-l-4 border-kaltarang hover:border-red-600 transition-all hover:shadow-glow-red-lg group">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                        <h4 className="text-2xl font-bold text-white group-hover:text-kaltarang transition-colors">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-kaltarang font-bold text-lg">
                          <FiClock />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <p className="text-text-dim mb-4 text-lg">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-2 text-text-dim">
                        <FiMapPin className="text-kaltarang" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-12 py-4 text-lg bg-gradient-to-r from-kaltarang to-red-600"
            style={{
              boxShadow: '0 20px 60px rgba(239, 68, 68, 0.5)',
            }}
          >
            Download Full Schedule
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}