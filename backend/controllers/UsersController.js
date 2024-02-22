import User from "../models/UserModel";
import asyncHandler from "express-async-handler";


export const getUser = asyncHandler(async (req, res) => {
    const user = await User.find({})
    // throw new Error("Some Eror");
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "Product Not Found" });
    }
 });

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});