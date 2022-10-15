import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  const clas = `${classes["modal-div"]} ${props.className}`;
  return (
    <div onClick={props.onClick} className={classes.modal}>
      <div className={clas}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay onClick={props.onClick} className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
