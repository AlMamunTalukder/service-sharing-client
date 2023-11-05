const AddServices = () => {
  return (
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
  );
};

export default AddServices;
