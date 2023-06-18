import React from "react";
import { motion } from "framer-motion";
import classes from "./DetailsTitle.module.css";
import expandUpIcon from "../assets/expand-up.svg";
import expandDownIcon from "../assets/expand-down.svg";

const DetailsTitle: React.FC<{
  title: string;
  isExpanded: boolean;
  setIsExpanded: () => void;
}> = (props) => {
  return (
    <div className={classes.mainDetailsTitle}>
      <p
        style={
          props.title === "Description" ? { alignSelf: "flex-start" } : {}
        }>{`${props.title}:`}</p>
      <button>
        <motion.img
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={props.setIsExpanded}
          src={props.isExpanded ? expandUpIcon : expandDownIcon}
          alt={props.isExpanded ? "close" : "open"}
        />
      </button>
    </div>
  );
};

export default DetailsTitle;
