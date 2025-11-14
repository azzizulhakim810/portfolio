// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectStyles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="font-extrabold text-transparent lg:text-5xl text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 pb-10">
          My Projects
        </h1>

        <div className="md:w-full w-[80%]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://i.ibb.co.com/ccKhb4pF/rent-residence2.jpg" />
              <h1 className="text-2xl font-bold py-2"> Rent & Residence</h1>
              <p>
                A complete real-estate management platform with property
                listing, booking, and role-based dashboards.
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://rent-residence-3a842.web.app">Live Link</a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/rent-and-residence">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/195zzH8/screencapture-elearn-assignment.png" />
              <h1 className="text-2xl font-bold py-2"> E-LEARN</h1>
              <p>
                A Study Management site, where student can create assignments &
                take assignments. There are a admin & user role.
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://elearn-assignment.web.app">Live Link</a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/elearn-platform-client">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/QQ2hWrS/screencapture-tech-tronix-assign.png" />
              <h1 className="text-2xl font-bold py-2"> TechTronix</h1>
              <p>
                It's a electronics brand based web shop. there are few brands
                with specific brand products. People can buy products and add
                them to cart.
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://tech-tronix-assignment.web.app">Live Link</a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/tech-tronix-client">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/wRzrRxV/screencapture-opinifyx-assignmen.png" />
              <h1 className="text-2xl font-bold py-2"> OPINIOX</h1>
              <p>
                A forum based website. Where people can search topic, comment on
                the topic. Create post. There are admin & user role with
                specific power.
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://opinifyx-assignment.web.app/">Live Link</a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/opiniox-client">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/1JK0LsBy/Stream-Verse.png" />
              <h1 className="text-2xl font-bold py-2"> Stream Verse</h1>
              <p>
                A video streaming platform where you can watch the existing
                videos along with upload any video from your dashboard.
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://stream-verse-main.vercel.app">Live Link</a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/stream-verse-main">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="ms-2"
                src="https://i.ibb.co/QvGRMr2/task-hub-1.png"
              />
              <h1 className="text-2xl font-bold py-2"> TaskHub</h1>
              <p>
                It's a task management web app. User can easily create their
                tasks & manage according their state. People can login & save
                their tasks on the database.
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://task-hub-d7947.web.app">Live Link</a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/task-hub-client">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/0h1jyLP/screencapture-azzizulhakim810-gi.png" />
              <h1 className="text-2xl font-bold py-2"> Eduford</h1>
              <p>
                It's a admission based website. People can get help from the the
                agency. They can see the campus, testimonials, about it & the
                faculty.{" "}
              </p>
              <div className="flex gap-5 underline underline-offset-4 text-white pt-1">
                <button>
                  <a href="https://azzizulhakim810.github.io/Eduford-Edu-Site">
                    Live Link
                  </a>
                </button>
                <button>
                  <a href="https://github.com/azzizulhakim810/Eduford-Edu-Site">
                    Github Code
                  </a>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="w-4/6 mx-auto text-center">
            <img
              className="py-3"
              src="https://i.ibb.co/wRzrRxV/screencapture-opinifyx-assignmen.png"
              alt=""
            />
            <h1 className="text-3xl font-bold"> OPINIOX</h1>
            <p>
              A forum based website. Where people can search topic, comment on
              the topic. Create post. There are admin & user role with specific
              power.
            </p>
          </div>
          <div className="w-4/6  mx-auto text-center">
            <img
              className="py-3"
              src="https://i.ibb.co/195zzH8/screencapture-elearn-assignment.png"
              alt=""
            />
            <h1 className="text-3xl font-bold"> E-LEARN</h1>
            <p>
              A Study Management site, where student can create assignments &
              take assignments. There are a admin & user role.
            </p>
          </div>
          <div className="w-4/6  mx-auto text-center">
            <img
              className="py-3"
              src="https://i.ibb.co/0h1jyLP/screencapture-azzizulhakim810-gi.png"
              alt=""
            />
            <h1 className="text-3xl font-bold"> Eduford</h1>
            <p>
              It's a admission based website. Peole can get help from the the
              agency. They can see the campus, testimonials, about it & the
              faculty.{" "}
            </p>
          </div>
          <div className="w-4/6  mx-auto text-center">
            <img
              className="py-3"
              src="https://i.ibb.co/QQ2hWrS/screencapture-tech-tronix-assign.png"
              alt=""
            />
            <h1 className="text-3xl font-bold"> TechTronix</h1>
            <p>
              It's a electronics brand based web shop. there are few brands with
              specific brand products. People can buy products and add them to
              cart.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
