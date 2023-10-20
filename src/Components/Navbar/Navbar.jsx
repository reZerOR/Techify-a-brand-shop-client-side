import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/Provider";
import profile from "../../assets/user.png";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(authContext);
  console.log(user);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogOut = () => {
    logOut().then().catch();
    setUser(null);
  };
  const links = (
    <>
      <li className="hover:text-white">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addproduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/mycart"}>My Cart</NavLink>
      </li>
      <li>
        <button onClick={handleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto navbar dark:bg-slate-800 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl">Festiva</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-1">
        {user ? (
          <>
            <h2>{user.displayName}</h2>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL ? user.photoURL : profile} />
              </div>
            </label>
            <a
              onClick={handleLogOut}
              className="btn dark:btn-error dark:btn-outline btn-neutral btn-outline"
            >
              Sign Out
            </a>
          </>
        ) : (
          <>
            <button className="btn dark:btn-info dark:btn-outline btn-neutral btn-outline">
              <NavLink to={"/login"}>Login</NavLink>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
