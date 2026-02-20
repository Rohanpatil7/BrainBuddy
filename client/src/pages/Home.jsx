import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center text-center px-4 mt-20">
        <div className="bg-gradient-to-br from-sky-400 to-violet-500 p-12 rounded-[3rem] shadow-xl max-w-4xl text-white">
          <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            For Classes 5–8
          </span>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Your Super-Smart <br /> AI Homework Helper 🚀
          </h2>
          <p className="text-xl mb-10 text-sky-100 max-w-2xl mx-auto font-medium">
            Stuck on a topic? BrainBuddy gives you simple explanations, real-life examples, and fun quizzes in seconds.
          </p>
          
          <Link to="/register">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-bold text-xl px-10 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:scale-105">
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;