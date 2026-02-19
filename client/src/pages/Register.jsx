import { useState } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    classLevel: "5",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // Later we will connect this to backend
  };

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />

          <select
            name="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 w-full rounded"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
