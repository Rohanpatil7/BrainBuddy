import Navbar from "../components/Navbar";

const Generate = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="p-6 max-w-2xl mx-auto mt-10">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">What are we learning today? 📚</h2>
            <p className="text-slate-500 mt-2 font-medium">Tell BrainBuddy what you need help with!</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Class</label>
                <select className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700 cursor-pointer">
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Subject</label>
                <select className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700 cursor-pointer">
                  <option>Science 🔬</option>
                  <option>Math ➗</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Topic Name</label>
              <input
                type="text"
                placeholder="e.g. Photosynthesis, Fractions, Gravity..."
                className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700"
              />
            </div>

            <button className="w-full bg-green-500 hover:bg-green-400 text-white font-extrabold text-xl px-6 py-4 rounded-2xl shadow-[0_4px_0_rgb(34,197,94)] hover:shadow-[0_2px_0_rgb(34,197,94)] hover:translate-y-[2px] transition-all mt-4">
              ✨ Generate Magic ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;