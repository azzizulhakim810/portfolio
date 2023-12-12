import ProgressBar from "react-animated-progress-bar";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h1 className="font-extrabold text-transparent md:text-5xl text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
        PROFESSIONAL SKILLS
      </h1>
      {/* <div className='grid grid-cols-4 text-center py-10'>
            <div>
              <h1 className='font-semibold text-3xl py-6 text-cyan-400 '>Javascript</h1>
            <div className="radial-progress  bg-gradient-to-r from-cyan-500 to-blue-500" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">70%</div>
            </div>
            <div>
              <h1 className='font-semibold text-3xl py-6'>React</h1>
            <div className="radial-progress text-cyan-400" style={{ "--value": "60", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">60%</div>
            </div>
            <div>
              <h1 className='font-semibold text-3xl py-6'>Wordpress</h1>
            <div className="radial-progress text-cyan-400" style={{ "--value": "80", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">80%</div>
            </div>
            <div>
              <h1 className='font-semibold text-3xl py-6'>Communicaion</h1>
            <div className="radial-progress text-cyan-400" style={{ "--value": "90", "--size": "12rem", "--thickness": "1rem" }} role="progressbar">90%</div>
            </div>
            </div> */}

      <div className="grid md:grid-cols-2 grid-cols-1 md:w-10/12 w-11/12 mx-auto pt-10 gap-8">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            Javascript
          </h1>
          <ProgressBar
            width="100%"
            height="10px"
            rect
            fontColor="white"
            percentage="59"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            React
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="45"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            Wordpress
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="82"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            communication
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="88"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            photoshop
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="62"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            Illustrator
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="45"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            Figma
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="71"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold md:text-xl text-base text-white uppercase leading-2 tracking-widest ">
            Adobe Premier Pro
          </h1>
          <ProgressBar
             width="100%"
             height="10px"
            rect
            fontColor="white"
            percentage="35"
            rectPadding="0px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            defColor={{
              fair: "#06B6D4",
              good: "#06B6D4",
              excellent: "#06B6D4",
              poor: "#06B6D4",
            }}
            trackBorderColor="#06B6D4"
          />
        </div>
        {/* <div className='flex flex-col justify-center items-center'>
              <h1 className='font-semibold text-3xl py-6'>React</h1>
              <ProgressBar width="230" trackWidth="13" percentage="60" />
            </div> */}

        {/* <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="70"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      /> */}
      </div>
    </div>
  );
};

export default Skills;
