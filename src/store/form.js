import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  name: { value: "", isValid: true },
  email: { value: "", isValid: true },
  message: { value: "", isValid: true },
  isFormValid: false,
  modalMessage: "",
  showModal: false,
};
const validateForm = (state) => {
  if (
    state.name.value !== "" &&
    state.email.value !== "" &&
    state.message.value !== "" &&
    state.name.isValid &&
    state.email.isValid &&
    state.message.isValid
  )
    state.isFormValid = true;
  else state.isFormValid = false;
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    setName: (state, action) => {
      state.name.value = action.payload.value;
      state.name.isValid = action.payload.isValid;
      validateForm(state);
    },
    setEmail: (state, action) => {
      state.email.value = action.payload.value;
      state.email.isValid = action.payload.isValid;
      validateForm(state);
    },
    setMessage: (state, action) => {
      state.message.value = action.payload.value;
      state.message.isValid = action.payload.isValid;
      validateForm(state);
    },
    showModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    setModalMessage: (state, action) => {
      state.modalMessage = action.payload;
    },
  },
});
export const formActions = formSlice.actions;
export default formSlice.reducer;
