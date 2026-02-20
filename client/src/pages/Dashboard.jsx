import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden pb-10">
      {/* Decorative Blobs */}
      <div className="absolute top-10 -left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 -right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative z-10 max-w-md mx-auto p-6 mt-4 space-y-6">
        
        {/* Welcome Header */}
        <header>
          <h2 className="text-3xl font-extrabold text-slate-800">Welcome Back, Rohan! 👋</h2>
          <p className="text-slate-500 font-medium mt-1 text-lg">Ready to learn something new today?</p>
        </header>

        {/* Action Card (Glassmorphism) */}
        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm">
            🚀
          </div>
          <h3 className="text-xl font-bold text-slate-800">Generate New Topic</h3>
          <p className="text-slate-500 mt-2 mb-6 font-medium leading-relaxed">
            Pick a subject and let AI create a magic summary and quiz just for you.
          </p>
          <Link to="/generate" className="block">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-transform active:scale-95 text-lg">
              Start Learning
            </button>
          </Link>
        </div>

        {/* Recent Activity Section */}
        <section className="space-y-4">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider pl-2">Recent Topics</h4>
          
          {/* Recent Item Card */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white flex justify-between items-center hover:bg-white/80 transition-colors cursor-pointer">
             <div>
               <h5 className="font-bold text-slate-700 text-lg">Fractions & Decimals</h5>
               <p className="text-sm text-slate-500 font-medium">Class 6 • Math</p>
             </div>
             <span className="text-blue-600 font-bold bg-blue-100 px-4 py-2 rounded-xl text-sm shadow-sm">
               Review
             </span>
          </div>

          {/* Another Recent Item */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white flex justify-between items-center hover:bg-white/80 transition-colors cursor-pointer">
             <div>
               <h5 className="font-bold text-slate-700 text-lg">Photosynthesis</h5>
               <p className="text-sm text-slate-500 font-medium">Class 6 • Science</p>
             </div>
             <span className="text-blue-600 font-bold bg-blue-100 px-4 py-2 rounded-xl text-sm shadow-sm">
               Review
             </span>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;