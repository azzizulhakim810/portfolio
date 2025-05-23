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

export const ProExperience = () => {
  return (
    <div className="w-10/12">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="bg-white mt-6 md:mt-0 md:ml-[15px] ml-[40px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-3">
              <CursorArrowRaysIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography className="" variant="h5" color="white">
              JUNIOR MERN DEV INTERN (REMOTE) |{" "}
              <span className="text-cyan-400">PEACOCK INDIA, CHENNAI, INDIA</span>{" "}
              (JUNE 2024 - AUGUST 2024)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12">
            <Typography
              color="gary"
              className="font-medium text-large  text-gray-300 pl-4"
            >
              I worked there with a rigorous team. Daily Stand-ups, learning environment with the accountability of work provide me a good developer mindset. 
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="bg-white mt-6 md:mt-0 md:ml-[15px] ml-[40px] !w-[3px] " />
          <TimelineHeader>
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-3">
              <CursorArrowRaysIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography className="" variant="h5" color="white">
              WEB DESIGNER |{" "}
              <span className="text-cyan-400">LEVEL 2 SELLER ON FIVERR</span>{" "}
              (OCTOBER 2020 - PRESENT)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12">
            <Typography
              color="gary"
              className="font-medium text-large  text-gray-300 pl-4"
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
            <TimelineIcon className="bg-cyan-500 p-4 md:-ml-4 ml-3">
              <PencilSquareIcon className="h-8 w-8" />
            </TimelineIcon>
            <Typography variant="h5" color="white">
              CONTENT CREATOR | <span className="text-cyan-400">ITJOYBD</span>{" "}
              (JANUARY 2020 - DECEMBER 2020)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 md:-me-0 md:ml-0 -me-12 ml-12">
            <Typography
              color="gary"
              className="font-medium text-large  text-gray-300 pl-6"
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
