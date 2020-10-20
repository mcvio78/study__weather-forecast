import React, { memo } from "react";

import classes from "./Modal.module.scss";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  const { initState, err } = props;

  return (
    <Auxiliary>
      <Backdrop show={err} clicked={initState} />
      <div
        className={classes.Modal}
        style={{
          transform: err !== null ? "translateY(0)" : "translateY(-100vh)",
          opacity: err !== null ? "1" : "0",
        }}
      >
        <h3>{err}</h3>
      </div>
    </Auxiliary>
  );
};

export default memo(modal, (prevProps, nextProps) => {
  return nextProps.err === prevProps.err && nextProps.children === prevProps.children;
});
