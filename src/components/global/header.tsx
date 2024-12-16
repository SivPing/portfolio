import Link from "next/link";
import NavBar from "./navbar";
import { Button } from "../ui/button";
import MobileNavBar from "./mobilenavbar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container lg:px-28 mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Virak Sim
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop navbar & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
          <Link href="/contact">
            <Button className="bg-accent">Hire me</Button>{" "}
          </Link>
        </div>
        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
