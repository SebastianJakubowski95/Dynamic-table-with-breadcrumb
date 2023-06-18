import React from "react";
import classes from "./BookData.module.css";
import Hr from "../Hr";
import DetailSection from "../DetailSection";
import { newAuthorData } from "../../hooks/useAuthorData";
import { useParams, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const BookData: React.FC<{
  data: newAuthorData[];
}> = (props) => {
  const params = useParams();
  const location = useLocation();
  const authorName = params.author?.split("_").join(" ");
  let bookName = params.book?.split("_").join(" ");
  let currentBook;

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].authorName === authorName) {
      currentBook = props.data[i].books.filter(
        (book) => book.title === bookName
      );
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={classes.mainBookData}
        key={`${location}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}>
        <Hr />
        <div className={classes.content}>
          <div className={classes.subjects}></div>
          <DetailSection
            title="Description"
            children={<p className="fill">{currentBook![0].description}</p>}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookData;
