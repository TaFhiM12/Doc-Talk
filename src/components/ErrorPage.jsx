import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  
  const statusCode = error?.status || 404;
  const message = error?.statusText || "Page not found";

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 min-h-screen">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-blue-500 flex items-center justify-center p-8">
            <div className="text-white text-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-24 w-24 mx-auto mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <p className="font-bold text-xl">Error</p>
            </div>
          </div>
          
          <div className="md:w-2/3 p-10">
            <div className="text-8xl font-black text-blue-500 mb-2">{statusCode}</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Oops! {message}</h1>
            <p className="text-gray-600 mb-8 text-lg">
              We can't seem to find what you're looking for. The page may have been moved or doesn't exist anymore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-200"
              >
                ← Go Back
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;