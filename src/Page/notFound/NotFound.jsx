
import { IoHome } from "react-icons/io5";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate()


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! Looks like youre lost. The page you are looking for does not exist.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="flex items-center border-[#FF5400] border  text-[#FF5400] font-semibold px-4 py-2 rounded-lg focus:outline-none"
            onClick={()=> navigate()-1}
          >
           
            <FaLongArrowAltLeft className="w-6 h-6 mr-2" />
            Go Back
          </button>
      <Link to='/'>
              <button
                className="flex items-center bg-[#FF5400]  text-white font-semibold px-4 py-2 rounded-lg focus:outline-none"
                
              >
                
                <IoHome className="w-6 h-6 mr-2" />
                Go Home
              </button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
