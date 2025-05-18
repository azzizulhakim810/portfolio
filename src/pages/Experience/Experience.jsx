import { ProExperience } from "../../components/ProExperience/ProExperience";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="font-extrabold text-transparent md:text-5xl text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 pb-20">
          4+ YEARS OF EXPERIENCE
        </h1>
        <div className="md:w-10/12 w-11/12 mx-auto">
          <ProExperience></ProExperience>
        </div>
      </div>
    </div>
  );
};

export default Experience;
