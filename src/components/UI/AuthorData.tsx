import React from "react";
import classes from "./AuthorData.module.css";
import Hr from "../Hr";
import DetailSection from "../DetailSection";
import ButtonCell from "../ButtonCell";
import { newAuthorData } from "../../hooks/useAuthorData";
import { useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AuthorData: React.FC<{ data: newAuthorData[] }> = (props) => {
  const location = useLocation();
  const params = useParams();
  const author = params.author;
  let authorName = author?.split("_").join(" ");
  let authorBio;
  let authorBooks;

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].authorName === authorName) {
      authorBio = <p className="fill">{props.data[i].bio}</p>;
      authorBooks = props.data[i].books;
    }
  }

  const listOfBooks = (
    <ul className={classes["list-of-books"]}>
      {authorBooks &&
        authorBooks.map((item, index) => {
          return (
            <li key={index}>
              <ButtonCell nr={`${index + 1}`} title={item.title} />
            </li>
          );
        })}
    </ul>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${location}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={classes.mainAuthorData}>
        <Hr />
        <div className={classes.content}>
          <DetailSection title="Bio" children={authorBio} />
          <DetailSection title="Books" children={listOfBooks} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthorData;
