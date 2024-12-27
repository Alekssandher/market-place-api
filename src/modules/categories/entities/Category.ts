import { ObjectId } from "mongodb";

export class Category {
    _id: ObjectId;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    
    constructor(
        _id: ObjectId, 
        name: string, 
        description: string, 
        image: string, 
    )   {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.createdAt = new Date();
    }
}