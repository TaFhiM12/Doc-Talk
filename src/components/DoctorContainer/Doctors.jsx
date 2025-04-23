import { useEffect, useState } from "react";
import Doctor from "../doctorCard/Doctor";
import { useLoaderData } from "react-router";

const Doctors = () => {
  const doctorsData = useLoaderData();
  const [displayDoctor, setDisplayDoctor] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayDoctor(doctorsData);
    } else {
      setDisplayDoctor(doctorsData.slice(0, 6));
    }
  }, [showAll, doctorsData]);

  console.log(displayDoctor);

  return (
    <div className="w-11/12 mx-auto py-12 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Best Doctors
        </h2>
        <p className="text-gray-600 w-[70%] mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray (displayDoctor) ? (displayDoctor.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))
      ):(
        <p>Loading....</p>
      )}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors mt-16 cursor-pointer text-lg font-bold"
          onClick={() => {
            setShowAll(!showAll)
            if (showAll) window.scrollTo(0,0)
        } 
            
          }
        >
          {showAll ? "View less" : "View All Doctors"}
        </button>
      </div>
    </div>
  );
};

export default Doctors;
