const About = () => {
	  return (
      
        <div>
          <h2 className="text-3xl font-bold mb-6 mt-6 text-center text-blue-300 ">About Us</h2>
          <div
          style={{
          backgroundImage: "url('/about-us-page-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh"
          }}
          className="flex justify-start py-12 px-4 flex-col gap-2 items-center w-full mt-3"
        >
        </div>

        <h2 className="text-2xl font-bold text-blue-400 text-left ml-1 mt-4 mb-1">Why us?</h2>
        <p className="text-md text-black mb-4 text-left ml-2">We’re the original responsible travel company. Founded in 2024, our customers have trusted us with their holidays for over 1 year – returning time and again. Over 12,000 reviews speak for themselves, with over 95% rated 4 or 5 stars.</p>

        <h2 className="text-2xl font-bold text-blue-400 text-left ml-1 mt-4 mb-1">Exceptional choice</h2>
        <p className="text-md text-black mb-4 text-left ml-2">With thousands of holidays spanning 180 countries – from cycling in Tanzania and hiking in the Pyrenees to over 300 small ship cruises – we offer exceptional choice and some of the best holidays on the planet.</p>
        <p className="text-md text-black mb-4 text-left ml-2">Whether you’re travelling solo, with family and friends or as a single parent, looking for a bespoke or small group adventure, we can help you find your ideal holiday.</p>

        <h2 className="text-2xl font-bold text-blue-400 text-left ml-1 mt-4 mb-1">Our holidays are more enjoyable because they do good</h2>
        <p className="text-md text-black mb-4 text-left ml-2">We’re committed to reducing the carbon emissions of our holidays – and work hard to maximize the benefits for local communities and nature. This helps connect you more deeply with both – for richer, one-of-a-kind experiences. That’s why we screen all our trips for their commitment to responsible tourism. On each holiday page, you can read about the good your trip does.</p>
        </div>  
      
    );
	};
	 
export default About;