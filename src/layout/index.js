import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full rounded-lg">{children}</div>
    </div>
  );
};

export default Layout;
