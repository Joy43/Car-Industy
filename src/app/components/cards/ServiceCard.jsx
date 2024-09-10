
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServiceCard({ service }) {
  const { title, img, price, description,_id } = service || {};

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="bg-base-100 w-80 h-[450px] shadow-xl rounded-lg overflow-hidden shadow-indigo-400 transition-shadow duration-300 ease-in-out hover:shadow-2xl hover:scale-105 transform">
        <div className="relative">
          {/* Set a fixed width and height for the image container */}
          <div className="w-full h-[220px] overflow-hidden">
            <Image
              src={img}
              width={320}  
              height={220} 
              alt={title || 'Service Image'}
              className="object-cover w-full h-full" 
            />
          </div>
          {price && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium">
              SALE
            </div>
          )}
        </div>
        <div className="p-4 bg-[#ECEFF1]">
          <h3 className="text-lg font-semibold mb-2 text-[#263238]">
            {title}
          </h3>
          <p className="text-[#455A64] text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            {price && (
              <span className="font-bold text-lg text-[#D32F2F]">
                ${price}
              </span>
            )}
           <Link href={`/cars/${_id}`}>
           <button className="bg-[#37474F] hover:bg-[#263238] text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">
           View Deatils
            </button>
           
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
