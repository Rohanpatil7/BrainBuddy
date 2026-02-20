import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      {/* Outlet is where the specific page content (Home, Login, etc.) will render */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;