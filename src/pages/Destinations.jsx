import { Link } from "react-router-dom";

const destinations = [
  {slug: "paris", name:"Paris", image: "https://source.unsplash.com/400x300/?tokyo"},
  {slug: "tokyo", name: "Tokyo", image: "https://source.unsplash.com/400x300/?tokyo"},
  {slug: "new-york", name:"New York", image: "https://source.unsplash.com/400x300/?newyork"},
];

const Destinations = () => {
	  return (
      <div className="grid gap-4 md:grid-cols-3">
        {destinations.map(dest =>(
          <Link key={dest.slug} to={`/destinations/${dest.slug}`} className="card bg-white border-2 border-blue-300 shadow-xl">
            <figure>
              <img src={dest.image} alt={dest.name}/>
            </figure>

            <div className="card-body">
              <h2 className="card-title text-gray-500">{dest.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    )
	};
	 
export default Destinations;