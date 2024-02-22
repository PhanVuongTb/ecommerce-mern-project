import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController";

const router = express.Router();

router.post("/signin", loginUser);
router.post("/register", registerUser);

export default router;