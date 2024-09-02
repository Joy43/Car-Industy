import Image from 'next/image';
import React from 'react';

export default function ServiceCard({ service }) {
  const { title, img, price, description } = service || {};

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-xs sm:max-w-sm lg:max-w-md mx-auto rounded-lg overflow-hidden shadow-md shadow-indigo-400 transition-shadow duration-300 ease-in-out hover:shadow-lg">
        <div className="relative">
          <Image 
            src={img} 
            width={400} 
            height={400} 
            alt={title || 'Service Image'}
            className="object-cover w-full h-full"
          />
          {price && (
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          )}
        </div>
        <div className="p-4 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            {price && (
              <span className="font-bold text-lg text-black dark:text-white">
                ${price}
              </span>
            )}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
