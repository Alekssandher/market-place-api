import { model } from "mongoose";
import { Schema } from "mongoose";
import { User } from "../entities/User";

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true},
    addresses: [
        {
            street: { type: String, required: true },
            number: { type: String, required: true },
            complement: { type: String, required: false },
            zipcode: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    favoriteProducts: [
        {
            _id: { type: Schema.Types.ObjectId, ref: 'products' },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    createdAt: { type: Date, default: Date.now },
    admin: { type: Boolean, default: false }
})

export default model<User>("users", UserSchema);