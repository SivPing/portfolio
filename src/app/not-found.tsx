import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center gap-5 py-36 text-center font-extrabold">
      <h1 className="text-7xl text-accent    md:text-9xl">404</h1>
      <h2 className="text-5xl text-white md:text-7xl">Page not found.</h2>
      <p className="w-full max-w-[700px] text-xl font-medium text-gray md:text-2xl">
        The page you are looking for doesn&apos;t exist or has been moved.
        Please go back to the homepage.
      </p>
      <Link href="/" passHref>
        <button className="h-12 rounded-xl bg-accent px-4 py-2 text-lg font-bold focus:ring-opacity-50">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
