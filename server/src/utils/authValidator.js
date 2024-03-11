exports.validateData = (data) => {
  const errors = [];

  if (data.firstName.length < 4)
    errors.push("First name has to be at least 4 characters long");
  if (data.lastName.length < 4)
    errors.push("Last name has to be at least 4 characters long");
  if (data.username.length < 4)
    errors.push("Username has to be at least 4 characters long");
  if (data.password.length < 6)
    errors.push("Password has to be at least 6 characters long");
  if (data.password !== data.repeatPassword)
    errors.push("Passwords do not match");

  return errors;
};
