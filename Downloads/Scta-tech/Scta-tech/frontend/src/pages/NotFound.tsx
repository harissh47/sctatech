import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cloud-dark text-gray-200 flex flex-col">
      {/* <Navbar /> */}
      
      <div className="flex-grow flex items-center justify-center px-4 mt-24">
        <div className="max-w-md w-full bg-gray-900 shadow-2xl rounded-lg border border-gray-800 p-8 text-center">
          <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-gray-800 mb-6">
            <span className="text-5xl">404</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
          <p className="text-gray-400 mb-8">Sorry, we couldn't find the page you're looking for.</p>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block w-full py-3 px-6 bg-gradient-to-r from-cloud-purple to-cloud-blue rounded-md font-medium text-white hover:opacity-90 transition-opacity"
            >
              Return to Home
            </Link>
            
            {/* <Link 
              to="/contact" 
              className="inline-block w-full py-3 px-6 bg-gray-800 border border-gray-700 rounded-md font-medium text-gray-300 hover:bg-gray-750 transition-colors"
            >
              Contact Support
            </Link> */}
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default NotFound;
