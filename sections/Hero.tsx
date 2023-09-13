"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen flex items-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

      {/* Left Column for Text */}
      <div className="z-10 md:w-1/2 w-full p-8 md:ml-32 ml-16 text-white">
        <div>
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
          <button className="mt-10 ml-2 border font-semibold text-lg border-slate-950 px-8 py-3  text-slate-950 rounded-full transition duration-300 bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Column for Image */}
    </motion.div>
  );
};

export default Hero;
