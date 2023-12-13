import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../PrivateRouter/AuthProvider";
import SingleCart from "./SingleCart";

const MyPendingWorks = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [cartData, setCartData] = useState([]);
  console.log(cartData);
  useEffect(() => {
    fetch(`http://localhost:5000/pending-works/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 my-8 ml-32">
        {cartData.map((item) => (
          <SingleCart key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyPendingWorks;
