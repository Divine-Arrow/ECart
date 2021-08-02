import Product from "../model/product.model";

interface productSkeleton {
    name: string,
    category: string,
    price: number,
    desc?: string,
    title?: string
}

export default class ProductMdl {
    public create(data: productSkeleton): Promise<void> {
        return new Promise((resolve, reject) => {
            const newProduct = data;
            Product.create(newProduct)
                .then(() => resolve())
                .catch(() => reject());
        });
    }

    public update(_id: number, data: productSkeleton): Promise<void> {
        return new Promise((resolve, reject) => {
            Product.update( data, { where: { _id } })
                .then(() => resolve())
                .catch(() => reject());
        });
    }
}
