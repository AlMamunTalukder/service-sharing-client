import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://service-sharing-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const displayedServices = services.slice(0, 4);

  return (
    <div className="m-8 ">
      <div className="text-center mx-12">
        <h3 className="text-5xl text-orange-600 mb-8 underline">
          Popular Services
        </h3>
        {/* <p>{services.length}</p> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {displayedServices.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="card-actions justify-center my-8">
          <Link to="/allServices">
            <button className="btn btn-primary">Show All Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
