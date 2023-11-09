import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../PrivateRouter/AuthProvider";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
import swal from "sweetalert";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [cartData, setCartData] = useState([]);
  console.log(cartData);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = cartData.filter((item) => item._id !== _id);
            setCartData(remaining); //this line for delete
          });
      }
    });
  };
  const handleUpdateService = (e, _id) => {
    // e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.photo.value;
    const serviceDescription = form.serviceDescription.value;
    const servicePrice = form.price.value;

    const purchase = {
      serviceName,
      serviceImage,
      servicePrice,
      serviceDescription,
    };
    console.log(purchase);
    fetch(`http://localhost:5000/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal("Welcome", "Service Update successfully", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Error", "Service Update failed", "error");
      });
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 my-8 ml-32">
        {cartData.map((item) => (
          <div
            className=" max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50"
            key={item.id}
          >
            <img
              src={item?.serviceImage}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                {item?.date}
              </span>
              <h2 className="text-xl font-semibold tracki">
                {item?.serviceName}
              </h2>
            </div>
            <p className="dark:text-gray-100">Price: {item?.servicePrice}</p>
            <p className="dark:text-gray-100 mb-4">
              Description: {item?.serviceDescription}
            </p>
            <div className="text-center ">
              {/* update button here */}

              <button
                className="btn bg-blue-500 text-white mr-5"
                onClick={() =>
                  document.getElementById(`my_modal-${item._id}`).showModal()
                }
              >
                Edit
              </button>

              <dialog id={`my_modal-${item._id}`} className="modal">
                <div className="modal-box">
                  <div method="dialog">
                    {/*if there is a button in form, it will close the modal */}
                    <button
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={() =>
                        document.getElementById(`my_modal-${item._id}`).close()
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
                          onSubmit={(e) => {
                            e.preventDefault();
                            console.log("hellow");
                            handleUpdateService(e, item?._id);
                          }}
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
                                defaultValue={item?.serviceName}
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
                                defaultValue={item?.serviceImage}
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
                                defaultValue={item?.servicePrice}

                                // readOnly
                              />
                            </div>
                          </div>

                          <div className="">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Service Description
                            </label>
                            <textarea
                              type="text"
                              id="serviceDescription"
                              name="serviceDescription"
                              placeholder="Write Anything Like Address , Area, Customized Service Plan"
                              className="w-full px-3 py-2 border rounded-lg "
                              defaultValue={item?.serviceDescription}
                            />
                          </div>

                          <div className="mt-4">
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg"
                              onClick={() =>
                                document
                                  .getElementById(`my_modal-${item._id}`)
                                  .close()
                              }
                            >
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>

              {/* Delete Button here */}
              <button
                className="btn btn-error"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
