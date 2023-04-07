import * as Yup from "yup"
import BrandFormModel from "./brandFormModel"

const {
  formField: { name, email, company, websiteUrl, role, message, socialPlatforms, budget },
} = BrandFormModel

export default [
  Yup.object().shape({
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
    [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [company.name]: Yup.string().required(`${company.requiredErrorMsg}`),
    [websiteUrl.name]: Yup.string().required(`${websiteUrl.requiredErrorMsg}`),
    [role.name]: Yup.string().required(`${role.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [message.name]: Yup.string().required(`${message.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [socialPlatforms.name]: Yup.array().of(Yup.string()).min(1).required(`${socialPlatforms.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [budget.name]: Yup.string().required(`${budget.requiredErrorMsg}`),
  }),
]
