import { User } from "modules/users/entities/User";
import { IUserRepositories } from "../IUserRepositories";
import UserSchemma from "modules/users/schemas/UserSchemma";
import { Address } from "modules/users/entities/Address";

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
}