import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input placeholder="Email" className="border p-2 block mb-2" />
        <input placeholder="Password" type="password" className="border p-2 block mb-2" />
        <button className="bg-blue-600 text-white px-4 py-2">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
