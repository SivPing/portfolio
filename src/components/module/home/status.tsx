"use client";
import { STATUS } from "@/constants/status";
import React from "react";
import CountUp from "react-countup";

const Status = () => {
  return (
    <section>
      <div className="container mx-auto lg:px-28 lg:pt-0 lg:pb-0">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none ">
          {STATUS.map((data, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center rounded-xl px-5 py-5 bg-accent"
            >
              <CountUp
                end={data.number}
                duration={5}
                delay={2}
                className="text-4xl lg:text-6xl font-extrabold"
              />
              <p
                className={`${
                  data.name.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
              >
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
