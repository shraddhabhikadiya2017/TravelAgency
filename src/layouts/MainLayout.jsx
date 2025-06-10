import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

const MainLayout = () => {
	  return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white p-4">
          <Outlet />
        </main>
        <Footer />
      </>
    );
	};
	 
export default MainLayout;