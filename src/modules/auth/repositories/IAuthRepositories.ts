import { User } from "modules/users/entities/User";
import { ObjectId } from "mongodb";

export interface IAuthRepositories {
    findUserByEmail(email: string): Promise<User | null>;
    generateToken(userId: ObjectId): string;
}