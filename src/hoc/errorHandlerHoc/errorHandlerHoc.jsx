import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";
import useHttpErrorHandler from "../../hooks/httpErrorHandler";

// ERROR HANDLER WITH CUSTOM HOOK
const errorHandlerHoc = (WrappedComponent, httpClient) => {
  return (props) => {
    const [error, errorConfirmedHandler] = useHttpErrorHandler(httpClient);

    return (
      <Auxiliary>
        <Modal show={error} closeModal={errorConfirmedHandler}>
          {error ? error.response.data.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxiliary>
    );
  };
};

export default errorHandlerHoc;
