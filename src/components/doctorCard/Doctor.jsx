import React from "react";
import { Link } from "react-router";

const Doctor = ({ doctor }) => {
  const {
    id,
    image,
    name,
    education,
    registration_number,
    years_of_experience,
  } = doctor;

  return (
    <div className="p-4 bg-white rounded-t-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <img className='rounded-t-3xl object-cover h-[350px] w-[524px]' src={image} alt="" />
      </div>
      <div className="flex gap-x-5 mx-2 mb-2">
        <div className=" bg-green-100 text-green-800 text-xs font-medium py-2 px-4 rounded-full">
          Available
        </div>
        <div className=" bg-blue-100 text-blue-800 text-xs font-medium py-2 px-4 rounded-full">
          {years_of_experience}+ Years Experience
        </div>
      </div>
      <div className="mx-2">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{name}</h3>

        <p className="text-gray-600 text-lg font-[500] mb-2">{education}</p>

        <p className="text-gray-500  mb-4 text-lg font-[500]">
          <span className="font-medium ">
            <span className="border-2 rounded-full px-1 mr-1 text-sm ">R</span>
            Reg No:
          </span>{" "}
          {registration_number}
        </p>
        <Link to={`/doctorDetails/${id}`}>
            <button className="w-full rounded-full btn btn-outline btn-info hover:text-white transition-colors duration-300 text-lg mt-2 font-bold">
              View Details
            </button>
            </Link>
      </div>
    </div>
  );
};

export default Doctor;

