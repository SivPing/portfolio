import { Social } from "@/constants/social";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-6">
      {Social.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
