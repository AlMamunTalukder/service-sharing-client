import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div>
      <div className="card lg:card-side bg-gray-200 shadow-xl mx-32 mb-20 mt-20 border-2">
        <figure className="h-[400px] ">
          <img src="https://i.ibb.co/cNsxKMv/image.png" alt="Album" />
        </figure>
        <div className="card-body h-[300px] mt-8">
          <h2 className="card-title text-black">DOWNLOAD OUR APP</h2>
          <p>Any Service, Any time,Any where</p>
          <h2>Give us your mobile Number. you will get app download link</h2>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className=" p-3 rounded-l-lg sm:w-2/3 w-full max-w-xs border-2"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
            >
              Get App
            </button>
          </div>
          <figure className="w-[200px] mt-4">
            <Link to="https://play.google.com/store/apps">
              <img src="https://i.ibb.co/ZMg9ggQ/image.png" />
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
