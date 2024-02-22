import express from "express";
import { getUser, getUserProfile } from "../controllers/UsersController";

const router = express.Router();

//get user profile Private Route
router.get("/users", getUser);
router.get("/users/profile", getUserProfile);
router.put("/users/profile", getUserProfile);

export default router;