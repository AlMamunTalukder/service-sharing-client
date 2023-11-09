/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    serviceDescription,
    serviceProviderName,
    serviceProviderImage,
    servicePrice,
  } = service;
  return (
    <div className=" -ml-11 md:ml-auto lg:ml-auto">
      <div className="card card-side bg-base-100 shadow-xl  lg:h-72 ">
        <figure className=" ">
          <img src={serviceImage} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-200">{serviceName}</h2>
          <p className="text-sm">{serviceDescription}</p>
          <p className="text-xl text-orange-500 text-left">
            Price: ${servicePrice}
          </p>
          <div className="  flex-grow">
            <div className="flex items-center space-x-2">
              <img
                src={serviceProviderImage}
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
              />
              <div className="">
                <h2 className="text-sm font-semibold ">
                  {serviceProviderName}
                </h2>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/viewDetails/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
