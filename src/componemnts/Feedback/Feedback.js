import FeedbackFooter from "./FeedbackFooter";
import FeedbackForm from "./FeedbackForm";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../store/form";
import Modal from "../UI/Modal";
import {
  Circle,
  Clouds,
  Goodie1,
  MainSection,
  Map,
  Smile1,
  Smile2,
} from "./Feedback.styled";
import useFetchData from "../../hooks/useFetchData";

const Feedback = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return {
      name: state.form.name.value,
      email: state.form.email.value,
      message: state.form.message.value,
    };
  });
  const showModal = useSelector((state) => state.form.showModal);
  const modalMessage = useSelector((state) => state.form.modalMessage);
  const [error, skipError, requestFunction] = useFetchData();
  const handleClose = () => {
    dispatch(formActions.closeModal());
  };

  const dataProcess = (data) => {
    let modalMessage = "Storage failed!";
    if (data.id) {
      modalMessage = `Successfully stored to DB. Record ID: ${data.id}`;
    }
    if (data.error) {
      modalMessage = `${data.error}: ${data.message}`;
    }
    dispatch(formActions.setModalMessage(modalMessage));
    dispatch(formActions.showModal());
  };
  const storeMessage = () => {
    dispatch(formActions.setModalMessage(""));
    requestFunction(
      {
        url: "http://localhost:3001/messages",
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      },
      dataProcess
    );
  };
  if (error) {
    dispatch(formActions.setModalMessage(error));
    dispatch(formActions.showModal());
    skipError();
  }
  const ModalContent = showModal ? (
    <Modal onClick={handleClose}>
      <>
        <p>{modalMessage}</p>
        <p>Click on the screen to close this message</p>
      </>
    </Modal>
  ) : (
    ""
  );
  return (
    <>
      <MainSection>
        <Smile1 />
        <Smile2 />
        <Clouds />
        <Goodie1 />
        <Map />
        <Circle />
        <FeedbackForm storeMessage={storeMessage} />
        <FeedbackFooter />
      </MainSection>
      {ModalContent}
    </>
  );
};

export default Feedback;
