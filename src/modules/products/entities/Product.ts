import { Category } from "modules/categories/entities/Category";
import { ObjectId } from "mongodb";

export class Product {
    _id: ObjectId;
    name: string;
    description: string;
    unitPrice: number;
    image: string;
    barCode: number;
    categories: Category[];
    createdAt: Date;
    
    constructor(
        _id: ObjectId, 
        name: string, 
        description: string, 
        unitPrice: number, 
        image: string, 
        barCode: number, 
        categories: Category[], 
    )   {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.image = image;
        this.barCode = barCode;
        this.categories = categories;
        this.createdAt = new Date();
    }
}