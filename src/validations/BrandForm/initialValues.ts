import BrandFormModel from "./brandFormModel"

const {
  formField: { name, email, company, websiteUrl, role, message, social, budget },
} = BrandFormModel

export default {
  [name.name]: "",
  [email.name]: "",
  [company.name]: "",
  [websiteUrl.name]: "",
  [role.name]: "",
  [message.name]: "",
  [social.name]: "",
  [budget.name]: "",
}
