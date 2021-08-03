import express, { Router } from "express";
// import ProductCtrl from "@co ntroller/product.ctrl";
import ProductCtrl from "../controller/product.ctrl";
import ProductVal from "../validator/product.validator";

// create instance from classes
const productCtrl = new ProductCtrl;
const productVal = new ProductVal;

const expRouter: Router  = express.Router();

// expRouter.get("/products", productCtrl.getAllProducts );
expRouter.post("/products", productVal.validateNewProd, productCtrl.createProd );   // Create New Product
expRouter.put("/products/:id", productVal.validateUpdateProd, productCtrl.updateProd ); // Update existing product
expRouter.patch("/products/disable/:id", productCtrl.disableProd ); // Disable a product
expRouter.get("/products", productCtrl.getFilteredProd ); // Disable a product
expRouter.delete("/products/:id", productCtrl.deleteProduct ); // Disable a product


// expRouter.delete("/products/:id", productVal.validateUpdateProd, productCtrl.disableProd );  // delete

export default expRouter;