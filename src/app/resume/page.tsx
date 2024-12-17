"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EDUCATION, EXPERIENCE, RESUME, SKILLS } from "@/constants/resume";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh]  flex items-center justify-center py-12 lg:py-0 "
    >
      <div className="container mx-auto lg:px-28">
        <Tabs
          defaultValue="experience"
          className="w-full h-full flex-row md:flex lg:flex xl:flex gap-20 "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6 mb-16">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}{" "}
          <div className=" w-full gap-10 ">
            <TabsContent value="experience" className="gap-10">
              {EXPERIENCE.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-7  text-center lg:text-left"
                >
                  <h3 className="text-3xl font-bold ">{data.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {data.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-4  lg:grid-cols-1 xl:grid-cols-2 px-5 sm:px-10 md:px-0 ">
                      {data.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent text-2xl font-semibold">
                            {item.duration}
                          </span>
                          <h3 className="">{item.position}</h3>
                          <div>
                            <p>{item.year}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="education" className="gap-10">
              {EDUCATION.map((education, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-7  text-center lg:text-left"
                >
                  <h3 className="text-3xl font-bold ">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px] w-auto">
                    <ul className="grid grid-cols-1 gap-4  lg:grid-cols-1 xl:grid-cols-2 px-5 sm:px-10 md:px-0  ">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent text-2xl font-semibold">
                            {item.degree}
                          </span>
                          <h3 className="">{item.institution}</h3>
                          <div>
                            <p>{item.year}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="skills" className="gap-10 px-28 md:px-0 ">
              {SKILLS.map((skills, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-7  text-center lg:text-left"
                >
                  <h3 className="text-3xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                  <ScrollArea className="h-[400px] w-auto">
                    <ul className="grid grid-cols-1 gap-4  lg:grid-cols-1 xl:grid-cols-2 px-5 sm:px-10 md:px-0  ">
                      {skills.skillList.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex gap-2">
                            <span className="text-accent text-3xl font-semibold">
                              {item.icons}
                            </span>
                            <h3 className="">{item.name}</h3>
                          </div>

                          <div>
                            <p>{item.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="about" className="gap-10 px-28 md:px-0 ">
              {RESUME.map((about, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-7  text-center lg:text-left"
                >
                  <h3 className="text-3xl font-bold ">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {about.descripion}
                  </p>
                  <ScrollArea className="h-[400px] w-auto">
                    <ul className=" grid grid-cols-1 gap-4  lg:grid-cols-1 xl:grid-cols-2 ">
                      {about.info.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[148px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="gap-3">
                            <h3 className="text-accent text-2xl">
                              {item.fielName}
                            </h3>
                            <h3 className=""> {item.fielValue}</h3>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
