import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-6">Welcome Back 👋</h2>
        <Link to="/generate">
          <button className="bg-green-600 text-white px-6 py-3 rounded">
            Generate New Topic
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
