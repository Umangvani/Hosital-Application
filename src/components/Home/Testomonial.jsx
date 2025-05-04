import React from "react";
import {  StarIcon } from '@heroicons/react/24/outline';

function Testomonial({ name, speciality, rating, review, imgSource }) {
  return (
    <div className="border-1/2 flex w-80 h-40 rounded-2xl shadow-2xl bg-white-1/2 ">
      <div className="relative flex-none py-4 px-3 items-center w-auto px-4 ml-3 ">
        <div className="absolute size-20 bg-blue-800 w-20 h-20 rounded-full left-1"></div>
        <img
          src={imgSource}
          alt=""
          className="w-20 h-20 rounded-full sticky border-blue-1"
        />
      </div>

      <div className="py-5 flex flex-col justify-center pr-3 gap-1/2">
        <h6 className="font-semibold text-md">{name} </h6>
        <p className="text-sm text-gray-500"> {speciality}</p>

        <div className="flex items-center space-x-1">  
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <StarIcon className="h-4 w-4 text-gray-300" />
        </div>
        <p className="text-sm w-auto text-gray-500">{review}</p>
      </div>
    </div>
  );
}

export default Testomonial;
