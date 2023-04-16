import { uIdGenerator } from "./../../utils/index"
export interface ISocialPlatform {
  id: string
  value: string
}

export interface IContentCreatorForm {
  [key: string]: any | ISocialPlatform
}

export const initialValues: IContentCreatorForm = {
  name: "",
  email: "",
  message: "",
  socialPlatforms: [{ id: uIdGenerator(), value: "" }],
}
