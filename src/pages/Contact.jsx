const Contact = () => {
	  return (
     
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 mt-10 text-blue-300 text-center">Contact Us</h2>
          <form className="flex flex-col gap-4 border-2 border-blue-300 rounded-2xl mb-10 ">
            <label className="text-black text-l mt-5  ml-4">First Name</label>
            <input type="text" placeholder="First Name" className="border border-blue-300 text-gray-600 py-1 rounded-b-md ml-4 -mt-0.5 mr-4 px-2"/>

            <label className="text-black text-l -mt-0.5 ml-4">Last Name</label>
            <input type="text" placeholder="Last Name" className="border border-blue-300 text-gray-600 py-1 rounded-b-md ml-4 -mt-0.5 mr-4 px-2"/>

            <label className="text-black text-l -mt-0.5 ml-4">Email</label>
            <input type="email" placeholder="Email" className="border border-blue-300 text-gray-600 py-1 rounded-b-md ml-4 -mt-0.5 mr-4 px-2"/>
            
            <label className="text-black text-l -mt-0.5 ml-4">Message</label>
            <textarea placeholder="Message" className="border border-blue-300 text-gray-600 py-1 rounded-b-md ml-4 -mt-0.5 mr-4 px-2"></textarea>
           
            <button className="btn btn-primary text-xl ml-4 mr-4 mb-4">Send</button>
          </form>
        </div>
     
    )
	};
	 
export default Contact;