import { Request, Response } from "express";
import ProductMdl from "../service/product.service";

const ProductModel = new ProductMdl();


export default class ProductCtrl {


    private errorHandler(req: Request, res: Response, error: Error) {
        res.status(400).json({error});
    }

    public async createProd(req: Request, res: Response): Promise<void> {
        try {
            const { name, category, price, desc, title } = req.body;
            await ProductModel.create({ name, category, price, desc, title });
            res.status(201).json({ result: "Resource Created Successfully" });
        } catch(error) { this.errorHandler(req, res, error); }
    }

    public async updateProd(req: Request, res: Response): Promise<void> {
        try {
            const productId = (+ req.params.id);
            const { name, category, price, desc, title } = req.body;
            await ProductModel.update( productId , { name, category, price, desc, title });
            res.status(200).json({ result: "Resource updated successfully" });
        } catch(error) { this.errorHandler(req, res, error); }
    }
}