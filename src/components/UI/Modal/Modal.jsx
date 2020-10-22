import React, { memo } from "react";

import PropsTypes from "prop-types";
import classes from "./Modal.module.scss";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  const { show, closeModal, children } = props;

  return (
    <Auxiliary>
      <Backdrop show={show} clicked={closeModal} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Auxiliary>
  );
};

Modal.propTypes = {
  show: PropsTypes.shape({
    response: PropsTypes.shape({
      data: PropsTypes.shape({
        cod: PropsTypes.string.isRequired,
        message: PropsTypes.string.isRequired,
      }),
    }),
  }),
  closeModal: PropsTypes.func.isRequired,
  children: PropsTypes.string,
};

Modal.defaultProps = {
  show: null,
  children: null,
};

function areEqual(prevProps, nextProps) {
  return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
}

export default memo(Modal, areEqual);
