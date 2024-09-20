import { NavLink } from "react-router-dom";
// Import the local rocketLogo image
import rocketLogo from "../assets/images/rocketElevators/rocketLogo.png";

export default function Navbar({ onBack }) { // Accept the onBack function as a prop
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          {/* Replace the MongoDB logo with rocketLogo */}
          <img
            alt="Rocket Elevators logo"
            className="h-20 inline"
            src={rocketLogo}
          />
        </NavLink>

        <NavLink
          className="button-custom inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to="/create" // Ensure this route exists
        >
          {/* Change the button text from "Create Employee" to "Create Agent" */}
          Create Agent
        </NavLink>

        {/* "Back" button */}
        <button
          className="button-custom inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          onClick={onBack} // Call the onBack function when clicked
        >
          Back
        </button>
      </nav>
    </div>
  );
}