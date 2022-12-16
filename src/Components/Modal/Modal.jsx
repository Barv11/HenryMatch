import React from "react";
import s from "./Modal.module.css";

function Modal({ closeModal }) {
  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <div className={s.titleCloseBtn}>
          <button
            className={s.btn}
            onClick={() => {
              closeModal(false);
            }}
          >
            ✖
          </button>
        </div>
        <div className={s.title}>
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className={s.body}>
          <p>
            The next page is awesome you should move forward, you will enjoy it.
          </p>
        </div>
        <div className={s.footer}>
          <button
            onClick={() => {
              closeModal(false);
            }}
            className={s.cancelBtn}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
