import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="flex justify-between items-center bg-black py-10">
      <div className="px-10 space-y-5 text-white">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-white decoration-3">
            Carhat
          </span>{" "}
          is a place to read, communicate and connect
        </h1>
        <h2 className="max-w-2xl">
          As a Medium creator, your About page is a place to introduce yourself
          and to contextualize your writing for your readers
        </h2>
      </div>
      <img
        className="hidden md:inline-flex h-40 px-10 object-contain lg:h-64 px-24"
        src="https://www.seekpng.com/png/full/321-3213673_the-carhartt-legacy-outworking-them-all-since-carhartt.png"
        height={500}
        alt="logo"
      />
    </div>
  );
};

export default Hero;
