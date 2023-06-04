import  express from "express";
import { checkOtpRegister, login, otpRegister } from "../controllers/userController.js";
import { checkAddProduct, checkBuyProduct, checkFields, checkFieldsForVerification, checkLogin } from "../middlewares/authMiddleware.js";
import { addProduct, buyProduct } from "../controllers/prodController.js";

const router = express.Router();

router.post("/otpRegister", checkFields, otpRegister);
router.post("/checkRegister", checkFieldsForVerification ,checkOtpRegister);
router.post("/login", checkLogin, login);
router.post("/addProduct",checkAddProduct, addProduct);
router.post("/buyProduct", checkBuyProduct, buyProduct);

export default router;