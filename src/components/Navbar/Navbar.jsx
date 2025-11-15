// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BiPen } from "react-icons/bi";
import { LuFiles, LuUserSquare } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Menu Item Creation
  const menuItem = (
    <div className="font-medium md:w-[150px] w-[100px] mx-auto lg:flex flex-col gap-6 text-left">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "rounded-md text-white md:bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 md:hover:text-white md:hover:bg-cyan-500 rounded-md">
          <RiHome5Line className="md:text-base text-xl  text-center"></RiHome5Line>{" "}
          <span className="md:text-base  text-sm md:w-2/3 text-left hidden md:block">
            HOME
          </span>
        </li>
      </NavLink>
      <NavLink
        to="/experience"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "rounded-md text-white md:bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 md:hover:text-white md:hover:bg-cyan-500 rounded-md">
          <LuFiles className="md:text-base text-xl  text-center"></LuFiles>{" "}
          <span className="md:text-base  text-sm md:w-2/3 text-left hidden md:block">
            EXPERIENCE
          </span>
        </li>
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white md:bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 md:hover:text-white md:hover:bg-cyan-500 rounded-md">
          <SlBriefcase className="md:text-base text-xl  text-center"></SlBriefcase>{" "}
          <span className="md:text-base  text-sm md:w-2/3 text-left hidden md:block">
            PROJECTS
          </span>
        </li>
      </NavLink>

      <NavLink
        to="/education"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "rounded-md text-white md:bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 md:hover:text-white md:hover:bg-cyan-500 rounded-md">
          <MdCastForEducation className="md:text-base text-xl  text-center"></MdCastForEducation>{" "}
          <span className="md:text-base  text-sm md:w-2/3 text-left hidden md:block">
            EDUCATION
          </span>
        </li>
      </NavLink>

      <NavLink
        to="/skills"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "rounded-md text-white md:bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 md:hover:text-white md:hover:bg-cyan-500 rounded-md">
          <BiPen className="md:text-base text-xl  text-center"></BiPen>{" "}
          <span className="md:text-base  text-sm md:w-2/3 text-left hidden md:block">
            SKILLS
          </span>
        </li>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white md:bg-cyan-500  "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 md:hover:text-white md:hover:bg-cyan-500 rounded-md">
          <LuUserSquare className="md:text-base text-xl  text-center"></LuUserSquare>{" "}
          <span className="md:text-base  text-sm md:w-2/3 text-left hidden md:block">
            CONTACT
          </span>
        </li>
      </NavLink>
    </div>
  );
  // console.log(user);
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div>{menuItem}</div>
    </div>
  );
};

export default Navbar;
