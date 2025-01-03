import { Product } from "modules/products/entities/Product";
import { Address } from "../entities/Address";
import { User } from "../entities/User";

export interface IUserRepositories {
    create(body: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findAll(limit: number, offset: number): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    update(id: string, body: User): Promise<void>;
    delete(id: string): Promise<void>;
    addNewAddress(userId: string, address: Address): Promise<void>;
    removeAddress(userId: string, addressId: string): Promise<void>;
    findAddressByID(userId: string, addressId: string): Promise<Address | null>;
    addFavoriteProduct(userId: string, productId: string): Promise<void>;
    findFavoritProductById(userId: string, productId: string): Promise<Product | null>;
    removeFavoriteProduct(userId: string, productId: string): Promise<void>;
}   