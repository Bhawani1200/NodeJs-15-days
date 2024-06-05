import EMAIL_REGEX from "../constants/regex.js";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import sendEmail from "../utils/sendEmail.js";
import { Error } from "mongoose";
const registerUser = async (data) => {
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
      name: createUser.name,
      roles: createUser.roles,
      password: createUser.password,
      createdAt: createUser.createdAt,
    };
  } catch (error) {
    throw error;
  }
};
const loginUser = async (data) => {
  try {
    const emailExists = await User.findOne({ email: data.email });
    if (!emailExists) throw new Error("Email not found");
    const isMatched = await bcrypt.compare(data.password, emailExists.password);
    if (!isMatched) throw new Error("password not matched");
    return { status: "okay" };
  } catch (error) {
    throw error;
  }
};
const forgetPassword = async (email) => {
  try {
    const emailExists = await User.find({ email });
    if (!emailExists) throw new Error("No email exists");
    //send otp to that user
    const otp = Math.floor(1000 + Math.random() * 9000);
    //   emailExists.otp= otp
    //   await emailExists.save()
    const resetPasswordUser = await User.findOneAndUpdate(
      { email },
      { $set: { otp } }
    );

    await sendEmail({
      email: "bhawanilimbu1200@gmail.com",
      subject: "Your otp for the forget password ",
      message: `Your otp for the forget password is ${otp}`,
    });
    return resetPasswordUser;
  } catch (error) {
    throw error;
  }
};

export default {
  registerUser,
  loginUser,
  forgetPassword,
  verifyOtp,
};
