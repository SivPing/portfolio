"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:h-[498px] xl:w-[498px] mix-blend-lighten rounded-full overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/asset/hero.jpg "
            priority
            quality={100}
            alt="photo"
            fill
            className="object-contain"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] lg:w-[506px] h-[300px] xl:h-[506px] "
          fill={"none"}
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 79", "2 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            cx="253"
            cy="253"
            r="253"
            stroke="#F72C5B"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
