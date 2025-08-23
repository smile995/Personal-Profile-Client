import { FaHelicopterSymbol } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import "./navber.css";
const Navber = () => {
  const navberItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/projects"}>Projects</NavLink>
      </li>
      <li>
        <NavLink to={"/skills"}>Skills</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar top-0 left-0 right-0 z-50 text-white  fixed  shadow-sm px-4 bg-gradient-to-r from-primary to-secondary ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-gray-500 dropdown-content mt-3 z-[1] p-2 shadow rounded-box font-bold w-52"
          >
            {navberItems}
          </ul>
        </div>
        <Link to="/">
          <p className=" flex text-xl items-center font-semibold gap-0.5 text-white">
            <FaHelicopterSymbol className="text-2xl" />
            amza
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-2">
          {navberItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/Amir-Hamza-Ismail-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="md:px-3 px-2 py-1  md:py-2 border border-white rounded-full cursor-pointer">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navber;
