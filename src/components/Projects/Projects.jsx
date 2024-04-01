import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ProjectStyles.css";

// import required modules
import { Link } from "react-router-dom";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="font-extrabold text-transparent lg:text-7xl text-xl bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 pb-10">
          MY PROJECTS
        </h1>

        <div className="w-full">
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
              <img src="https://i.ibb.co/wRzrRxV/screencapture-opinifyx-assignmen.png" />
              <h1 className="text-3xl font-bold"> OPINIOX</h1>
              <p>
                A forum based website. Where people can search topic, comment on
                the topic. Create post. There are admin & user role with
                specific power.
              </p>
              <div>
                <Link to="www.google.com">Live Link</Link>
                <button>Github Code</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/195zzH8/screencapture-elearn-assignment.png" />
              <h1 className="text-3xl font-bold"> E-LEARN</h1>
              <p>
                A Study Management site, where student can create assignments &
                take assignments. There are a admin & user role.
              </p>
              <div>
                <Link to="www.google.com">Live Link</Link>
                <button>Github Code</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/0h1jyLP/screencapture-azzizulhakim810-gi.png" />
              <h1 className="text-3xl font-bold"> Eduford</h1>
              <p>
                It's a admission based website. Peole can get help from the the
                agency. They can see the campus, testimonials, about it & the
                faculty.{" "}
              </p>
              <div>
                <Link to="www.google.com">Live Link</Link>
                <button>Github Code</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co/QQ2hWrS/screencapture-tech-tronix-assign.png" />
              <h1 className="text-3xl font-bold"> TechTronix</h1>
              <p>
                It's a electronics brand based web shop. there are few brands
                with specific brand products. People can buy products and add
                them to cart.
              </p>
              <div>
                <Link to="www.google.com">Live Link</Link>
                <button>Github Code</button>
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
