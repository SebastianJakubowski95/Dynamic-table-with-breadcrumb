import classes from "./Breadcrumb.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  let currentLink = "";
  const activeClass = `${classes["bread-crumb"]} ${classes.active}`;
  const defaultClass = `${classes["bread-crumb"]}`;

  const segments = location.pathname.split("/").map((segment, index) => {
    if (index === 0) {
      currentLink += `${segment}`;
    } else {
      currentLink += `/${segment}`;
    }
    const segmentName = segment.split("_").join(" ");
    return (
      <NavLink
        end
        to={currentLink}
        key={index}
        className={({ isActive }) => (isActive ? activeClass : defaultClass)}>
        <p>{segmentName}</p>
      </NavLink>
    );
  });

  return (
    <div className={classes.mainBreadcrumb}>
      <NavLink
        end
        to={"/"}
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? activeClass : defaultClass)}>
        <p>Authors</p>
      </NavLink>
      {segments}
    </div>
  );
};

export default Breadcrumb;
