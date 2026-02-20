import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* ... keeping your exact decorative blobs and Navbar here ... */}
      <div className="absolute top-10 -left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 -right-10 w-56 h-56 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="relative z-50">
        <Navbar />
      </div>

      <main className="relative z-10 max-w-md mx-auto p-6 mt-6">
        <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Welcome Back! 🎒</h2>
            <p className="text-slate-500 font-medium mt-2">Let's continue learning together.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold mb-4 text-center border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-600 ml-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 font-medium" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-600 ml-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-blue-500 font-medium" required />
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg mt-4 transition-transform active:scale-95">
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm font-medium text-slate-500">
            Don't have an account? <Link to="/register" className="text-blue-600 font-bold hover:underline">Sign up here</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;