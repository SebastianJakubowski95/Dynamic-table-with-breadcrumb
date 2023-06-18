import classes from "./Table.module.css";
import React from "react";
import TableHeading from "../TableHeading";
import ButtonCell from "../ButtonCell";
import Loader from "../Loader";
import { newAuthorData } from "../../hooks/useAuthorData";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Table: React.FC<{ isFetching: boolean; data: newAuthorData[] }> = (
  props
) => {
  const location = useLocation();
  const listOfAuthors = props.data.map((item, index) => {
    return (
      <li key={index}>
        <ButtonCell
          title={item.authorName}
          kind={item.kindOfBooks}
          nr={`${index + 1}`}
        />
      </li>
    );
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={classes.mainTable}
        key={`${location}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <TableHeading />
        <div
          style={{
            minHeight: "50vh",
            display: "grid",
            height: "70%",
            overflow: "scroll",
          }}>
          {props.isFetching ? (
            <Loader />
          ) : (
            <ul className={classes["list-of-authors"]}>{listOfAuthors}</ul>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Table;
