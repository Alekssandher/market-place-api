import { Address } from "modules/users/entities/Address";
import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class AddAddressService {
    constructor(
        @inject("UserRepositories")
        private userRepositories: IUserRepositories
    ) {}

    async execute(userId: string, address: Address): Promise<void> {
        const user = await this.userRepositories.findById(userId);

        if(!user) throw new Error("User not found");
        
        await this.userRepositories.addNewAddress(userId, address);
    }
}