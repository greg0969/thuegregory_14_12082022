import React, { useEffect, useRef } from "react";
import closeIcon from "./close.svg";
import styles from "./Modal.module.css";

const Modal = ({
  children,
  showIcon,
  show,
  setShow,
  closeAnywhere,
  overlayClassname,
  sectionClassname,
  iconClassname,
  overlayStyle,
  sectionStyle,
  iconStyle,
}) => {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (show && closeAnywhere && !modalRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleEscape = (e) => {
    if ((show && e.key === "Escape") || e.key === "Esc") {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  });

  return (
    <div
      className={`${styles.overlay} ${show ? styles.show : styles.hide} ${
        overlayClassname ?? null
      }`}
      style={overlayStyle ?? null}
    >
      <section
        className={`${styles.content} ${sectionClassname ?? null}`}
        ref={closeAnywhere ? modalRef : null}
        style={sectionStyle ?? null}
      >
        {showIcon && (
          <img
            src={closeIcon}
            alt="close modal"
            className={`${styles.close} ${iconClassname ?? null}`}
            style={iconStyle ?? null}
            onClick={() => setShow(false)}
          />
        )}
        {children}
      </section>
    </div>
  );
};

export default Modal;
