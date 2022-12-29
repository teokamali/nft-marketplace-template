import * as yup from "yup";

export const emailValidation = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Email Required"),
});
