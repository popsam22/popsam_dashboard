import { BiEditAlt } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="pb-8">
      <div className="flex justify-between gap-3 flex-wrap">
        <p className="text-[20px] max-md:text-[14px] font-medium">My Profile</p>
        <div className="cursor-pointer flex gap-1 items-center">
          <BiEditAlt />
          <p className="text-boulder">Edit</p>
        </div>
      </div>
      <div className="flex justify-center py-24 max-md:py-12">
        <div className="flex flex-col items-center">
          <p className="text-[20px] max-md:text-[14px] font-medium">
            Samuel Umar
          </p>
          <p className="text-[13px] max-md:text-[10px] font-light">
            @samuelumar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
