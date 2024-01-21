import { Router } from "express";
import { GetPayment } from "./controllers/payment-controller/get-payment-controller";
import { CreatePayment } from "./controllers/payment-controller/create-payment-controller";
import { DeletePayment } from "./controllers/payment-controller/delete-payment-controller";
import { UpdatePayment } from "./controllers/payment-controller/update-payment-controller";

const routes = Router();

routes.get("/payment", GetPayment);
routes.post("/payment", CreatePayment);
routes.delete("/payment/:paymentID", DeletePayment);
routes.patch("/payment/:paymentID", UpdatePayment);

export default routes;
