const initialstate = {
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
  },
  error: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
  },
};
function formReducer(state = initialstate, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return;
    default:
      break;
  }
}
