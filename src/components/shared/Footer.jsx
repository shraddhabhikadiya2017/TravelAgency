import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white py-1">
      {/* Top Left: Travel Agency */}
      <div className="flex  gap-40 text-center md:text-center mt-0">
        <div className="mt-0">
          <h2 className="text-3xl font-bold mt-5 ml-5">Travel Agency</h2>
        </div>
      {/* Middle Center: Services & Company */}
        <div className="flex justify-center gap-40 text-center md:text-center mt-2 ml-110 ">
          {/* Services */}
          <div className="ml-20">
            <h3 className="text-lg font-semibold  mb-3">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="hover:text-blue-800">
                  Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-800">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
        {/* Bottom Center: Copyright */}
        <div className="text-center text-sm mt-3">
          <p>&copy; 2025 Travel Agency. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
