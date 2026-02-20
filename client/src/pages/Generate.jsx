import Navbar from "../components/Navbar";

const Generate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden pb-12">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-0 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative z-10 max-w-md mx-auto p-6 mt-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-slate-800">What are we studying? 📚</h2>
          <p className="text-slate-500 font-medium mt-2">Tell us the topic, and we'll do the rest!</p>
        </div>
        
        {/* Glassmorphism Form Card */}
        <form className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white space-y-6">
          
          {/* Class Select */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 ml-1">Select Class</label>
            <div className="relative">
              <select className="w-full bg-white/60 border border-slate-200 text-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none font-bold text-lg shadow-sm">
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Subject Select */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 ml-1">Subject</label>
            <div className="relative">
              <select className="w-full bg-white/60 border border-slate-200 text-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none font-bold text-lg shadow-sm">
                <option>Math</option>
                <option>Science</option>
                <option>History</option>
                <option>Geography</option>
                <option>English</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Topic Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 ml-1">Topic Name</label>
            <input
              type="text"
              placeholder="e.g. Solar System, Fractions..."
              className="w-full bg-white/60 border border-slate-200 text-slate-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400 font-bold text-lg shadow-sm"
            />
          </div>

          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-5 rounded-2xl shadow-lg shadow-blue-200 mt-4 transition-transform active:scale-95 text-lg flex justify-center items-center gap-2">
            <span>Generate Magic</span>
            <span className="text-xl">✨</span>
          </button>

        </form>
      </main>
    </div>
  );
};

export default Generate;