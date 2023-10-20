import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
