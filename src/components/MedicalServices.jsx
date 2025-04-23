import React from 'react';
import CountUp from 'react-countup';

const MedicalServices = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">We Provide Best Medical Services</h1>
        <p className="text-lg text-gray-600  mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties – all at your convenience.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <StatCard 
          icon="/success-doctor.png" 
          end={199} 
          label="Total Doctors" 
        />
        <StatCard 
          icon="/success-review.png" 
          end={467} 
          label="Total Reviews" 
        />
        <StatCard 
          icon="/success-patients.png" 
          end={1900} 
          label="Patients" 
        />
        <StatCard 
          icon="/success-staffs.png" 
          end={300} 
          label="Total Staff" 
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon, end, label }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        <img 
          src={icon} 
          alt={label} 
          className="h-12 w-auto object-contain" 
        />
      </div>
      <h3 className="text-4xl font-bold text-gray-800 mb-2">
        <CountUp end={end} duration={2.5} separator="," />
        <span> +</span>
      </h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default MedicalServices;