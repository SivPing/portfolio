"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export const PROJECTS = [
  {
    number: "01",
    category: "Full Stack",
    title: "Project 1",
    description:
      "Dreamslab is a leading IT solutions provider, empowering businesses across diverse industries. Our tailored solutions address the unique IT challenges and requirements of each sector.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Pocketbase"],
    image: "/asset/work/project01.png",
    github: "https://github.com/SivPing",
    live: "https://www.dreamslab.dev/",
  },
  {
    number: "02",
    category: "Full Stack",
    title: "Project 2",
    description:
      "Explore the diverse subsidiary companies and extensive investment portfolio under Khamsa Group of Businesses, showcasing our strategic ventures, innovative projects, and contributions across various industries.",
    stack: ["Next.js", "Tailwind CSS", "Directus"],
    image: "/asset/work/project2.png",
    github: "https://github.com/SivPing",
    live: "https://khamsa-group.vercel.app/",
  },
  {
    number: "03",
    category: "Full Stack",
    title: "Project 3",
    description:
      "Charii is where founders meet investors. Here on Charii, we nurture and grow small seeds into big trees. Let's bring ideas to life, grow together, and make impactful dreams a reality. Join Charii Today and Make a Difference!",
    stack: ["Next.js", "Tailwind CSS", "Postgres"],
    image: "/asset/work/project3.png",
    github: "https://github.com/SivPing",
    live: "https://www.charii.org/",
  },
];

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
                  <div className="flex gap-5">
                    <div className="mt-7 items-center ">
                      <ArrowLeft className="text-xs border border-accent rounded-full flex justify-center items-center text-accent  hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </div>
                    <div className="mt-7 items-center ">
                      <ArrowRight className="text-xs border border-accent rounded-full flex justify-center items-center text-accent  hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </div>
                  </div>
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
