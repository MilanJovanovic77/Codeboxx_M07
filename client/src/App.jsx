import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to go back to the previous page
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="w-full p-6">
      <Navbar onBack={handleBack} />
      <Outlet />
    </div>
  );
};

export default App;