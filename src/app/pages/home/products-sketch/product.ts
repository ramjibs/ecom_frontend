export class Product {


    public id: string;
    public description: string;
    public name: string;
    public discount: number;
    public price: number;
    public image: string;

}

export class AddProduct {
    public name: string; 
    public description: string;
    public discount: number;
    public price: number;
    public image: string;
}

export class UpdateProduct {

    public id: string;
    public description: string;
    public name: string;
    public discount: number;
    public price: number;
    public image: string;

}

export class DeleteProduct {
    public id: string;
}