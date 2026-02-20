import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-xl border border-slate-100 w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Welcome Back! 👋</h2>
            <p className="text-slate-500 mt-2 font-medium">Ready to learn something new?</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Email</label>
              <input 
                type="email" 
                placeholder="parent@email.com" 
                className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700" 
              />
            </div>

            <button className="w-full bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-6 py-4 rounded-2xl shadow-[0_4px_0_rgb(124,58,237)] hover:shadow-[0_2px_0_rgb(124,58,237)] hover:translate-y-[2px] transition-all mt-4">
              Login to BrainBuddy
            </button>
          </form>

          <p className="text-center text-slate-500 font-medium mt-6">
            Don't have an account? <Link to="/register" className="text-violet-600 font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;