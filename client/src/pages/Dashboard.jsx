import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="p-4 sm:p-10 max-w-6xl mx-auto mt-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-[2rem] p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Welcome Back, Rohan! 🎒</h2>
            <p className="text-violet-100 font-medium text-lg">You have 5 free topics left this month.</p>
          </div>
          <Link to="/generate">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-violet-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 whitespace-nowrap">
              + New Topic
            </button>
          </Link>
        </div>

        {/* Dashboard Content Grid */}
        <h3 className="text-2xl font-bold text-slate-800 mb-6 pl-2">Your Recent Studies 📖</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Card 1 */}
          <div className="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Science</span>
            <h4 className="text-xl font-bold text-slate-800 mt-4 mb-2">Photosynthesis</h4>
            <p className="text-slate-500 font-medium text-sm mb-4">Learned how plants make food using sunlight.</p>
            <button className="text-violet-600 font-bold hover:underline text-sm">Review Notes →</button>
          </div>

          {/* Placeholder Card 2 */}
          <div className="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Math</span>
            <h4 className="text-xl font-bold text-slate-800 mt-4 mb-2">Fractions</h4>
            <p className="text-slate-500 font-medium text-sm mb-4">Understanding numerators and denominators.</p>
            <button className="text-violet-600 font-bold hover:underline text-sm">Review Notes →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;