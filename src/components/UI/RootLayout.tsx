import classes from "./RootLayout.module.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { motion } from "framer-motion";

const RootLayout: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={classes.mainRootLayout}>
      <h1>The Best Books by the best Writers</h1>
      <Breadcrumb />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </motion.div>
  );
};

export default RootLayout;
