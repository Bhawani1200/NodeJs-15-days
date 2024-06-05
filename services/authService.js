import EMAIL_REGEX from "../constants/regex.js";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
const registerUser = async (data) => {
  const { name, email, password, confirmPassword, roles } = data;
  try {
    const emailExists = await User.findOne({ email: data.email });
    if (emailExists) throw new Error("Email already exists");
    const isValidEmail = data.email.match(EMAIL_REGEX);
    if (!isValidEmail) throw new Error("Invalid email address");
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const createUser = await User.create({
      ...data,
      password: hashedPassword,
    });
    return {
      id: createUser._id,
      email: createUser.email,
      password: createUser.password,
      name: createUser.name,
      roles: createUser.roles,
      createdAt: createUser.createdAt,
    };
  } catch (error) {
    throw error;
  }
};
const loginUser = async (data) => {
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (!existingUser) throw new Error("Email not found");
    const isMatched = await bcrypt.compare(
      data.password,
      existingUser.password
    );
    if (!isMatched) throw new Error("password not matched");
    return existingUser;
  } catch (error) {
    throw error;
  }
};
export default {
  registerUser,
  loginUser,
};
