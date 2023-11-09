import Layout from "layout";
import Header from "./Header";
import Chart from "./Chart";
import Profile from "./Profile";
import DateComp from "./DateComp";

const DashboardContents = () => {
  return (
    <Layout>
      <div className="flex max-[1000px]:flex-col">
        <div className="w-[70%] max-[1000px]:w-full border-r px-6 py-8">
          <Header />
          <Chart />
        </div>
        <div className="w-[30%] max-[1000px]:w-full px-6 py-8">
          <Profile />
          <DateComp />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardContents;
