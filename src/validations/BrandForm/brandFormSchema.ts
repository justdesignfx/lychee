import * as Yup from "yup"
import BrandFormModel from "./brandFormModel"

const {
  formField: { name, email, company, websiteUrl, role, message, socialPlatforms, budget },
} = BrandFormModel

export default [
  Yup.object().shape({
    name: Yup.string().required(`${name.requiredErrorMsg}`),
    email: Yup.string().email().required(`${email.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    company: Yup.string().required(`${company.requiredErrorMsg}`),
    websiteUrl: Yup.string().required(`${websiteUrl.requiredErrorMsg}`),
    [role.name]: Yup.string().required(`${role.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    message: Yup.string().required(`${message.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    socialPlatforms: Yup.array().of(Yup.string()).min(1).required(`${socialPlatforms.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    budget: Yup.string().required(`${budget.requiredErrorMsg}`),
  }),
]
