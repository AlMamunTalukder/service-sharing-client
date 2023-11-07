import { useLoaderData } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";

const Details = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <ServiceDetails service={services}></ServiceDetails>
    </div>
  );
};

export default Details;
