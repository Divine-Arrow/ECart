import express, { Router, Request, Response } from "express";
// import ProductCtrl from "@controller/product.ctrl";
import ProductCtrl from "../controller/product.ctrl";

// create instance of product ctrl
const productCtrl = new ProductCtrl;

const expRouter: Router  = express.Router();

expRouter.get("/test", (req: Request, res: Response) => res.send("Hello world"));
expRouter.get("/products", productCtrl.getAllProducts );

export default expRouter;