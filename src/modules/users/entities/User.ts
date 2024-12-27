import { Product } from "modules/products/entities/Product";
import { ObjectId } from "mongodb";
import { Address } from "./Address";

export class User {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    image: string;
    addresses: Address[];
    favoriteProducts: Product[];
    admin: boolean;
    createdAt: Date;

    constructor(
        _id: ObjectId, 
        name: string, 
        email: string, 
        password: string, 
        image: string, 
        addresses: Address[], 
        favoriteProducts: Product[], 
        admin: boolean, 
        
    )   {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
        this.addresses = addresses;
        this.favoriteProducts = favoriteProducts;
        this.admin = admin;
        this.createdAt = new Date();
        
    }


}