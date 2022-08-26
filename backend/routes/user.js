import express from "express";
// controller functions
import { sigupUser,loginUser } from "../controllers/userController.js";
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", sigupUser);


export default router;