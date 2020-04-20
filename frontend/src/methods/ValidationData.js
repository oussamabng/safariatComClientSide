import ValidationEmail from "./ValidationEmail.js";

//?check if the password have at least 6 chars, 1 uppercase , 1 lowercase and 1 number.
var checkPassword = function (password) {
  var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;
  return re.test(String(password));
};

//?validate data from user on register or login
const ValidationData = (data) => {
  const { username, fullname, email, password, confirmPassword } = data;
  let errors = [];
  if (username.length <= 4) {
    errors.push({
      id: "username",
      error: "username too short",
    });
  }
  if (fullname.length < 6) {
    errors.push({
      id: "full-name",
      error: "fullname is too short",
    });
  }
  if (!ValidationEmail(email)) {
    errors.push({
      id: "email",
      error: "enter a valid email address",
    });
    if (!checkPassword(password)) {
      errors.push(
        {
          id: "password",
          error:
            "password must be at least six characters , one letter uppercase , one letter lowercase and one letter a number",
        },
        {
          id: "confirm-password",
          error:
            "password must be at least six characters , one letter uppercase , one letter lowercase and one letter a number",
        }
      );
    } else if (password !== confirmPassword) {
      console.log("smykm");
      errors.push(
        {
          id: "confirm-password",
          error: "Your password and confirmation password do not match",
        },
        {
          id: "password",
          error: "Your password and confirmation password do not match",
        }
      );
    }
  }
  return errors;
};
export default ValidationData;
