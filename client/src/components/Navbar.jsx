import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4">
      <nav className="bg-violet-600 text-white p-4 flex justify-between items-center rounded-full shadow-lg max-w-6xl mx-auto">
        <h1 className="text-2xl font-extrabold tracking-tight pl-4">
          🧠 BrainBuddy
        </h1>
        <div className="space-x-2 pr-2">
          <Link 
            to="/" 
            className="px-4 py-2 hover:bg-violet-500 rounded-full transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className="px-4 py-2 hover:bg-violet-500 rounded-full transition-colors font-medium"
          >
            Dashboard
          </Link>
          <Link 
            to="/login" 
            className="px-6 py-2 bg-yellow-400 text-violet-900 font-bold hover:bg-yellow-300 rounded-full transition-transform hover:scale-105 shadow-sm"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;