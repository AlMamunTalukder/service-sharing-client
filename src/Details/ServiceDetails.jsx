import { useContext } from "react";
import { AuthContext } from "./../PrivateRouter/AuthProvider";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

/* eslint-disable react/prop-types */
const ServiceDetails = () => {
  const services = useLoaderData();
  console.log(services);
  const { user } = useContext(AuthContext);
  const {
    _id,
    serviceName,
    serviceImage,
    serviceDescription,
    serviceProviderName,
    serviceProviderImage,
    servicePrice,
    serviceArea,
    providerEmail,
  } = services || {};

  //below code for send data in db
  const handlePurchaseService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.photo.value;
    const providerEmail = form.email.value;
    const userEmail = user?.email;
    const instruction = form.instruction.value;
    const servicePrice = form.price.value;
    const date = form.date.value;

    const purchase = {
      serviceName,
      serviceImage,
      providerEmail,
      userEmail,
      service_id: _id,
      date,
      servicePrice,
      instruction,
    };
    console.log(purchase);
    fetch("http://localhost:5000/purchases", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Welcome", "Service Purchase successfully", "success");
        }
      });
  };
  return (
    <div className="items-center justify-center  ">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 my-12 ml-[100px] md:ml-[200px] lg:ml-[500px] ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <a rel="" className="text-sm font-semibold">
              {serviceProviderName}
            </a>
            <span className="text-xs dark:text-gray-400">{serviceArea}</span>
          </div>
        </div>
        <div>
          <img
            src={serviceImage}
            alt=""
            className="object-cover w-full mb-4 h-28 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
          <p className="text-sm dark:text-gray-400">{serviceDescription}</p>
          <p className="text-xl text-orange-500 text-left">
            Price: ${servicePrice}
          </p>
        </div>
        <div className="  flex-grow">
          <div className="flex items-center space-x-2">
            <img
              src={serviceProviderImage}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="">
              <h2 className="text-sm font-semibold ">{serviceProviderName}</h2>
            </div>
          </div>
        </div>

        {/* modals */}

        <button
          className="btn bg-blue-500 text-white"
          onClick={() => document.getElementById(`my_modal-${_id}`).showModal()}
        >
          Book Now
        </button>
        <dialog id={`my_modal-${_id}`} className="modal">
          <div className="modal-box">
            <div method="dialog">
              {/*if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() =>
                  document.getElementById(`my_modal-${_id}`).close()
                }
              >
                ✕
              </button>
            </div>
            <div>
              <div className="">
                <div className="container mx-auto p-1 ">
                  <form
                    className="w-full max-w-lg mx-auto bg-blue-50 m-4 p-2 rounded-md h-full"
                    onSubmit={handlePurchaseService}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Service Name
                        </label>
                        <input
                          type="text"
                          id="serviceName"
                          name="serviceName"
                          className="w-full px-3 py-2 border rounded-lg text-black"
                          defaultValue={serviceName}
                          disabled
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Service Image
                        </label>
                        <input
                          type="text"
                          id="photo"
                          name="photo"
                          className="w-full px-3 py-2 border rounded-lg text-black"
                          defaultValue={serviceImage}
                          disabled
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Service Provider Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-3 py-2 border rounded-lg text-black"
                          defaultValue={providerEmail}
                          disabled
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          User Email
                        </label>
                        <input
                          type="email"
                          id="userEmail"
                          name="userEmail"
                          className="w-full px-3 py-2 border rounded-lg text-black"
                          defaultValue={user?.email}
                          disabled
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Service Taking Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className="w-full px-3 py-2 border rounded-lg"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ">
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          className="w-full px-3 py-2 border rounded-lg text-black"
                          defaultValue={"$" + servicePrice}
                          disabled
                          // readOnly
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Special Instruction
                      </label>
                      <textarea
                        type="text"
                        id="instruction"
                        name="instruction"
                        placeholder="Write Anything Like Address , Area, Customized Service Plan"
                        className="w-full px-3 py-2 border rounded-lg "
                        required
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                        onClick={() =>
                          document.getElementById(`my_modal-${_id}`).close()
                        }
                      >
                        Purchase Service
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ServiceDetails;
