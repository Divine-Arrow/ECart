import { Request, Response } from "express";
import sequelize, { QueryTypes } from "sequelize";
import seqDb from "./../config/db.config";

class ProductCtrl {
    
    public async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const result = await seqDb.query("SELECT * FROM `products`", { type: QueryTypes.SELECT });
            res.status(200).json({ result: result })
        } catch(error) {
            res.status(400).json({error})
        }
    }
};
export default ProductCtrl;