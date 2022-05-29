import React, { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const deleteHandler = () => {
    setIsModalOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && <Modal onCancel={deleteHandler} />}
      {modalIsOpen && <Backdrop onCancel={deleteHandler} />}
    </>
  );
};

export default Todo;
