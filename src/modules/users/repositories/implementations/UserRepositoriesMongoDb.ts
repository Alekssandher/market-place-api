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
}