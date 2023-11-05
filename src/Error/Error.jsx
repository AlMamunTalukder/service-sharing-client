import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col text-center items-center justify-center h-screen ">
        <img
          src="https://i.ibb.co/qsH0FMN/undraw-Page-not-found-re-e9o6.png"
          alt=""
        />
        <h2 className="text-lg px-3">404...!! Not Found Anything</h2>
        <Link to="/">
          <a className="btn mt-4 bg-green-300 text-black">Go back to home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
