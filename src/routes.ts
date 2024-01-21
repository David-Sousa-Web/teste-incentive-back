import { Router } from "express";
import { GetPayment } from "./controllers/payment-controller/get-payment-controller";
import { CreatePayment } from "./controllers/payment-controller/create-payment-controller";
import { DeletePayment } from "./controllers/payment-controller/delete-payment-controller";
import { UpdatePayment } from "./controllers/payment-controller/update-payment-controller";
import { CreateUser } from "./controllers/user-controller/create-user-controller";
import { LoginUser } from "./controllers/user-controller/login-user-controller";

const routes = Router();

routes.post("/user", CreateUser);
routes.post("/login", LoginUser);

routes.get("/payment", GetPayment);
routes.post("/payment", CreatePayment);
routes.delete("/payment/:paymentID", DeletePayment);
routes.patch("/payment/:paymentID", UpdatePayment);

export default routes;
