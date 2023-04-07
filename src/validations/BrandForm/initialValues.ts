import BrandFormModel from "./brandFormModel"

const {
  formField: { name, email, company, websiteUrl, role, message, socialPlatforms, budget },
} = BrandFormModel

export interface IBrandForm {
  [key: string]: string | string[]
}

export const initialValues: IBrandForm = {
  [name.name]: "",
  [email.name]: "",
  [company.name]: "",
  [websiteUrl.name]: "",
  [role.name]: "",
  [message.name]: "",
  [socialPlatforms.name]: [],
  [budget.name]: "",
}
