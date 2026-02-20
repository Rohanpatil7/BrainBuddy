import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    /* 1. Added a soft diagonal gradient (from-blue-50 via-white to-emerald-50)
      2. relative and overflow-hidden keep the background blobs from breaking the layout
    */
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 pb-10 relative overflow-hidden">
      
      {/* Decorative background blobs (Soft, blurry colored circles) */}
      <div className="absolute top-20 -left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute top-40 -right-10 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      {/* Navbar sits on top of the background */}
     <div className="relative z-50">
      <Navbar />
    </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-md mx-auto p-6 mt-8 flex flex-col items-center text-center space-y-6">
        
        {/* Tagline Badge with a slight glassmorphism effect (backdrop-blur) */}
        <div className="bg-white/60 backdrop-blur-md text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm border border-blue-100">
          For Classes 5–8
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-800 leading-tight">
          Your Smart <br/>
          {/* Gradient text for the main highlight */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            Homework Helper
          </span>
        </h1>
        
        <p className="text-slate-600 text-base leading-relaxed px-4 font-medium">
          Learn faster with AI summaries and fun quizzes designed specially for middle schoolers.
        </p>

        <Link to="/register" className="w-full mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-transform active:scale-95">
            Get Started for Free
          </button>
        </Link>
        
        <p className="text-sm text-slate-500 font-medium">Parents, track progress easily!</p>
      </main>
    </div>
  );
};

export default Home;