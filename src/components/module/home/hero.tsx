import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import Socials from "./social";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            {/* position */}
            <span className="text-xl">Junoir Web Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Virak Sim</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
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
          {/* button download cv */}

          {/* photo */}
          <div>
            <Image src="/public/hero.png" alt="hero" width={200} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
