import React, { memo } from "react";

import classes from "./Modal.module.scss";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.closeModal} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
};

function areEqual(prevProps, nextProps) {
  return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
}

export default memo(modal, areEqual);
