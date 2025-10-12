"use client"
export function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('day1');

  const scheduleData = {
    day1: [
      { time: "09:00 AM", event: "Registration & Welcome", venue: "Main Hall", type: "general" },
      { time: "10:00 AM", event: "Opening Ceremony", venue: "Auditorium", type: "ceremony" },
      { time: "11:00 AM", event: "Coding Competition - Round 1", venue: "Computer Lab", type: "competition" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Cafeteria", type: "break" },
      { time: "02:00 PM", event: "AI/ML Workshop", venue: "AI Lab", type: "workshop" },
      { time: "04:00 PM", event: "Hackathon Begins", venue: "Main Auditorium", type: "competition" },
      { time: "06:00 PM", event: "Cultural Evening", venue: "Open Ground", type: "cultural" },
    ],
    day2: [
      { time: "09:00 AM", event: "App Development - Presentations", venue: "SAC", type: "competition" },
      { time: "11:00 AM", event: "Cybersecurity CTF", venue: "Computer Lab", type: "competition" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Cafeteria", type: "break" },
      { time: "02:00 PM", event: "Web Development Finals", venue: "SAC", type: "competition" },
      { time: "04:00 PM", event: "Blockchain Workshop", venue: "Blockchain Lab", type: "workshop" },
      { time: "06:00 PM", event: "Prize Distribution", venue: "Main Auditorium", type: "ceremony" },
      { time: "07:00 PM", event: "Closing Ceremony", venue: "Main Auditorium", type: "ceremony" },
    ],
  };

  const getEventTypeColor = (type) => {
    const colors = {
      general: 'bg-gray-600 border-gray-400',
      ceremony: 'bg-purple-600 border-purple-400',
      competition: 'bg-blue-600 border-blue-400',
      break: 'bg-green-600 border-green-400',
      workshop: 'bg-orange-600 border-orange-400',
      cultural: 'bg-pink-600 border-pink-400',
    };
    return colors[type] || 'bg-gray-600 border-gray-400';
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-blue-400">Event Schedule</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Plan your journey through innovation
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 rounded-full p-2 border border-blue-500/20">
            <button
              onClick={() => setSelectedDay('day1')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedDay === 'day1'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Day 1 - Nov 10
            </button>
            <button
              onClick={() => setSelectedDay('day2')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedDay === 'day2'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Day 2 - Nov 11
            </button>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform md:-translate-x-1/2"></div>

            {/* Schedule Items */}
            <div className="space-y-8">
              {scheduleData[selectedDay].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Time Badge */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 border-4 border-gray-900 rounded-full flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-center leading-tight">
                      {item.time.split(' ')[0]}
                      <br />
                      {item.time.split(' ')[1]}
                    </span>
                  </div>

                  {/* Event Card */}
                  <div
                    className={`ml-28 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div
                      className={`${getEventTypeColor(
                        item.type
                      )} p-6 rounded-xl border-2 shadow-lg hover:scale-105 transition-transform duration-300`}
                    >
                      <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                      <p className="text-sm text-white/80 mb-1">📍 {item.venue}</p>
                      <p className="text-sm text-white/80">🕒 {item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 border-2 border-blue-400 rounded"></div>
            <span className="text-sm text-gray-400">Competition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-600 border-2 border-orange-400 rounded"></div>
            <span className="text-sm text-gray-400">Workshop</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-600 border-2 border-purple-400 rounded"></div>
            <span className="text-sm text-gray-400">Ceremony</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 border-2 border-green-400 rounded"></div>
            <span className="text-sm text-gray-400">Break</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-600 border-2 border-pink-400 rounded"></div>
            <span className="text-sm text-gray-400">Cultural</span>
          </div>
        </div>
      </div>
    </section>
  );
}