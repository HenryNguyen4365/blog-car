import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-3 max-w-7xl mx-auto">
      <div className="flex space-x-5 items-center">
        <Link href="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2021/08/Carhartt-Logo.png"
            className="w-44 object-contain cursor-pointer"
            alt="carhat"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-4">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-yellow-500 px-3 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex space-x-5 text-yellow-600 items-center ">
        <h3 className="cursor-pointer">Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-yellow-500 cursor-pointer hover:bg-black hover:text-white hover:border-black transition ease-in-out duration-300">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default Header;
