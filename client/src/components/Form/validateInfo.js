export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[\w]+[\w.%+-]*@[\w.-]+\.iitr\.ac\.in$/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.cpassword) {
    errors.cpassword = "Password is required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Passwords do not match";
  }
  return errors;
}
