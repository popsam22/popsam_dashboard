import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const DateComp = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="cursor-pointer border-2 border-silver rounded-full flex justify-center items-center h-[25px] w-[25px]">
          <IoIosArrowBack />
        </div>
        <p className="text-[24px] max-md:text-[16px] font-semibold">
          November 2023
        </p>
        <div className="cursor-pointer border-2 border-silver rounded-full flex justify-center items-center h-[25px] w-[25px]">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="overflow-x-auto flex justify-between items-center gap-4">
        {[
          { number: 12, day: "Sat" },
          { number: 13, day: "Sun" },
          { number: 14, day: "Mon", active: true },
          { number: 15, day: "Tue" },
          { number: 16, day: "Wed" },
        ].map(({ number, day, active }, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center ${
              active && "!text-white bg-blue-700 p-2 rounded-lg"
            }`}
          >
            <p className="font-semibold">{number}</p>
            <p className={`${active ? "text-white" : "text-boulder"}`}>{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateComp;
