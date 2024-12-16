import { Social } from "@/constants/social";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="">
      {Social.map((item, index) => (
        <Link key={index} href={item.path} className="">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
