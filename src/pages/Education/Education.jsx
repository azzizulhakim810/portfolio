import React from 'react';
import EducationDetails from '../../components/EducationDetails/EducationDetails';

const Education = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-20">
      <h1 className="font-extrabold text-transparent md:text-5xl text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 pb-20">
      Education
      </h1>
      <div className='md:w-10/12 w-11/12 mx-auto'>
      <EducationDetails></EducationDetails>
      </div>
      </div>
    </div>
  );
};

export default Education;