import React from "react";
import { motion } from "framer-motion";

// variants

const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps = 8; // number of stepes
  return totalSteps - index - 1;
};
export default function Stair() {
  return (
    <>
      {/*
      render 6 motion divs, each representing a step of the stair.
      Each div will have the same animation defind by the stairAnimation object.
      The delay for each div is calulated sinamically based in it's reversed index,
      creating a staggered effect with decresing delay for each subquent step.
       */}
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={StairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
