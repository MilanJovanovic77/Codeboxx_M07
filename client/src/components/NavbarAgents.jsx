
import { NavLink } from "react-router-dom";
import rocketLogo from "../assets/images/rocketElevators/rocketLogo.png"; // Adjust the path if necessary

export default function NavbarAgents({ onBack }) { 
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img
            alt="Rocket Elevators logo"
            className="h-20 inline"
            src={rocketLogo}
          />
        </NavLink>

        <NavLink
          className="button-custom inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to="/agents" // Add this to navigate to the agents page
        >
          Agents List
        </NavLink>

        <button
          className="button-custom inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          onClick={onBack} 
        >
          Back
        </button>
      </nav>
    </div>
  );
}
