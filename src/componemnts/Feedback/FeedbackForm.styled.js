import styled from "styled-components";

export const Form = styled.form`
  width: 563px;
  height: 575px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 179px;
  left: 147px;
  overflow: hidden;
`;
export const FormTitle = styled.p`
  width: 563px;
  color: #3e3e3e;
  position: relative;
  top: 0px;
  left: 0px;
  font-family: Apercu Arabic Pro;
  font-weight: normal;
  font-size: 40px;

  text-align: left;
`;
export const InputName = styled.input.attrs({
  name: "name",
  id: "name",
  type: "text",
  placeholder: "Your name*",
})`
  top: 88px;
  left: 3px;
`;
export const InputEmail = styled.input.attrs({
  name: "email",
  id: "email",
  type: "e-mail",
  placeholder: "Your e-mail*",
})`
  top: 189px;
  left: 3px;
`;
export const InputMessage = styled.textarea.attrs({
  placeholder: "Your message*",
})`
  top: 290px;
  left: 3px;
  height: 189px !important;
  resize: none;
  padding-top: 31px !important;
`;
export const Button = styled.button`
  position: absolute;
  width: 218px;
  height: 73px;
  background: rgba(250, 211, 79, 1);
  border: none;
  border-radius: 500px;
  color: rgba(255, 255, 255, 1);
  top: 502px;
  left: 3px;
  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  opacity: 1;
`;
