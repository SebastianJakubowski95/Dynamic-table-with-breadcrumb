import classes from "./DetailSection.module.css";
import { motion } from "framer-motion";
import React, { ReactNode, useState, useRef } from "react";
import DetailsTitle from "./DetailsTitle";

const DetailSection: React.FC<{ title: string; children?: ReactNode }> = (
  props
) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={contentRef}
      className={classes.mainDetailSection}
      animate={!isExpanded ? { height: "5.5rem" } : {}}
      transition={
        isExpanded ? { ease: "easeOut", duration: 0.5 } : { duration: 0.25 }
      }
      style={isExpanded ? { height: "auto" } : {}}>
      <DetailsTitle
        title={props.title}
        isExpanded={isExpanded}
        setIsExpanded={() => setIsExpanded(!isExpanded)}
      />
      {props.children}
      {!isExpanded && <div className={classes.fade} />}
    </motion.div>
  );
};

export default DetailSection;
