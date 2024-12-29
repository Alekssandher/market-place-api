import { User } from "modules/users/entities/User";
import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindByIdService {
    constructor(
        @inject("UserRepositories")
        private userRepositories: IUserRepositories
    ) {}

    async execute(id: string): Promise<User> {

        const user =  await this.userRepositories.findById(id);

        if(!user) throw new Error("Users not found");

        return user;
    }
}
