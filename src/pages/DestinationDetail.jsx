import { useParams } from "react-router-dom";


const destinationData = {
  paris: {
    name: "Paris",
    description: "Explore the remantic city of lights.",
    image: "https://source.unsplash.com/800x600/?paris",
  },
  tokyo:{
    name: "Tokyo",
    description: "Experience the vibrant life of Tokyo.",
    image: "https://source.unsplash.com/800x600/?tokyo",
  },
  'new-york':{
    name: "New-York",
    description: "Discover the city that never sleeps",
    image: "https://source.unsplash.com/800x600/?newyork",
  }
};

const DestinationDetail = () =>{
  const { slug } = useParams();
  const destination = destinationData[slug];

  if(!destination){
    return
    <p>Destination not found.</p>
  }

  return(
    <div className="max-w-4xl mx-auto ">
      <h2 className="text-4xl font-bold mb-4 text-gray-500">{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className="rounded-xl mb-4 "/>
      <p className="text-gray-500">{destination.description}</p>
    </div>
  );
}
	 
export default DestinationDetail;
	 
