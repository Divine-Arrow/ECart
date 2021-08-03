import Product from "../model/product.model";

interface productSkeleton {
    name: string,
    category: string,
    price: number,
    desc?: string,
    title?: string,
    isDisabled?: boolean
}
/* 
interface filterSkeleton {
    name: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
    _id: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
    category: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
    priceFrom: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined,
    priceTo: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined
}
 */
export default class ProductMdl {

    // eslint-disable-next-line
    public create(data: productSkeleton): any {
        return new Promise((resolve, reject) => {
            const newProduct = data;
            Product.create(newProduct)
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }

    public update(_id: number, data: productSkeleton): Promise<void> {
        return new Promise((resolve, reject) => {
            Product.update( data, { where: { _id } })
                .then(() => resolve())
                .catch(() => reject());
        });
    }

    public disableIt(_id: number ): Promise<void> {
        return new Promise((resolve, reject) => {
            Product.update( { isDisabled: true }, { where: { _id } })
                .then( data => ( data[0] > 0 )? resolve(): reject({status: 406}))
                .catch(() => reject());
        });
    }

    //  Stucked here for filter type
    // public searchProducts(filter: Partial<filterSkeleton> ): Promise<any> {
    public searchProducts(filter: any): Promise<any> {
    return new Promise((resolve, reject) => {
            Object.keys(filter).forEach(key => (filter[key] === undefined && delete filter[key]));
            Product.findAll({ where: filter, attributes: ["_id", "name", "category", "price", "desc", "title" ]} )
                .then( data => { console.log({data}); resolve(data)})
                .catch((err) => { console.log({err}); reject()});
        });
    }
    
    public delete(_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
            Product.destroy({ where: { _id }})
                .then( (data: any) => ( data[0] > 0 )? resolve(true): reject({status: 406}))
                .catch((err) => { console.log({err}); reject()});
        });
    }
}
