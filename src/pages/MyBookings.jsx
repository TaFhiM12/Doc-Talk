import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter((booking) => booking.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const chartData = bookings.map((b) => ({
    name: b.name,
    fee: parseFloat(b.fee)
  }));

  return (
    <div className="w-10/12 mx-auto mt-10">
      {bookings.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-8 pt-10 ">
          <div className="text-4xl font-extrabold">
            You have not Booked any appointment yet
          </div>
          <div className="text-lg text-gray-700">
            Our platform connects you with verified, experienced doctors across
            various specialties- all at your convenience
          </div>
          <div>
            <Link to="/">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer text-lg font-bold">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center gap-5 mb-10">
            <div className="text-4xl font-extrabold">My Today Appointments</div>
            <div className="text-lg text-gray-700">
              Our platform connects you with verified, experienced doctors
              across various specialties- all at your convenience
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-5 mb-10 shadow-md rounded-2xl flex justify-center items-center w-full">
            
            <BarChart
              width={1400}
              height={700}
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="fee"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>

          <div>
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col rounded-2xl shadow p-10 bg-white relative mb-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      {booking.name}
                    </h2>
                    <p className="text-lg">{booking.education}</p>
                  </div>
                  <div className="text-lg">
                    <p>Appointment Fee : {booking.fee} Taka + Vat</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="w-full mt-10 border border-red-300 bg-red-50 text-red-500 rounded-full text-xl font-semibold p-3 hover:bg-red-600 hover:text-white cursor-pointer"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
