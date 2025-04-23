import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";

const DoctorDetails = () => {
  const navigate = useNavigate();

  // Get current day name (e.g., "Monday")
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return days[today];
  };

  const handleBookAppointment = () => {
    const currentDay = getCurrentDay();
    if (!data.availability.includes(currentDay)) {
      toast.error("Doctor is unavailable today");
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const isDuplicate = existingBookings.some(
      (booking) => booking.id === data.id
    );

    if (isDuplicate) {
      toast.error("Appointment already scheduled for today");
    } else {
      localStorage.setItem(
        "bookings",
        JSON.stringify([...existingBookings, data])
      );
      toast.success(`Appointment scheduled with ${name} successfully`);

      setTimeout(() => {
        navigate("/myBookings");
      }, 1000);
    }
  };

  const DoctorDetail = useLoaderData();
  const { id } = useParams();
  const data = Array.isArray(DoctorDetail)
    ? DoctorDetail.find((doctor) => doctor.id == Number(id))
    : null;

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 mt-10 p-16 rounded-3xl bg-white w-10/12 mx-auto shadow">
        <div className="text-4xl font-extrabold">No Doctor Found!!</div>
        <div>No Doctor found with this registration No-</div>
        <div className="text-xl font-semibold flex gap-4">
          <div className=""><CiCirclePlus size={30} /></div>
          <div>{id}</div>
        </div>
        <div>
          <Link to='/'>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer text-lg font-bold">View All Doctors</button>
          </Link>
        </div>
      </div>
      
    );
  }

  const {
    name,
    education,
    workplace,
    registration_number,
    availability,
    fee,
    image,
    description
  } = data;

  const currentDay = getCurrentDay();
  const isAvailableToday = availability.includes(currentDay);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center mb-8 rounded-2xl shadow bg-white p-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Doctor's Profile Details
        </h2>
        <p className="text-gray-600 w-[70%] mx-auto">
          {description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-left gap-8 bg-white shadow rounded-2xl p-10">
        <div className="relative w-[300px] h-[300px] overflow-hidden border-4 border-white shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
          {!isAvailableToday && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Unavailable
            </div>
          )}
        </div>

        <div className="p-6 w-full max-w-2xl">
          <div className="mb-4">
            <h3 className="text-4xl font-extrabold text-gray-800">{name}</h3>
            <p className="text-gray-600">{education}</p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-500">Working at</p>
            <p className="text-gray-700 text-xl">{workplace}</p>
          </div>
          <div className="mb-2 border-t-2 border-dashed border-gray-300"></div>
          <div className="mb-2">
            <p className="text-lg text-gray-500">
              Reg No: {registration_number}
            </p>
          </div>
          <div className="border-t-2 border-dashed border-gray-300 mb-3"></div>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Availability</span>
              <div className="flex gap-2 flex-wrap">
                {availability.map((day, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded ${
                      day === currentDay 
                        ? "bg-blue-500 text-white font-bold"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-2">
            <p className="text-lg font-bold">Consultation Fee:</p>
            <p className="text- font-semibold text-blue-800">
              Taka : {fee} <span className="text-gray-400">(incl. Vat)</span>{" "}
              Per consultation
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white my-5 p-10 flex flex-col gap-y-4 rounded-2xl">
        <div className="text-4xl font-extrabold text-center">Book an Appointment</div>
        <div className="border border-dashed border-gray-400"></div>
        <div className="flex justify-between mx-2">
          <div className="text-lg">Availability</div>
          <div className={`border rounded-full p-2 ${
            isAvailableToday 
              ? "border-green-200 bg-green-100 text-green-500"
              : "border-red-200 bg-red-100 text-red-500"
          }`}>
            {isAvailableToday ? "Doctor Available Today" : "Doctor Unavailable Today"}
          </div>
        </div>
        <div className="border border-dashed border-gray-400"></div>
        <div className={`p-3 pl-10 rounded-3xl ${
          isAvailableToday 
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}>
          {isAvailableToday 
            ? "Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation."
            : `Dr. ${name} is not available for appointments today. Available days: ${availability.join(", ")}`}
        </div>
        <div className="mt-6">
          <button
            onClick={handleBookAppointment}
            className={`text-white font-bold text-xl py-2 px-6 rounded-full w-full h-16 cursor-pointer ${
              isAvailableToday 
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isAvailableToday}
          >
            {isAvailableToday ? "Book Appointment Now" : "Not Available Today"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;