import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Import our auth hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // Grab user state and logout function
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/"); // Send them back to home page after logout
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="text-xl font-extrabold text-blue-600 tracking-tight">
            BrainBuddy<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          
          {/* Conditionally render based on login state */}
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
              <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">Hi, {user.name.split(' ')[0]} 👋</span>
              <button 
                onClick={handleLogout} 
                className="bg-slate-100 text-slate-600 px-5 py-2 rounded-full hover:bg-slate-200 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-100 transition-colors">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-600 focus:outline-none p-2 z-50 relative"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* Close (X) Icon */
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-4 md:hidden">
            <Link to="/" onClick={toggleMenu} className="text-lg font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">
              Home
            </Link>
            
            {user ? (
              <>
                <Link to="/dashboard" onClick={toggleMenu} className="text-lg font-bold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="text-lg font-bold text-slate-600 bg-slate-100 text-center rounded-xl py-3 mt-2 active:scale-95 transition-transform"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={toggleMenu} className="text-lg font-bold text-blue-600 bg-blue-50 text-center rounded-xl py-3 mt-2 active:scale-95 transition-transform">
                Login / Register
              </Link>
            )}
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;