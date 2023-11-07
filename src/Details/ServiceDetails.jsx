/* eslint-disable react/prop-types */
const ServiceDetails = ({ service }) => {
  const {
    _id,
    serviceName,
    serviceImage,
    serviceDescription,
    serviceProviderName,
    serviceProviderImage,
    servicePrice,
    serviceArea,
  } = service || {};
  return (
    <div className="items-center justify-center ml-[500px] ">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 my-12 ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" className="text-sm font-semibold">
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
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              <div className="">
                <div className="container mx-auto p-4 ">
                  <form className="w-full max-w-lg mx-auto bg-blue-50 m-5 p-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Service Name
                        </label>
                        <input
                          type="text"
                          id="sName"
                          name="sName"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Service Area
                        </label>
                        <input
                          type="text"
                          id="serviceArea"
                          name="serviceArea"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Photo
                        </label>
                        <input
                          type="text"
                          id="photo"
                          name="photo"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                      </label>
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                      >
                        Add Service
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <button className="btn">Purchase This Service</button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ServiceDetails;
