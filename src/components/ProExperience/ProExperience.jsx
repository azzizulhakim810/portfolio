import {
  CursorArrowRaysIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import { FaRegKeyboard } from "react-icons/fa";

export const ProExperience = () => {
  return (
    <div className="w-12/12">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="bg-white lg:mt-6 mt-3 md:mt-0 md:ml-[15px] ml-[38px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-4">
              <FaRegKeyboard className="lg:h-8 lg:w-8 h-4 w-4" />
            </TimelineIcon>
            <Typography className="lg:block hidden" variant="h5" color="white">
              JUNIOR MERN DEV INTERN (REMOTE) |{" "}
              <span className="text-cyan-400">
                PEACOCK INDIA, CHENNAI, INDIA
              </span>{" "}
              (JUNE 2024 - AUGUST 2024)
            </Typography>

            <Typography
              className="lg:hidden block lg:w-full w-[70%]"
              variant="h6"
              color="white"
            >
              JUNIOR MERN DEV INTERN (REMOTE) |{" "}
              <span className="text-cyan-400">
                PEACOCK INDIA, CHENNAI, INDIA
              </span>{" "}
              (JUNE 2024 - AUGUST 2024)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12  lg:w-full w-[80%]">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 pl-0"
            >
              I worked there with a rigorous team. Daily Stand-ups, learning
              environment with the accountability of work provide me a good
              developer mindset.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="bg-white lg:mt-6 mt-3 md:mt-0 md:ml-[15px] ml-[38px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-4">
              <CursorArrowRaysIcon className="lg:h-8 lg:w-8 h-4 w-4" />
            </TimelineIcon>
            <Typography className="lg:block hidden" variant="h5" color="white">
              WEB DESIGNER |{" "}
              <span className="text-cyan-400">LEVEL 2 SELLER ON FIVERR</span>{" "}
              (OCTOBER 2020 - PRESENT)
            </Typography>
            <Typography
              className="lg:hidden block lg:w-full w-[70%]"
              variant="h6"
              color="white"
            >
              WEB DESIGNER |{" "}
              <span className="text-cyan-400">LEVEL 2 SELLER ON FIVERR</span>{" "}
              (OCTOBER 2020 - PRESENT)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12  lg:w-full w-[80%]">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 pl-2"
            >
              I'm a Professional Web Developer & Designer with over 4+ years of
              experience. I do completely modern, high-end, up-to-date,
              professional, and responsive WordPress website. I've designed more
              than 50 wordpress websites.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineConnector className="bg-white ml-[15px] !w-[3px]" /> */}
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-4">
              <PencilSquareIcon className="lg:h-8 lg:w-8 h-4 w-4" />
            </TimelineIcon>
            <Typography className="lg:block hidden" variant="h5" color="white">
              CONTENT CREATOR | <span className="text-cyan-400">ITJOYBD</span>{" "}
              (JANUARY 2020 - DECEMBER 2020)
            </Typography>
            <Typography
              className="lg:hidden block  lg:w-full w-[70%]"
              variant="h6"
              color="white"
            >
              CONTENT CREATOR | <span className="text-cyan-400">ITJOYBD</span>{" "}
              (JANUARY 2020 - DECEMBER 2020)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12  lg:w-full w-[80%]">
            <Typography
              color="gray"
              className="font-medium text-large  text-gray-300 pl-2"
            >
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
