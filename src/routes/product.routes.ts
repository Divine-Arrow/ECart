import express, { Router } from "express";
// import ProductCtrl from "@co ntroller/product.ctrl";
import ProductCtrl from "../controller/product.ctrl";
import ProductVal from "../validator/product.validator";

// create instance from classes
const productCtrl = new ProductCtrl;
const productVal = new ProductVal;

const expRouter: Router  = express.Router();

// expRouter.get("/products", productCtrl.getAllProducts );
expRouter.post("/products", productVal.validateNewProd, productCtrl.createProd );
expRouter.put("/products/:id", productVal.validateUpdateProd, productCtrl.updateProd );

export default expRouter;