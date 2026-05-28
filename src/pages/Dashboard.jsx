import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBox, FaPlus, FaEnvelope, FaHome, FaBars } from "react-icons/fa";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* SIDEBAR */}
      <aside
        className={`bg-white dark:bg-gray-800 w-64 p-5 space-y-6 fixed lg:static z-50 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold text-purple-600">
          Vendor Panel
        </h2>

        <nav className="space-y-3">

          <Link to="/dashboard/dashboardhome" className="flex items-center gap-2">
            <FaHome /> Home
          </Link>

          <Link to="/dashboard/add-product" className="flex items-center gap-2">
            <FaPlus /> Add Product
          </Link>

          <Link to="/dashboard/products" className="flex items-center gap-2">
            <FaBox /> Products
          </Link>

          <Link to="/dashboard/enquiries" className="flex items-center gap-2">
            <FaEnvelope /> Enquiries
          </Link>

        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 lg:ml-64">

        {/* TOP BAR */}
        <div className="bg-white dark:bg-gray-800 p-4 flex justify-between lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <FaBars />
          </button>

          <h1 className="font-bold">Dashboard</h1>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;