import { Request, Response } from "express";
import ProductMdl from "../service/product.service";
import qs, { ParsedQs } from "qs";
import { Op } from "sequelize";
// import assert from "assert";

const ProductModel = new ProductMdl();

/* interface Foo {
    name: string;
    id: number;
    category: string;
    price: {
        from: number;
        to: number;
    }
}
 */
export default class ProductCtrl {


    static errorHandler(req: Request, res: Response, err: any ): void {
        const status: number = (typeof err?.status === "number") ? err.status: 400;
        const error: string | Record<string, unknown> = err?.error ? err.error : "Something went wrong.";
        res.status(status).json({error});
        console.log({error});
    }

    public async createProd(req: Request, res: Response): Promise<void> {
        try {
            const { name, category, price, desc, title } = req.body;
            const result = await ProductModel.create({ name, category, price, desc, title });
            res.status(201).json({ message: "Resource Created Successfully", result });
        } catch(error) { ProductCtrl.errorHandler(req, res, error); }
    }

    public async updateProd(req: Request, res: Response): Promise<void> {
        try {
            const productId = (+ req.params.id);
            const { name, category, price, desc, title } = req.body;
            await ProductModel.update( productId , { name, category, price, desc, title });
            res.status(200).json({ result: "Resource updated successfully" });
        } catch(error) { ProductCtrl.errorHandler(req, res, error); }
    }

    public async disableProd(req: Request, res: Response): Promise<void> {
        try {
            const productId = (+ req.params.id);
            await ProductModel.disableIt(productId);
            res.status(200).json({ result: "Resource updated successfully" });
        } catch(error) { console.log({error}); ProductCtrl.errorHandler(req, res, error); }
    }

    public async getFilteredProd(req: Request, res: Response): Promise<void> {
        try {
            const { name, id, category } = req.query;
            let price: any = req.query.price;
            if(price) price = qs.parse(price);
            const filterParam = {
                isDisabled: false,
                name, _id: id, category,
                price: {
                    [Op.gte]: (+ price.from),
                    [Op.lte]: (+ price.to)
                }
                /* price: {
                    $between: [(+ price.from), (+ price.to)]
                } */
            }
            const result = await ProductModel.searchProducts(filterParam);
            res.status(200).json({ result });
        } catch(error) { ProductCtrl.errorHandler(req, res, error); }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const productId = (+ req.params.id);
            await ProductModel.delete(productId);
            res.status(200).json({ result: "Resource updated successfully" });
        } catch(error) { console.log({error}); ProductCtrl.errorHandler(req, res, error); }
    }
}