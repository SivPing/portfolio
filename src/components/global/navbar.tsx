"use client";
import { NavBarLink } from "@/constants/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {NavBarLink.map((data, index) => (
        <div key={index}>
          <Link
            href={data.path}
            className={`${
              data.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {data.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
