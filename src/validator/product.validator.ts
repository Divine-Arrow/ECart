import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export default class ProductVal {
    
    static newProductSkel = {
        name: Joi.string().required(),
        category: Joi.string().required(),
        price: Joi.number().required(),
        desc: Joi.string(),
        title: Joi.string(),
        id: Joi.number()
    };

    static updateProductSkel = {
        name: Joi.string(),
        category: Joi.string(),
        price: Joi.number(),
        desc: Joi.string(),
        title: Joi.string(),
        id: Joi.number()
    };

    public async validateNewProd(req: Request, res: Response, next: NextFunction ): Promise<void> {
        try {
            const productVal = Joi.object(ProductVal.newProductSkel);
            const inpData = { id: req.params.id , ...req.body };
            await productVal.validateAsync(inpData);
            next();
        } catch(err) {
            console.log({err});
            const error: string = err?.details[0]?.message ?? "Something went wrong.";
            res.status(406).json({ error });
        }
    }
    public async validateUpdateProd(req: Request, res: Response, next: NextFunction ): Promise<void> {
        try {
            const productVal = Joi.object(ProductVal.updateProductSkel);
            const inpData = { ...req.body, id: req.params.id };
            await productVal.validateAsync(inpData);
            next();
        } catch(err) {
            console.log({err});
            const error: string = err?.details[0]?.message ?? "Something went wrong.";
            res.status(406).json({ error });
        }
    }

}