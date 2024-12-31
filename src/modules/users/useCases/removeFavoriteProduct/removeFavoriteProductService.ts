import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class RemoveFavoriteProductService {
    constructor (
        @inject("UserRepositories")
        private userRepositories: IUserRepositories
    ) {}

    async execute(userId: string, productId: string): Promise<void> {
        const user = await this.userRepositories.findById(userId);
        if(!user) throw new Error("User not found");

        const product = await this.userRepositories.findFavoritProductById(userId, productId);
        if(!product) throw new Error("Product not found");
        
        await this.userRepositories.removeFavoriteProduct(userId, productId)
    }
}