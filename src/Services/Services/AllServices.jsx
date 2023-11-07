import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const allServices = useLoaderData();
  console.log(allServices);
  return (
    <div className="m-8 ">
      <div className="text-center mx-12">
        <h3 className="text-5xl text-orange-600 mb-8 underline">
          Popular Services
        </h3>
        {/* <p>{services.length}</p> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {allServices.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
