
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link, NavLink} from "react-router-dom";
import { LuFiles } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";
import { BiPen } from "react-icons/bi";
import { RiHome5Line } from "react-icons/ri";
import { LuUserSquare } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";

const Navbar = () => {


  // Menu Item Creation
  const menuItem = (
    <div className="font-medium md:w-[220px] w-[100px] mx-auto lg:flex flex-col gap-6 text-left">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
       <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 hover:text-white hover:bg-cyan-500 rounded-md"><RiHome5Line className="md:text-base text-xl md:w-1/3 text-center"></RiHome5Line> <span className="md:text-base text-sm md:w-2/3 text-left">HOME</span>
</li>
      </NavLink>

      <NavLink
        to="/experience"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 hover:text-white hover:bg-cyan-500 rounded-md"><LuFiles className="md:text-base text-xl  text-center"></LuFiles> <span className="md:text-base  text-sm md:w-2/3 text-left">EXPERIENCE</span>
</li>
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li  className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 hover:text-white hover:bg-cyan-500 rounded-md"><SlBriefcase  className="md:text-base text-xl  text-center"></SlBriefcase > <span className="md:text-base  text-sm md:w-2/3 text-left">PROJECTS</span>
</li>
      </NavLink>

      <NavLink
        to="/education"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li  className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 hover:text-white hover:bg-cyan-500 rounded-md"><MdCastForEducation  className="md:text-base text-xl  text-center"></MdCastForEducation> <span className="md:text-base  text-sm md:w-2/3 text-left">EDUCATION</span>
</li>
      </NavLink>

      <NavLink
        to="/skills"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 hover:text-white hover:bg-cyan-500 rounded-md"><BiPen   className="md:text-base text-xl  text-center"></BiPen  > <span className="md:text-base  text-sm md:w-2/3 text-left">SKILLS</span>
</li>
      </NavLink>
      
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " rounded-md text-white bg-cyan-500 "
            : "text-cyan-400 "
        }
      >
        <li className="flex md:w-full items-center justify-center md:border-[1px] border-0  border-cyan-400 gap-2 transition-all md:px-2 px-[5px] py-2 md:py-3 duration-500 hover:text-white hover:bg-cyan-500 rounded-md"><LuUserSquare  className="md:text-base text-xl  text-center"></LuUserSquare > <span className="md:text-base  text-sm md:w-2/3 text-left">CONTACT</span>
</li>
      </NavLink>
      
    </div>
  );
  // console.log(user);
  return (
    <div className="bg-gray-800 h-[100vh] grid grid-rows-4 justify-center py-4">
      <div className="row-span-1 flex items-center justify-center">
      <Link to='/'>
        {/* <img className="w-20" src="/vite.svg"></img> */}
        <h1 className="font-bold text-transparent lg:text-4xl text-xl bg-clip-text bg-gradient-to-r from-white to-cyan-600">AH SCRIPT</h1>
        </Link>
      </div>
      <div className="row-span-3">
        {menuItem}
      </div>
    </div>
  );
};

export default Navbar;
