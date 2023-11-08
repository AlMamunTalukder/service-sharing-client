import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../PrivateRouter/AuthProvider";
import Swal from "sweetalert2";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [cartData, setCartData] = useState([]);
  console.log(cartData);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${user?.email}`)
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
              Instruction: {item?.instruction}
            </p>
            <div className="text-center ">
              {/* update button here */}
              <button className="btn mr-2 btn-primary">Update</button>

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
