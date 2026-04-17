import { Link } from "react-router";

const NotFoundPage=()=>{
    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="text-center">
        {/* Large 404 text */}
        <h1 className="text-9xl font-black text-gray-200 tracking-tighter">
          404
        </h1>

        <div className="relative -mt-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page not found.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Go to Homepage */}
            <Link
              to="/"
              className="px-6 py-3 bg-[#244D3F] text-white font-semibold rounded-lg hover:bg-blue-700 transition-shadow shadow-lg"
            >
              Go back to Friends
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;