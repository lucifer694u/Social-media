"use client";
import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
      <div className="text border-t-2 border-b-2 gap-10 font-semibold text-white overflow-hidden border-zinc-300 flex whitespace-nowrap">
        <motion.h1
          className="text-[17vw] leading-none  uppercase mt-5 "
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 , delay: 5}}
          style={{ fontFamily: "var(--font-Bebas_Neue)" }}
        >
          we are necxis
        </motion.h1>
        <motion.h1
          className="text-[17vw] leading-none uppercase mt-5"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 , delay: 5}}
          style={{ fontFamily: "var(--font-Bebas_Neue)" }}
        >
          we are necxis
        </motion.h1>
      
      </div>
    </div>
  );
};

export default Marquee;
