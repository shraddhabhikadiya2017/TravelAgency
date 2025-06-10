import { Link } from "react-router-dom";

const Navbar = () => {
	  return (
      <div className="navbar bg-blue-300 text-white">
        <div className="flex-1">
          <Link to="/" className="text-3xl font-bold px-3">Travel Agency</Link>
        </div>
        <div className="flex-none">
          <ul className="menu-horizontal gap-4 text-xl px-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
          </ul>
        </div>
      </div>
    )
	};
	 
export default Navbar;