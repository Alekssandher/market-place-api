import { User } from "modules/users/entities/User";
import { IUserRepositories } from "../IUserRepositories";
import UserSchemma from "modules/users/schemas/UserSchema";
import { Address } from "modules/users/entities/Address";
import { Product } from "modules/products/entities/Product";

export class UserRepositoryMongoDb implements IUserRepositories {
    
    
    async create(body: User): Promise<void> {
        await UserSchemma.create(body);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await UserSchemma.findOne({email});

        return user;
    }

    async findAll(limit: number, offset: number): Promise<User[]> {

        return await UserSchemma.find().select(["-password", "-__v"]).limit(limit).skip(offset);
    }

    async findById(id: string): Promise<User | null> { 
        const user = await UserSchemma.findById(id).select(["-password", "-__v"]);
        return user;
    }

    async update(id: string, body: User): Promise<void> {
        await UserSchemma.findByIdAndUpdate(id, body);
    }

    async delete(id: string): Promise<void> {
        await UserSchemma.findByIdAndDelete(id);
    }

    async addNewAddress(userId: string, address: Address): Promise<void> {
        await UserSchemma.findOneAndUpdate( 
            {
                _id: userId,
            },
            {
                $push: {
                    addresses: address,
                },
            }
        )
    }
    async findAddressByID(userId: string, addressId: string): Promise<Address | null> {
        return await UserSchemma.findOne(
            {_id: userId, "addresses._id": addressId}, 
            {"addresses.$": 1}
        );
    }
    async removeAddress(userId: string, addressId: string ): Promise<void> {
        await UserSchemma.findOneAndUpdate( 
            {
                _id: userId,
            },
            {
                $pull: {
                    addresses: {
                        _id: addressId
                    }
                },
            }
        )
    }

    async addFavoriteProduct(userId: string, productId: string): Promise<void> {
        await UserSchemma.findOneAndUpdate( 
            {
                _id: userId,
            },
            {
                $push: {
                    favoriteProducts: {
                        _id: productId
                    }
                },
            }
        )
    }

    async findFavoritProductById(userId: string, productId: string): Promise<Product | null> {
        return await UserSchemma.findOne(
            { _id: userId, "favoriteProducts._id": productId},
            { "favoriteProducts.$": 1}
        )
    }

    async removeFavoriteProduct(userId: string, productId: string): Promise<void> {
        await UserSchemma.findOneAndUpdate(
            { 
                _id: userId
            },
            {
                $pull: {
                    favoriteProducts: {
                        _id: productId,
                    }
                }
            }
        )
    }
}