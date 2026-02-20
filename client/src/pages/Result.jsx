import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden pb-12">
      {/* Decorative Blobs */}
      <div className="absolute top-20 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 -right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative z-10 max-w-md mx-auto p-6 mt-4 space-y-6">
        
        {/* Encouraging Header */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-extrabold text-slate-800">You're a Star! 🌟</h2>
          <p className="text-slate-500 font-medium mt-2">Here is your magical study guide.</p>
        </div>

        {/* 1. Summary Card */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-sm border border-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
              📖
            </div>
            <h3 className="text-xl font-bold text-slate-800">Quick Summary</h3>
          </div>
          <div className="text-slate-600 font-medium leading-relaxed space-y-3 text-sm md:text-base">
            <p>
              Photosynthesis is how plants make their own food! They act like little factories.
            </p>
            <p>
              They use <strong>sunlight</strong>, <strong>water</strong> from the soil, and <strong>carbon dioxide</strong> from the air to create sugar and release the oxygen we breathe.
            </p>
          </div>
        </div>

        {/* 2. Quiz Card */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-sm border border-white">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl">
              🧠
            </div>
            <h3 className="text-xl font-bold text-slate-800">Mini Quiz</h3>
          </div>

          {/* Mock Question */}
          <div className="space-y-4">
            <p className="font-bold text-slate-700 text-lg">1. What gas do plants release into the air?</p>
            
            {/* Answer Options - Large Tap Targets for Mobile */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-slate-200 bg-white rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="radio" name="q1" className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                <span className="font-medium text-slate-700">Carbon Dioxide</span>
              </label>
              
              {/* Example of a "Selected" state */}
              <label className="flex items-center gap-3 p-4 border-2 border-blue-500 bg-blue-50 rounded-2xl cursor-pointer transition-colors">
                <input type="radio" name="q1" className="w-5 h-5 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="font-bold text-blue-800">Oxygen</span>
              </label>

              <label className="flex items-center gap-3 p-4 border border-slate-200 bg-white rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="radio" name="q1" className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                <span className="font-medium text-slate-700">Nitrogen</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-md shadow-emerald-200 mt-6 transition-transform active:scale-95">
            Check Answer
          </button>
        </div>

        {/* Back Navigation */}
        <Link to="/dashboard" className="block mt-6">
          <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform active:scale-95">
            Back to Dashboard
          </button>
        </Link>
        
      </main>
    </div>
  );
};

export default Result;