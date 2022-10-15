import { useRef } from "react";
import classes from "./FeedbackForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../store/form";
import {
  Button,
  Form,
  FormTitle,
  InputEmail,
  InputMessage,
  InputName,
} from "./FeedbackForm.styled";

const FeedbackForm = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.form.name.value);
  const email = useSelector((state) => state.form.email.value);
  const message = useSelector((state) => state.form.message.value);
  const isNameValid = useSelector((state) => state.form.name.isValid);
  const isEmailValid = useSelector((state) => state.form.email.isValid);
  const isMessageValid = useSelector((state) => state.form.message.isValid);
  const isFormValid = useSelector((state) => state.form.isFormValid);
  const ErrorMessage =
    "Data filled out incorrect! Name must be text(length 3-64), Message must be text(length 3-1024 ), Email must be valid e - mail(length < 65).";
  const textValidationFunction = (val, maxLength = 1024, minLength = 3) => {
    return val !== "" && val.length >= minLength && val.length <= maxLength;
  };
  const emailValidationFunction = (val, maxLength = 64) => {
    if (val.length > maxLength) return false;
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val);
  };
  const nameChangeHandler = () => {
    dispatch(
      formActions.setName({
        value: nameRef.current.value,
        isValid: textValidationFunction(nameRef.current.value, 64),
      })
    );
  };
  const emailChangeHandler = () => {
    dispatch(
      formActions.setEmail({
        value: emailRef.current.value,
        isValid: emailValidationFunction(emailRef.current.value),
      })
    );
  };
  const messageChangeHandler = () => {
    dispatch(
      formActions.setMessage({
        value: messageRef.current.value,
        isValid: textValidationFunction(messageRef.current.value),
      })
    );
  };
  const buttonClickHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      nameChangeHandler();
      emailChangeHandler();
      messageChangeHandler();
      dispatch(formActions.setModalMessage(ErrorMessage));
      dispatch(formActions.showModal());
    } else {
      props.storeMessage();
    }
  };

  return (
    <Form>
      <FormTitle>Reach out to us!</FormTitle>
      <InputName
        className={
          isNameValid
            ? classes["form-input"]
            : `${classes["input-invalid"]} ${classes["form-input"]}`
        }
        value={name}
        onChange={nameChangeHandler}
        ref={nameRef}
      />
      <InputEmail
        className={
          isEmailValid
            ? classes["form-input"]
            : `${classes["input-invalid"]} ${classes["form-input"]}`
        }
        value={email}
        onChange={emailChangeHandler}
        ref={emailRef}
      />
      <InputMessage
        className={
          isMessageValid
            ? classes["form-input"]
            : `${classes["input-invalid"]} ${classes["form-input"]}`
        }
        value={message}
        onChange={messageChangeHandler}
        ref={messageRef}
      ></InputMessage>
      <Button onClick={buttonClickHandler}>Send message</Button>
    </Form>
  );
};

export default FeedbackForm;
