import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between pb-16 max-md:pb-10">
      <div>
        <p className="text-[40px] max-md:text-[24px] font-medium">
          Welcome Back, Samuel
        </p>
        <p className="text-boulder text-[24px] max-md:text-[14px]">
          04, November, 2023
        </p>
      </div>
      <div className="h-[50px] w-[50px] bg-lightGray rounded-lg flex justify-center items-center">
        <AiOutlineBell className="w-6 h-6 text-boulder" />
      </div>
    </div>
  );
};

export default Header;
