import { useNavigate } from "react-router-dom";
import Destinations from "./Destinations";

const Home = () => {
	  const navigate = useNavigate();

    const handleSearch = () =>{
      navigate("/destinations");
    }

    return(
     
      <div className=" justify-start py-4 px-4 flex flex-col gap-2 items-center">
        
        <h1 className="text-3xl font-bold text-center text-blue-300 mb-4">Find Your Next Adventure</h1>
        <div className="flex flex-wrap items-center bg-white rounded-xl shadow-md border border-gray-300 border-2 border-l-8 overflow-hidden mx-w-6xl w-full px-4">  
          <input type="text" placeholder="Origin" className="flex-1 px-4 py-2 focus:outline-none text-sm text-gray-600"/>
          <input type="text" placeholder="Destination" className="flex-1 px-4 py-2 focus:outline-none text-sm border-l border-blue-700 text-gray-600" />
          <input type="date" className="flex-1 px-4 py-2 focus:outline-none text-sm border-l border-blue-700 text-gray-600" />
          <button className="bg-green-500 text-white font-semibold px-5 py-2 text-sm rounded-xl ml-2 hover:bg-blue-800 transition-all" onClick={handleSearch}>Search</button>
        </div>

        <div
          style={{
          backgroundImage: "url('/travelagency.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh"
          }}
          className="flex justify-start py-12 px-4 flex-col gap-2 items-center w-full mt-3"
        >
        </div>

        <div >
          <h2 className="text-3xl font-bold text-center text-blue-300 mb-6 mt-6">Popular Destinations</h2>
          <Destinations />
          
        </div>
        
      </div>
     

   
    )
	};
	 
export default Home;
