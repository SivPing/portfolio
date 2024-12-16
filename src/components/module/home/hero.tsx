import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";
import Socials from "./social";
import Photo from "./photo";
import Status from "./status";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container lg:px-28 mx-auto h-full">
        <div className=" flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          <div className="text-center lg:text-left order-2 lg:order-none">
            {/* position */}
            <span className="text-xl">Junior Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Virak Sim</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* button download cv */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                Download CV
                <Download className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Status />
    </section>
  );
};

export default Hero;
