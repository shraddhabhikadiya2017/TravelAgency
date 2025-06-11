import { Link } from "react-router-dom";

const destinations = [
  {
    slug: "paris",
    name: "Paris",
    image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Discover the romantic city of lights, filled with iconic landmarks and charming streets."
  },
  {
    slug: "tokyo",
    name: "Tokyo, Japan",
    image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience the bustling metropolis blending modern skyscrapers with traditional culture."
  },
  {
    slug: "new-york",
    name: "New York City, United States",
    image: "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Explore the city that never sleeps, full of iconic landmarks and vibrant neighborhoods."
  },
  {
    slug: "dubai",
    name: "Dubai, United Arab Emirates",
    image: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Enjoy luxury shopping, ultramodern architecture, and lively nightlife in this desert city."
  },
  {
    slug: "turkey",
    name: "Istanbul, Turkey",
    image: "https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Discover the rich history and unique culture where East meets West on the Bosphorus."
  },
  {
    slug: "france",
    name: "Bordeaux, Nouvelle-Aquitaine, France",
    image: "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Savor world-class wines and beautiful architecture in this historic French city."
  },
  {
    slug: "spain",
    name: "Bakio, Spain",
    image: "https://images.pexels.com/photos/32520817/pexels-photo-32520817/free-photo-of-surfer-riding-waves-at-bakio-basque-country.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Catch waves and enjoy the stunning beaches in this surfer’s paradise along the Basque coast."
  },
  {
    slug: "portugal",
    name: "Lisboa, Portugal",
    image: "https://images.pexels.com/photos/32479648/pexels-photo-32479648/free-photo-of-speedboat-adventure-on-tejo-river-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Explore the vibrant capital city with its historic trams, pastel buildings, and lively culture."
  },
  {
    slug: "new zealand",
    name: "Kokatahi, West Coast, New Zealand",
    image: "https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Immerse yourself in breathtaking nature with lush forests, rivers, and mountains."
  },
];


const Destinations = () => {
	  return (
      <div className="grid gap-4 md:grid-cols-3">
        {destinations.map(dest =>(
          <Link key={dest.slug} to={`/destinations/${dest.slug}`} className="card bg-white border-2 border-blue-300 shadow-xl">
            <figure>
              <img className="h-65 w-100" src={dest.image} alt={dest.name}/>
            </figure>

            <div className="card-body">
              <h2 className="card-title text-gray-500">{dest.name}</h2>
              <p className="text-gray-500 text-left">{dest.description}</p>
            </div>
          </Link>
        ))}
      </div>
    )
	};
	 
export default Destinations;