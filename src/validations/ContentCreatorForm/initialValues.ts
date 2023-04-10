import contentCreatorFormModel from "./contentCreatorFormModel"

const {
  formField: { name, email, message, socialPlatforms },
} = contentCreatorFormModel

export interface ISocialPlatform {
  id: string
  label: string
  value: string
}

export interface IContentCreatorForm {
  [key: string]: any | ISocialPlatform
}

export const initialValues: IContentCreatorForm = {
  [name.name]: "",
  [email.name]: "",
  [message.name]: "",
  [socialPlatforms.name]: [{ id: "", label: "", value: "" }],
}
