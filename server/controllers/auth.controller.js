import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const registerController = async(req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already exists",
      });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    await user.save();
    return res.status(201).send({
      success: true,
      message: "User Register Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
    });
  }
};
