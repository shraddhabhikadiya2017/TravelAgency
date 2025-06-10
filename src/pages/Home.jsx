import { useNavigate } from "react-router-dom";

const Home = () => {
	  const navigate = useNavigate();

    const handleSearch = () =>{
      navigate("/destinations");
    }

    return(
     
      <div className=" justify-start py-12 px-4 flex flex-col gap-2 items-center">
        
        <h1 className="text-3xl font-bold text-center text-blue-300 mb-8">Find Your Next Adventure</h1>
        <div className="flex flex-wrap items-center bg-white rounded-xl shadow-md border border-gray-300 border-2 border-l-8 overflow-hidden mx-w-6xl w-full px-4">  
          <input type="text" placeholder="Origin" className="flex-1 px-4 py-2 focus:outline-none text-sm text-gray-600"/>
          <input type="text" placeholder="Destination" className="flex-1 px-4 py-2 focus:outline-none text-sm border-l border-blue-700 text-gray-600" />
          <input type="date" className="flex-1 px-4 py-2 focus:outline-none text-sm border-l border-blue-700 text-gray-600" />
          <button className="bg-green-500 text-white font-semibold px-5 py-2 text-sm rounded-xl ml-2 hover:bg-blue-800 transition-all" onClick={handleSearch}>Search</button>
        </div>
        
      </div>
     

   
    )
	};
	 
export default Home;