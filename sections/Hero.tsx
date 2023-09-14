"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="Hero-section w-full h-screen flex items-center overflow-hidden">
      {/* Left Column for Text */}
      <div className="z-10 w-full p-8 text-white">
        <motion.div
          className="relative h-screen flex items-center overflow-hidden"
          initial={{ opacity: 0, y: 0, x: -60 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-semibold mb-4">
              Hello, <br />
              Welcome to <br />
              <span className="text-yellow-500 md:text-8xl font-extrabold">
                {" "}
                Berhan
              </span>
            </h1>
            <p className="text-xl pt-4 pl-2 text-yellow-50 font-light">
              Breaking Barriers, Unleashing Potentials
            </p>
            <button className="mt-10 ml-2 bg-opacity-5 border border-yellow-600 font-semibold text-lg  px-8 py-3  text-white rounded-lg transition duration-300 bg-yellow-600">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Column for Image */}
    </div>
  );
};

export default Hero;
