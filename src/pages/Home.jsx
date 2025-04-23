import React from 'react';
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';
import Doctors from '../components/DoctorContainer/Doctors';
import MedicalServices from '../components/MedicalServices';

const Home = () => {
    const doctorsData = useLoaderData();
    return (
        <div>
            <Hero/>
            <Doctors doctorsData = {doctorsData}/>
            <MedicalServices/>
        </div>
    );
};

export default Home;