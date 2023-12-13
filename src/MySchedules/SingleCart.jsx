/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SingleCart = ({ item }) => {
  const [workstatus, setWorkstatus] = useState(
    item.status ? item.status : "pending"
  );

  const handleStatus = (e) => {
    console.log(e.target.value);
    const status = e.target.value;
    setWorkstatus(status);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/statuschange/${item._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: workstatus }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [workstatus]);

  return (
    <div
      className=" max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50"
      key={item._id}
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
        <h2 className="text-xl font-semibold tracki">{item?.serviceName}</h2>
      </div>
      <p className="dark:text-gray-100">Price: {item?.servicePrice}</p>
      <p className="dark:text-gray-100 mb-4">
        Instruction: {item?.instruction}
      </p>

      <div className="text-center flex">
        <p className="mt-3 mx-5">Status:</p>
        <select
          className="select select-bordered join-item"
          onChange={(e) => handleStatus(e)}
          value={workstatus}
        >
          <option
            value="pending"
            selected={workstatus === "pending" ? true : false}
          >
            Pending
          </option>
          <option
            value="in Progress"
            selected={workstatus === "in Progress" ? true : false}
          >
            In Progress
          </option>
          <option
            value="complete"
            selected={workstatus === "complete" ? true : false}
          >
            Complete
          </option>
        </select>
      </div>
    </div>
  );
};

export default SingleCart;
