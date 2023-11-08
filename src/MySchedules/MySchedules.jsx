import { Link } from "react-router-dom";
const MySchedules = () => {
  return (
    <div className="mx-20 my-32">
      <div className="flex flex-col w-full">
        <Link to="/myBookings">
          <div className="grid h-32 card bg-base-300 rounded-box place-items-center text-4xl">
            My Bookings
          </div>
        </Link>
        <div className="divider"></div>
        <Link to="/pendingWorks">
          <div className="grid h-32 card bg-base-300 rounded-box place-items-center text-4xl">
            My Pending Works
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MySchedules;
