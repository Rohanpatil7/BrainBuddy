import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Import our hook

const Register = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", classLevel: "5",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth(); // Grab the register function
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await register({
      ...formData,
      classLevel: Number(formData.classLevel) // Backend expects a number
    });

    if (result.success) {
      navigate("/dashboard"); // Boom! Redirect to dashboard on success
    } else {
      setError(result.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* ... keeping your exact decorative blobs and Navbar here ... */}
      <div className="absolute top-20 right-0 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="relative z-50">
          <Navbar />
        </div>

      <main className="relative z-10 max-w-md mx-auto p-6 mt-4 pb-12">
        <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Join the Fun! 🌟</h2>
            <p className="text-slate-500 font-medium mt-2">Create your BrainBuddy account.</p>
          </div>

          {/* Show Error Message if exists */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold mb-4 text-center border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* ... keeping your exact inputs here ... */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-600 ml-1">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 font-medium" required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-600 ml-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 font-medium" required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-600 ml-1">Class</label>
              <select name="classLevel" value={formData.classLevel} onChange={handleChange} className="w-full bg-white/50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 font-medium appearance-none">
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-600 ml-1">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full bg-white/50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 font-medium" required />
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg mt-4 transition-transform active:scale-95">
              {isLoading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm font-medium text-slate-500">
            Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;