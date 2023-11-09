import { FaHome} from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { FiUsers } from "react-icons/fi";

export const sidebarLinks = [
  { icon: <FaHome />, title: "Dashboard", path: "/dashboard" },
  { icon: <FiUsers />, title: "My Students", path: "/" },
  { icon: <ImStatsBars />, title: "Analytics", path: "/" },
  // { icon: <FiSettings />, title: "Settings", path: "/" },
];
