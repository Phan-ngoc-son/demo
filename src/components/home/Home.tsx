import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-4 h-4 bg-pink-300 rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          </div>
          {/* Navigation */}
          <div>
            <button className="text-purple-600 hover:text-purple-800 mr-4">Profile</button>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">Logout</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Save your data storage here.</h1>
        <p className="text-gray-600 mb-8">Data Warehouse is the best platform for storing your data safely and securely.</p>
        <button className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">Learn More</button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-8 py-20">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="path-to-image" alt="Feature 1" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Search Data</h3>
            <p className="text-gray-600">Easily search for your stored data.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="path-to-image" alt="Feature 2" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">24 Hours Access</h3>
            <p className="text-gray-600">Access your data anytime, anywhere.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="path-to-image" alt="Feature 3" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Print Out</h3>
            <p className="text-gray-600">Print your data whenever you need.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="path-to-image" alt="Feature 4" className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Security Code</h3>
            <p className="text-gray-600">Protect your data with a secure code.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">Testimonials</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <p className="mb-4">"This platform is really awesome and secure!"</p>
              <h3 className="font-bold">John Tang</h3>
              <p className="text-sm text-gray-600">Data Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-4 h-4 bg-pink-300 rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-600">© 2024 DataWarehouse Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
