import * as Yup from "yup"

export default Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().email().required("Email is required!"),
  socialPlatforms: Yup.array()
    .of(
      Yup.object({
        id: Yup.string(),
        value: Yup.string().required(),
      })
    )
    .min(1)
    .required("Social platforms is required!"),
  message: Yup.string(),
})
