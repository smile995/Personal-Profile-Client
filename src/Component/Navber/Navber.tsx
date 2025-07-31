import { NavLink } from "react-router";

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
    <div className="navbar bg-base-100 shadow-sm px-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navberItems}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl font-bold">
          A.H.I
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navberItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="/Amir-Hamza-Ismail-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-primary rounded-full"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navber;
