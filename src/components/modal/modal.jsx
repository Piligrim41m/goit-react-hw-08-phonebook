import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Modal } from "./modal.styled";

const modalRoot = document.querySelector('#modalroot');


export const ModalWindow = ({ children, toggleModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const onClickHandle = e => {
    if (e.target.children.length === 1) {
      toggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={onClickHandle}>
      <Modal>{children}</Modal>
    </Backdrop>,
    modalRoot
  );
};
