// import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import { FaUserGraduate } from "react-icons/fa6";
import { LuGraduationCap, LuSchool } from "react-icons/lu";

const EducationDetails = () => {
  return (
    <div className="w-10/12">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="bg-white lg:mt-6 mt-0 md:mt-0 md:ml-[15px] ml-[38px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-4">
              <FaUserGraduate className="lg:h-8 lg:w-8 h-4 w-4" />
            </TimelineIcon>
            <Typography className="lg:block hidden" variant="h5" color="white">
              MSS IN DEVELOPMENT STUDIES
            </Typography>
            <Typography
              className="lg:hidden block lg:w-full w-[70%]"
              variant="h6"
              color="white"
            >
              MSS IN DEVELOPMENT STUDIES
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-6">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 "
            >
              UNIVERSITY OF DHAKA (2025-PRESENT)
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="bg-white lg:mt-6 mt-0 md:mt-0 md:ml-[15px] ml-[38px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-4">
              <LuGraduationCap className="lg:h-8 lg:w-8 h-4 w-4" />
            </TimelineIcon>
            <Typography className="lg:block hidden" variant="h5" color="white">
              BSS HONORS IN SOCIAL WORK
            </Typography>
            <Typography
              className="lg:hidden block lg:w-full w-[70%]"
              variant="h6"
              color="white"
            >
              BSS HONORS IN SOCIAL WORK
            </Typography>
          </TimelineHeader>

          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-10">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 "
            >
              PABNA UNIVERSITY OF SCIENCE & TECHNOLOGY, PABNA (2019-2024)
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineConnector className="bg-white ml-[15px] !w-[3px]" /> */}
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-4">
              <LuSchool className="lg:h-8 lg:w-8 h-4 w-4" />
            </TimelineIcon>
            <Typography className="lg:block hidden" variant="h5" color="white">
              COLLEGE
            </Typography>
            <Typography
              className="lg:hidden block lg:w-full w-[70%]"
              variant="h6"
              color="white"
            >
              COLLEGE
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-10">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300"
            >
              SAVAR LABORATORY COLLEGE, SAVAR, DHAKA (2016-2018)
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default EducationDetails;
