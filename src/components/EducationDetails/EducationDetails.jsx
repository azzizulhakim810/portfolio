import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  CursorArrowRaysIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const EducationDetails = () => {
  return (
    <div className="w-10/12">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="bg-white ml-[15px] !w-[3px]" />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 -ml-4">
              <CursorArrowRaysIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography className="" variant="h5" color="white">
              HONORS IN SOCIAL WORK
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-medium text-large  text-gray-300 "
            >
              PABNA UNIVERSITY OF SCIENCE & TECHNOLOGY, PABNA <br />
              (2019-PRESENT)
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineConnector className="bg-white ml-[15px] !w-[3px]" /> */}
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 -ml-4">
              <PencilSquareIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography variant="h5" color="white">
              COLLEGE
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
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
