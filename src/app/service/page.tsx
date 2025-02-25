"use client";
import { SERVICE } from "@/constants/service";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

const Service = () => {
  return (
    <section className="mt-10  mb-10 flex flex-col lg:py-0 justify-center px-10 md:px-0 lg:px-0">
      <div className="container mx-auto lg:px-28 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {SERVICE.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between text-white transition-all duration-500 group-hover:text-[#F72C5B]">
                <h1 className="text-4xl font-extrabold ">{service.number}</h1>
                <Link
                  href={service.href}
                  className="lg:w-16 w-10 h-10 lg:h-16 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <ArrowDownRight className=" text-black" />
                </Link>
              </div>
              <div>
                <h2 className="text-[30px] lg:text-[42px] md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                <p className="text-white/80 mt-5">{service.description}</p>
              </div>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
