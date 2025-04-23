import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 border-[6px] border-gray-100 hover:border-white transition-all duration-300 w-11/12 mx-auto px-4 py-8 rounded-2xl bg-white  shadow-sm">
      <div className="text-5xl font-extrabold text-center">
        Dependable Care, Backed by Trusted <br />
        Professionals.
      </div>
      <div className="text-[16px] text-center text-gray-600">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </div>
      <div className="w-[50%] ">
        <form className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="Search any doctor"
            className="flex-1 px-4 py-3 rounded-full shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Search Now
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          className="w-full md:w-[578px] h-[350px] object-cover rounded-xl hover:shadow-lg transition-shadow"
          src="banner.png"
          alt="Medical professionals"
        />
        <img
          className="w-full md:w-[578px] h-[350px] object-cover rounded-xl hover:shadow-lg transition-shadow"
          src="banner-1.jpg"
          alt="Healthcare services"
        />
      </div>
    </div>
  );
};

export default Hero;
