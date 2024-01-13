import * as Yup from 'yup'

export const contactForm =Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your name"),
    mobile:Yup.number().required("Please enter valid mobile number"),
    email:Yup.string().min(5).max(30).required("Please enter a valid email id"),
    message:Yup.string(),
});