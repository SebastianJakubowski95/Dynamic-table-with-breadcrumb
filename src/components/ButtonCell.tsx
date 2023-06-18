import classes from "./ButtonCell.module.css";
import classNames from "classnames";
import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

const ButtonCell: React.FC<{
  kind?: string[];
  title: string;
  nr: string;
}> = (props) => {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const [scope, animate] = useAnimate();
  const navigate = useNavigate();
  const params = useParams();

  function onClickHandler() {
    setIsClicked(true);
    animate(
      scope.current,
      { scale: [1, 0.99, 1] },
      { duration: 0.5, ease: "easeOut", times: [0, 0.3, 1] }
    );
    setTimeout(() => {
      if (params.author) {
        navigate(`/${params.author}/${props.title.split(" ").join("_")}`);
      } else {
        navigate(`/${props.title.split(" ").join("_")}`);
      }
      setIsClicked(false);
    }, 750);
  }

  return (
    <motion.button
      ref={scope}
      whileHover={{ borderColor: "#d85b34" }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      onClick={onClickHandler}
      className={classNames(
        classes.mainButtonCell,
        isClicked && classes.active
      )}>
      <div>
        <div className={classes.num}>
          <p>{props.nr}</p>
        </div>
        <p style={{ textAlign: "left", width: "-webkit-fill-available" }}>
          {props.title}
        </p>
      </div>
      <div style={props.kind ? {} : { display: "none" }}>
        <p style={{ fontSize: "0.75rem" }}>
          {props.kind ? `${props.kind[0]}, ${props.kind[1]}` : ""}
        </p>
      </div>
    </motion.button>
  );
};

export default ButtonCell;
