import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative">

        <div className="absolute top-4 left-4 flex items-center">
          <div className="w-4 h-4 bg-pink-300 rounded-full mr-1"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
