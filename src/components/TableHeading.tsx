import classes from "./TableHeading.module.css";
import React from "react";

const TableHeading: React.FC = () => {
  return (
    <div className={classes.mainTableHeading}>
      <div>
        <p>Nr</p>
        <p>Name</p>
      </div>
      <p>Subjects</p>
    </div>
  );
};

export default TableHeading;
