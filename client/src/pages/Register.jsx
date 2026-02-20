import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", classLevel: "5",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4 my-8">
        <div className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-xl border border-slate-100 w-full max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Join BrainBuddy 🚀</h2>
            <p className="text-slate-500 mt-2 font-medium">Create an account for your student.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Student Name</label>
                <input type="text" name="name" placeholder="Rohan" value={formData.name} onChange={handleChange} className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700" required />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Class Level</label>
                <select name="classLevel" value={formData.classLevel} onChange={handleChange} className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700 cursor-pointer">
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Parent Email</label>
              <input type="email" name="email" placeholder="parent@email.com" value={formData.email} onChange={handleChange} className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700" required />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 pl-2">Password</label>
              <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className="w-full border-2 border-slate-200 bg-slate-50 p-4 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all font-medium text-slate-700" required />
            </div>

            <button type="submit" className="w-full bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-6 py-4 rounded-2xl shadow-[0_4px_0_rgb(124,58,237)] hover:shadow-[0_2px_0_rgb(124,58,237)] hover:translate-y-[2px] transition-all mt-4">
              Create Account
            </button>
          </form>
          
          <p className="text-center text-slate-500 font-medium mt-6">
            Already have an account? <Link to="/login" className="text-violet-600 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;