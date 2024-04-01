import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const Root = () => {
  return (
    <div className="flex">
      <div className="md:w-[18%] w-[15%]  bg-gray-800 relative">
        {/* <div className="flex justify-center ">
          <button className="absolute flex justify-center items-center cursor-pointer">
            <input
              className="absolute cursor-pointer"
              type="checkbox"
              id="hamburger"
            />
            <HiMenuAlt2 className="text-3xl" />
          </button>
        </div> */}
        <Header></Header>
      </div>

      <div className="md:w-[82%] w-[85%]">
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

export default Root;
