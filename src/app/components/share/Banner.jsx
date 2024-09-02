import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/assets/slider/shop.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Welcome to Our Car Industry Site
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
          Discover amazing features and services that await you.
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Banner;
