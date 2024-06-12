import userService from "../services/userService.js";
const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const logOutUser=async(req,res)=>{
  try {
    res.clearCookie("cookie")
    res.json("Okay")
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.forgetPassword(email);
    res.json(user);
  } catch (error) {
    throw error;
  }
};
export default {
  registerUser,
  loginUser,
  forgetPassword,
 logOutUser
};
