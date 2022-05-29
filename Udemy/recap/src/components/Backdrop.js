import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onCancel={props.onClick} />;
};

export default Backdrop;
