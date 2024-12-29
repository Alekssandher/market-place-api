import { User } from "modules/users/entities/User";
import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllService {
    constructor(
        @inject("UserRepositories")
        private userRepositories: IUserRepositories
    ) {}

    async execute(limit: number, offset: number): Promise<User[]> {

        const users =  await this.userRepositories.findAll(limit, offset);
        if(!users.length) throw new Error("Users not found");

        return users;
    }
}