import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 h-[400px]">
        <h3 className="absolute z-15 top-1/2 left-1/2  translate-x-1/2 translate-y-1/2 text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1580910555463-365ebb43e43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4 h-[400px]">
        <h3 className="absolute z-15 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 text-white text-2xl font-bold">
          Places
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4 h-[400px]">
        <h3 className="absolute z-15 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
