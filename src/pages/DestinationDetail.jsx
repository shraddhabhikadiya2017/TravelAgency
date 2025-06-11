import { useParams } from "react-router-dom";


const destinationData = {
  paris: {
    name: "Paris",
    description: "Discover the romantic city of lights, filled with iconic landmarks and charming streets.",
    image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  tokyo:{
    name: "Tokyo, Japan",
    description: "Experience the bustling metropolis blending modern skyscrapers with traditional culture.",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  'new-york':{
    name: "New York City, United States",
    description: "Explore the city that never sleeps, full of iconic landmarks and vibrant neighborhoods.",
    image: "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  'dubai':{
    name: "Dubai, United Arab Emirates",
    description: "Enjoy luxury shopping, ultramodern architecture, and lively nightlife in this desert city.",
    image: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  'turkey':{
    name: "Istanbul, Turkey",
    description: "Discover the rich history and unique culture where East meets West on the Bosphorus.",
    image: "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  'france':{
    name: "Bordeaux, Nouvelle-Aquitaine, France",
    description: "Savor world-class wines and beautiful architecture in this historic French city.",
    image: "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  'spain':{
    name: "Bakio, Spain",
    description: "Catch waves and enjoy the stunning beaches in this surfer’s paradise along the Basque coast.",
    image: "https://images.pexels.com/photos/32520817/pexels-photo-32520817/free-photo-of-surfer-riding-waves-at-bakio-basque-country.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  'portugal':{
    name: "Lisboa, Portugal",
    description: "Explore the vibrant capital city with its historic trams, pastel buildings, and lively culture.",
    image: "https://images.pexels.com/photos/32479648/pexels-photo-32479648/free-photo-of-speedboat-adventure-on-tejo-river-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  'new zealand':{
    name: "Kokatahi, West Coast, New Zealand",
    description: "Immerse yourself in breathtaking nature with lush forests, rivers, and mountains.",
    image: "https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
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
      <h2 className="text-4xl text-center font-bold mb-4 text-gray-500">{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className="rounded-xl mb-4 item-center ml-5  "/>
      <p className="text-gray-500 text-left ml-6">{destination.description}</p>
    </div>
  );
}
	 
export default DestinationDetail;
	 
