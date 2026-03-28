import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
const Modal = forwardRef(

  ({ children, modalBtn, modalBtnStyle, dialogStyle }, ref) => {
    const modal = useRef();
    useImperativeHandle(ref, () => {
      return {
        open() {
          modal.current.showModal();
        },
        close() {
          modal.current.closeModal();
        },
      };
    });
    return createPortal(
      <motion.dialog
        initial={{x:1900, opacity: 0, scale:0.5 }}
        animate={{ x: 30, opacity: 1, scale:1}}
        transition ={{duration: 2}}
        ref={modal}
        className={dialogStyle}
      >
        <form method="dialog">
          <button className={modalBtnStyle}>{modalBtn}</button>
        </form>
        {children}
      </motion.dialog>,
      document.getElementById("modal"),
    );
  },
);

export default Modal;
