import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUsers,
  FaInfoCircle,
  FaSignInAlt,
  FaPhone,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/Photos/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Services", path: "/services", icon: <FaCogs /> },
    { name: "Projects", path: "/project", icon: <FaProjectDiagram /> },
    { name: "Team", path: "/tp1", icon: <FaUsers /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
  ];

  const handleSearch = () => {
    if (!query.trim()) return;

    const match = menuItems.find((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      navigate(match.path);
      setQuery("");
      setOpen(false);
    } else {
      alert("No page found");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <nav className="w-full h-16 sm:h-20 flex items-center px-4 sm:px-6">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 lg:gap-8 ml-8 lg:ml-12 font-medium text-[#0b2a5b] whitespace-nowrap">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition ${
                    isActive ? "text-black font-semibold" : ""
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE DESKTOP */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          
          {/* Search */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-9 pr-3 py-1.5 w-40 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2a5b] text-sm"
            />
          </div>

          {/* Login */}
          <NavLink to="/login">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white font-semibold shadow-lg hover:scale-105 transition">
              <FaSignInAlt />
              Login
            </button>
          </NavLink>

          {/* Contact */}
          <NavLink to="/contact">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white font-semibold shadow-lg hover:scale-105 transition">
              <FaPhone />
              Contact
            </button>
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto md:hidden text-2xl text-[#0b2a5b]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      

      {/* MOBILE MENU */}
    {open && (
      <div className="md:hidden absolute top-full left-0 w-full 
      bg-white border-t px-6 py-6 space-y-6 
      text-[#0b2a5b] font-medium shadow-xl">

        {/* Search */}
        <div className="flex items-center border rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full outline-none text-sm"
          />
          <FaSearch
            onClick={handleSearch}
            className="ml-2 cursor-pointer text-gray-500"
          />
        </div>

        {/* Links */}
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-lg py-2 border-b border-slate-100"
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
          >
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white text-sm font-semibold shadow-md">
              <FaSignInAlt />
              Login
            </button>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
          >
            <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white text-sm font-semibold shadow-md">
              <FaPhone />
              Contact
            </button>
          </NavLink>
        </div>

      </div>
    )}
    </header>
  );
};

export default Navbar;
