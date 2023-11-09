import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const chartOptions = {
    series: [
      {
        name: "Time Spent",
        data: [8, 6, 4, 10, 8, 4, 2, 7],
      },
    ],
    options: {
      chart: {
        id: "column-chart",
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return `${val} hours`;
          },
        },
      },
      colors: ["#BABABA"],
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      dataLabels: {
        enabled: false,
      },
    },
  };

  return (
    <div className="flex max-md:flex-col gap-12">
      <div className="w-[70%] max-md:w-full">
        <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
          <div className={`flex gap-4 items-center justify-start`}>
            <div className="w-[16px] h-[32px] rounded-sm bg-malachite"></div>
            <div>
              <p className="text-[12px] md:text-[20px] font-semibold">
                Students 
              </p>
              <p className="text-[24px] font-semibold">
                10<span className="text-silver text-[14px]">h</span> 20
                <span className="text-silver text-[14px]">m</span>
              </p>
            </div>
          </div>
          <div className="w-[80px] relative border rounded-lg">
            <select
              name="timeToggle"
              value={""}
              onChange={() => {}}
              className={`capitalize appearance-none rounded-lg placeholder:text-xs outline-none p-2 text-xs font-normal`}
            >
              {[{ name: "Weekly", value: "weekly" }]?.map((data, idx) => (
                <option key={idx} value={data.value}>
                  {data?.name}
                </option>
              ))}
            </select>
            <div
              className={`absolute inset-y-0 right-0 flex items-center px-2 top-[7px] pointer-events-none`}
            >
              <svg className="w-4 h-4 fill-[#BABABA]" viewBox="0 0 20 20">
                <path d="M10 12.5l-6-6 1.41-1.41L10 9.68l4.59-4.59L16 6.5l-6 6z"></path>
              </svg>
            </div>
          </div>
        </div>
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      </div>
      <div className="w-[30%] max-md:w-full max-md:flex-row flex flex-col gap-6">
        {/* <div className="flex items-center gap-4">
          <div className="bg-blue-100 h-[80px] w-[80px] rounded-full flex justify-center items-center">
            T
          </div>
          <div>
            <p className="text-boulder text-[12px] mb-3"> Total Students</p>
            <p className="font-semibold text-[20px]">42</p>
          </div>
        </div> */}
        <div className="flex items-center gap-4">
          <div className="bg-yellow-100 h-[80px] w-[80px] rounded-full flex justify-center items-center">
            S
          </div>
          <div>
            <p className="text-boulder text-[12px] mb-3">Submitted Application</p>
            <p className="font-semibold text-[20px]">5</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 h-[80px] w-[80px] rounded-full flex justify-center items-center">
            C
          </div>
          <div>
            <p className="text-boulder text-[12px] mb-3">Completed Application</p>
            <p className="font-semibold text-[20px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
