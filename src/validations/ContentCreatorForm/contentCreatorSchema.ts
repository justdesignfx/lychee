import * as Yup from "yup"
import contentCreatorFormModel from "./contentCreatorFormModel"

const {
  formField: { name, email, message, socialPlatforms },
} = contentCreatorFormModel

export default Yup.object({
  [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
  [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
  [socialPlatforms.name]: Yup.array()
    .of(
      Yup.object({
        id: Yup.string(),
        label: Yup.string(),
        value: Yup.string(),
      })
    )
    .min(1)
    .required(`${socialPlatforms.requiredErrorMsg}`),
  [message.name]: Yup.string().required(`${message.requiredErrorMsg}`),
})
