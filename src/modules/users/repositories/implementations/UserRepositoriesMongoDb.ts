import { User } from "modules/users/entities/User";
import { IUserRepositories } from "../IUserRepositories";
import UserSchemma from "modules/users/schemas/UserSchemma";

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
}