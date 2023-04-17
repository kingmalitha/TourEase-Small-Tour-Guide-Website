import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1543043204-3f4e66dc5c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:w-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl ">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With TourEase</h2>
          <p>
            Plan your dream vacation to Sri Lanka with TourEase! Our platform
            offers a hassle-free way to browse and reserve the best vacation
            packages, customized to your preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
