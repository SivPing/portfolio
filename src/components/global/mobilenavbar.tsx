"use client";
import { AlignJustify } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MobileNavBarLink } from "@/constants/navbar";
import { usePathname } from "next/navigation";

export default function MobileNavBar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <AlignJustify className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-20 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Virak Sim<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {MobileNavBarLink.map((data, index) => (
            <div key={index}>
              <Link
                href={data.path}
                className={`${
                  data.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl hover:text-accent transition-all`}
              >
                {data.name}
              </Link>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
