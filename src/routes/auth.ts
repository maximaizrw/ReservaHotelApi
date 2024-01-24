import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/authController";

const router = Router();

/*
* http://localhost:3000/auth/login -> POST
*/
router.post("/login", loginCtrl);

/*
* http://localhost:3000/auth/register -> POST
*/
router.post("/register", registerCtrl)

export { router }