import { NavLink } from "react-router-dom";
// Import the local rocketLogo image
import rocketLogo from "../assets/images/rocketElevators/rocketLogo.png";

export default function Navbar() {
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
          className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to="/create"
        >
          {/* Change the button text from "Create Employee" to "Create Agent" */}
          Create Agent
        </NavLink>
          {/* "Back" button */}
         <NavLink
            className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
            to="/"
          >
            Back
          </NavLink>
      </nav>
    </div>
  );
}