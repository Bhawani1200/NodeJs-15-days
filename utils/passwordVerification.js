// If some code has to be transported and used in other projects then we put such codes in utils
// If we want to use third party library we use it in utils
import PASSWORD_REGEX from "../constants/regex.js";
function verifyPassword(password, confirmPassword) {
  let isPasswordVerified = true;
  if (password !== confirmPassword) throw new Error("password do not match");
  if (password.length < 8) throw new Error("passwords must be greater than 8");
  if (!password.match(PASSWORD_REGEX))
    throw new Error(
      "password must contain uppercase,lowercase,letters,numbers and symbols"
    );
}
export default verifyPassword;
