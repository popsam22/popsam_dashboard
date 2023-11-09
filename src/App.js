import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DashboardContents from "./pages/dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          <Route index path="/dashboard" element={<DashboardContents />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
