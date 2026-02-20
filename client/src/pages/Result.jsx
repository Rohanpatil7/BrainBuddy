import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar />
      
      <div className="p-4 sm:p-10 max-w-4xl mx-auto mt-6 space-y-8">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="bg-sky-100 text-sky-700 text-sm font-bold px-4 py-1 rounded-full uppercase">Science • Class 6</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-4">Photosynthesis 🌱</h2>
          </div>
          <Link to="/generate" className="text-violet-600 font-bold hover:underline bg-violet-50 px-4 py-2 rounded-full">
            ← Back to Search
          </Link>
        </div>

        {/* AI Summary Section */}
        <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-sm border-2 border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-slate-100 pb-4">📝 Simple Summary</h3>
          <div className="prose prose-lg prose-slate text-slate-600 font-medium">
            <p>Imagine if you could make your own food just by standing in the sun! That's exactly what plants do. Photosynthesis is the magic process where plants use sunlight, water, and air to cook up their own sugary food.</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded-r-xl">
              <strong className="text-amber-800 block mb-1">🌍 Real-Life Example:</strong>
              <span className="text-amber-700">Think of a plant's leaves as tiny solar panels mixed with a kitchen. They catch the sun's energy to bake their "meals"!</span>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-sm border-2 border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-slate-100 pb-4">🎯 Quick Quiz</h3>
          
          {/* Example Quiz Question */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <p className="font-bold text-lg text-slate-800 mb-4">1. What do plants use to make their food?</p>
            <div className="space-y-3">
              <label className="flex items-center p-4 bg-white border-2 border-slate-200 rounded-xl cursor-pointer hover:border-violet-400 hover:bg-violet-50 transition-colors">
                <input type="radio" name="q1" className="w-5 h-5 text-violet-600" />
                <span className="ml-3 font-medium text-slate-700">Burgers and Fries</span>
              </label>
              <label className="flex items-center p-4 bg-white border-2 border-slate-200 rounded-xl cursor-pointer hover:border-violet-400 hover:bg-violet-50 transition-colors">
                <input type="radio" name="q1" className="w-5 h-5 text-violet-600" />
                <span className="ml-3 font-medium text-slate-700">Sunlight, Water, and Air</span>
              </label>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Result;