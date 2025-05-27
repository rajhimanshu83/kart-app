import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
      <p className="text-sm text-gray-500 mt-2">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#BD7765] text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
