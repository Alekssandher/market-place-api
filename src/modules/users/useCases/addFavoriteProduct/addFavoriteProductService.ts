import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class AddFavoriteProductService {
    constructor(
        @inject("UserRepositories")
        private userRepositories: IUserRepositories
    ) {}

    async execute(userId: string, productId: string): Promise<void> {
        const user = await this.userRepositories.findById(userId);
        if(!user) throw new Error("User not found");

        await this.userRepositories.addFavoriteProduct(userId, productId);
    }
}