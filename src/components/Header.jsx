import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isLoggedIn = !!token;

  // ✅ IMPORTANT FIX HERE
  const isAdmin = role === "ROLE_ADMIN";

  const isActive = (path) => location.pathname === path;

  // ❌ DO NOT include Dashboard here
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Tools", path: "/tools" },
    { name: "Career", path: "/career" },
    { name: "About Us", path: "/about" },
  ];

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigate = (path) => {
    setSearch("");
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#81864A] shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-white whitespace-nowrap">
          Saga{" "}
          <span className="text-xs sm:text-sm text-gray-300 ml-1">
            Manufacturers & Engineering
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 flex-wrap">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium whitespace-nowrap transition ${
                isActive(item.path)
                  ? "text-white border-b-2 border-white"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* ✅ DASHBOARD ONLY FOR ADMIN */}
          {isLoggedIn && isAdmin && (
            <Link
              to="/dashboard/dashboardhome"
              className={`text-sm font-bold whitespace-nowrap ${
                location.pathname.includes("/dashboard")
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "text-yellow-200 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
          )}

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

          {search && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg z-50">

              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <p className="px-4 py-2 text-sm text-gray-500">
                  No data found
                </p>
              )}

            </div>
          )}

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {!isLoggedIn && (
            <Link
              to="/login"
              className="hidden sm:block bg-white text-black px-3 py-1 rounded-lg text-sm font-bold hover:bg-gray-200"
            >
              Login
            </Link>
          )}

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

          <div onClick={() => setOpen(false)} className="absolute inset-0" />

          <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-[#81864A] p-5 flex flex-col">

            {/* TOP */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-lg font-bold text-white">
                Saga{" "}
                <span className="text-sm text-gray-300 ml-1">
                  Engineering
                </span>
              </h1>

              <button onClick={() => setOpen(false)}>
                <FaTimes className="text-2xl text-white" />
              </button>
            </div>

            {/* SEARCH */}
            <div className="mb-6">

              <div className="flex items-center bg-white rounded-lg px-3 py-2">
                <FaSearch className="text-gray-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-2 text-sm outline-none"
                />
              </div>

            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-3 bg-white p-3 rounded-lg">

              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`text-left text-sm ${
                    isActive(item.path)
                      ? "text-[#81864A] font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* ✅ DASHBOARD MOBILE */}
              {isLoggedIn && isAdmin && (
                <button
                  onClick={() =>
                    handleNavigate("/dashboard/dashboardhome")
                  }
                  className="text-left text-sm font-bold text-yellow-600"
                >
                  Dashboard
                </button>
              )}

            </nav>

            {/* FOOTER */}
            <div className="mt-auto text-center">

              {!isLoggedIn && (
                <Link
                  to="/login"
                  className="block bg-white text-black py-2 rounded-lg font-bold"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              )}

              <p className="text-xs text-white mt-4">
                © Developed By{" "}
                <a
                  href="https://praveenwebpage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-yellow-300"
                >
                  Praveen Kumar M S
                </a>
              </p>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;