	import { Routes, Route } from "react-router-dom";
  import MainLayout from "./layouts/MainLayout.jsx";
  import Home from "./pages/Home.jsx";
  import About from "./pages/About.jsx";
  import Contact from "./pages/Contact.jsx";
  import Destinations from "./pages/Destinations.jsx";
  import DestinationDetail from "./pages/DestinationDetail.jsx";
  
  
  const App = () => {
	  return(
      
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
          </Route>
        </Routes>
     
    );
	};
	 
export default App;