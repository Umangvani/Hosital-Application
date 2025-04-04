import React from "react";
// import img from './2img.png'

function Doctor_cart({ name, specility, img }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-10 px-12 rounded-lg shadow-lg ">
      <div className="flex w-52 h-40 bg-blue-800 rounded-xl shadow-xl ">
        <img src={img} alt="" className="object-contain" />
      </div>

      <h3 className="text-black">{name}</h3>
      <p className="text-gray-500 mb-2">{specility}</p>
      <button className="font-semibold border-1 py-1 px-5 rounded-2xl text-blue-900 hover:text-white hover:bg-blue-800 focus:bg-blue-800 focus:text-white focus:outline-2 focus:outline-offset-2  focus:outline-blue-800 ">
        Book an Appointment
      </button>
    </div>
  );
}

export default Doctor_cart;
