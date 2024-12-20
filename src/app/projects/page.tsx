"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/constants/project";

const Project = () => {
  return (
    <section className="py-16  text-white lg:px-28">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold text-center mb-10 ">My Project</h1>
        <Swiper spaceBetween={10} className="w-full h-full">
          {PROJECTS.map((project) => (
            <SwiperSlide key={project.number}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-1/2 text-left ">
                  {/* <h2 className="text-6xl font-bold  mb-4">{project.number}</h2> */}
                  <h3 className="text-3xl font-semibold text-accent mb-4 underline">
                    {project.title}
                  </h3>
                  <p className="">{project.description}</p>
                  <p className="text-accent ">{project.stack.join(", ")}</p>
                  <hr className="w-1/2" />
                  <div className="flex gap-4 mt-3 ">
                    <Link href={project.live}>
                      <ArrowUpRight className=" text-xs  border border-accent rounded-full flex justify-center items-center text-accent  hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </Link>
                    <Link href={project.github}>
                      <Github className="text-xs border border-accent rounded-full flex justify-center items-center text-accent  hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </Link>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-full h-hift md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    quality={100}
                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-7 items-center ">
                  <ArrowRight className="text-xs border border-accent rounded-full flex justify-center items-center text-accent  hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
