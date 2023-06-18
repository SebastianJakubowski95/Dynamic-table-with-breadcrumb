import React from "react";
import { motion } from "framer-motion";
import loaderSmall from "../assets/loader-small.svg";
import loaderLarge from "../assets/loader-large.svg";

const Loader: React.FC = () => {
  return (
    <div className="relative center">
      <motion.img
        className="absolute"
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        src={loaderSmall}
        alt="loader-small"
      />
      <motion.img
        className="absolute"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
        src={loaderLarge}
        alt="loader-large"
      />
    </div>
  );
};

export default Loader;
