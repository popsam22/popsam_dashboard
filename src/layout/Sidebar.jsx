import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "utils/data";

const Sidebar = () => {
  return (
    <div className="bg-lightGray min-h-full py-6 flex flex-col justify-between">
      <div className=" flex flex-col gap-6">
        <p className="text-[24px] font-bold px-6">Skoolbod</p>
        <div className="px-6">
          <div className="relative mb-8 max-md:mb-6">
            <input
              name="search"
              onChange={() => {}}
              type="text"
              placeholder="Search"
              className="border-silver border rounded-lg h-[50px] placeholder:text-boulder pl-10 pr-4 outline-none text-xs font-normal"
            />
            <BiSearch className="absolute top-4 left-3 w-5 h-5 text-boulder" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {sidebarLinks.map(({ icon, title, path }) => (
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center text-boulder pl-4 ${
                  isActive &&
                  "border-r-4 border-red-500 !text-black font-medium"
                }`
              }
            >
              <div className="flex items-center gap-4">
                {icon}
                <p>{title}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="px-4">
        <div className="bg-white h-[200px] rounded-lg relative flex flex-col items-center justify-end pb-8">
          <p className="text-center font-medium">
            Logout
          </p>
          <div className="absolute -bottom-[15px] right-1/2 rounded-full h-[30px] w-[30px] bg-red-500 flex justify-center items-center">
            <AiOutlineArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
