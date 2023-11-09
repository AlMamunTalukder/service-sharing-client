import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "./../../PrivateRouter/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const serviceName = form.sName.value;
    const serviceProviderName = form.sPName.value;
    const providerEmail = form.sPEmail.value;
    const servicePrice = form.price.value;
    const serviceArea = form.serviceArea.value;
    const serviceImage = form.photo.value;
    const serviceDescription = form.description.value;
    const serviceProviderImage = user?.photoURL;

    const newServices = {
      serviceImage,
      serviceName,
      serviceDescription,
      serviceProviderName,
      serviceProviderImage,
      servicePrice,
      serviceArea,
      providerEmail,
    };
    console.log(newServices);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newServices),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Welcome", "Service Added Successfully", "success");
        }
      });
  };

  return (
    <div>
      <div className="">
        <div className="container mx-auto p-4 ">
          <form
            className="w-full max-w-lg mx-auto bg-blue-50 m-5 p-5"
            onSubmit={handleAddService}
          >
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
                  Service Provider Name
                </label>
                <input
                  type="text"
                  id="sPName"
                  name="sPName"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Service Provider Email
                </label>
                <input
                  type="email"
                  id="sPEmail"
                  name="sPEmail"
                  defaultValue={user?.email}
                  className="w-full px-3 py-2 border rounded-lg"
                  readOnly
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
                  Service Image
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
  );
};

export default AddServices;
