import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Tools", path: "/tools" },
    { name: "Career", path: "/career" },
    { name: "About Us", path: "/about" },
  ];

  // SEARCH FILTER
  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 bg-[#81864A]  shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-white whitespace-nowrap"
        >
          Saga Manufacturers & Tools
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition ${
                isActive(item.path)
                  ? "text-white border-b-2 border-white"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* SEARCH */}
        <div className="relative hidden md:block">

          <div className="flex items-center bg-white rounded-lg px-3 py-2 w-64">

            <FaSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 outline-none text-sm"
            />

          </div>

          {/* SEARCH RESULTS */}
          {search && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50">

              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSearch("")}
                    className="block px-4 py-3 text-sm hover:bg-gray-100 text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-gray-500">
                  No data found
                </p>
              )}

            </div>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* LOGIN */}
          <Link
            to="/login"
            className="hidden sm:block bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition"
          >
            Login
          </Link>

          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-2xl text-white"
          >
            <FaBars />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/40">

          {/* BACKDROP */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0"
          />

          {/* SIDEBAR */}
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-[#81864A] p-5 flex flex-col">

            {/* TOP */}
            <div className="flex items-center justify-between mb-6">

              <h1 className="text-lg font-bold text-white">
                Saga Manufacturers & Tools
              </h1>

              <button onClick={() => setOpen(false)}>
                <FaTimes className="text-2xl text-white" />
              </button>

            </div>

            {/* MOBILE SEARCH */}
            <div className="mb-6">

              <div className="flex items-center bg-white rounded-lg px-3 py-2">

                <FaSearch className="text-gray-500" />

                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-2 outline-none text-sm"
                />

              </div>

              {/* MOBILE SEARCH RESULTS */}
              {search && (
                <div className="bg-white rounded-lg mt-2 overflow-hidden">

                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setSearch("");
                          setOpen(false);
                        }}
                        className="block px-4 py-3 text-sm hover:bg-gray-100 text-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm text-gray-500">
                      No data found
                    </p>
                  )}

                </div>
              )}

            </div>

            {/* NAVIGATION */}
            <nav className="flex flex-col gap-4 bg-white p-4 rounded-lg">

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    isActive(item.path)
                      ? "text-[#81864A]"
                      : "text-gray-700 hover:text-[#81864A]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* BOTTOM */}
            <div className="mt-auto">

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200 transition"
              >
                Login
              </Link>

              <p className="text-xs text-center text-white mt-4">
                © Praveen Kumar 2024
              </p>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;