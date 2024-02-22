import User from "../models/UserModel";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import ErrorHandler from "../utils/ErrorHandler";


export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "15d" }
    );

    // Set the access token as a cookie
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 9000000,
    });

    // Respond with user information (except password) and access token
    const { password, ...userWithoutPassword } = user.toObject()

    res.status(200).json({
      user: userWithoutPassword, accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

// api logout 
export const logout = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(201).json({
      success: true,
      message: "Log out successful!",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};