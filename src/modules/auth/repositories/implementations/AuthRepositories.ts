import { User } from "modules/users/entities/User";
import { IAuthRepositories } from "../IAuthRepositories";
import { ObjectId } from "mongodb";
import UserSchemma from "modules/users/schemas/UserSchemma";
import "dotenv/config";
import jwt from "jsonwebtoken";

export class AuthRepositoriesMongoDb implements IAuthRepositories {
    async findUserByEmail(email: string): Promise<User | null> {
        const user = await UserSchemma.findOne({email});

        return user;
    }

    generateToken(userId: ObjectId): string {
        const secret = process.env.SECRET_JWT as string;

        return jwt.sign({id: userId}, secret, {expiresIn: 86400});
    }
}