import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tools", path: "/tools" },
    { name: "Skills", path: "/skills" },
    { name: "Futures", path: "/futures" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-purple-700 dark:text-white">
          Arun Sakthi
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition ${
                isActive(item.path)
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-600 dark:text-gray-300 hover:text-purple-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search tools..."
              className="bg-transparent outline-none px-2 text-sm text-gray-700 dark:text-white"
            />
          </div>

          {/* USER ICON (future admin/vendor panel) */}
          <button className="text-gray-600 dark:text-white text-xl">
            <FaUserCircle />
          </button>

          {/* LOGIN BUTTON */}
          <Link
            to="/login"
            className="hidden sm:block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
          >
            Vendor Login
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-2xl text-gray-700 dark:text-white"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/50 flex">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black-500 bg-blur-sm "
          />

          {/* SIDEBAR */}
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-gray-100 dark:bg-gray-900 p-5 flex flex-col">

            {/* TOP */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-lg font-bold text-purple-700 dark:text-white">
                Arun Sakthi
              </h1>

              <button onClick={() => setOpen(false)}>
                <FaTimes className="text-2xl text-gray-600 dark:text-white" />
              </button>
            </div>

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg mb-6">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search tools..."
                className="bg-transparent outline-none px-2 w-full text-sm text-gray-700 dark:text-white"
              />
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col gap-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    isActive(item.path)
                      ? "text-purple-700"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* BOTTOM ACTIONS */}
            <div className="mt-auto space-y-3">

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center bg-purple-600 text-white py-2 rounded-lg"
              >
                Vendor Login
              </Link>

              <p className="text-xs text-center text-gray-400">
                SaaS Portfolio © Praveen Kumar @ 2024
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;