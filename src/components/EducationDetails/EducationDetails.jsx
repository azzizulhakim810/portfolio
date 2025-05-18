import {
  CursorArrowRaysIcon,
  PencilSquareIcon
} from "@heroicons/react/24/solid";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography
} from "@material-tailwind/react";

const EducationDetails = () => {
  return (
    <div className="w-10/12">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="bg-white mt-0 md:mt-0 md:ml-[15px] ml-[42px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-3">
              <CursorArrowRaysIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography className="" variant="h5" color="white">
              MSS IN DEVELOPMENT STUDIES
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 "
            >
              UNIVERSITY OF DHAKA <br />
              (2025-PRESENT)
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="bg-white mt-0 md:mt-0 md:ml-[15px] ml-[42px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-3">
              <CursorArrowRaysIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography className="" variant="h5" color="white">
              BSS HONORS IN SOCIAL WORK
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 "
            >
              PABNA UNIVERSITY OF SCIENCE & TECHNOLOGY, PABNA <br />
              (2019-2024)
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineConnector className="bg-white ml-[15px] !w-[3px]" /> */}
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-3">
              <PencilSquareIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography variant="h5" color="white">
              COLLEGE
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12">
            <Typography
              color="gary"
              className="font-medium text-large  text-gray-300"
            >
              SAVAR LABORATORY COLLEGE, SAVAR, DHAKA <br />
              (2016-2018)
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default EducationDetails;
