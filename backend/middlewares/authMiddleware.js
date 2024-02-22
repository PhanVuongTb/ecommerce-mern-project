import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Users from "../models/UserModel";

export const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.header.authorization && req.headers.authorization.startsWith("Bearer")
    ) try {
        token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.TOKEN_KEY);
        req.use = await Users.findById(decode.id).select("-password");
        next();
    } catch {
        console.error(error);
        res.status(401);
        throw new Error("Not Authorized , Token failed");
    }
    if (!token) {
    res.status(401);
    throw new Error("Not Authorized, not token");
  }
})