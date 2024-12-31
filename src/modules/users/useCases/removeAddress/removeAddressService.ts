import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class RemoveAddressService {
    constructor(
        @inject("UserRepositories")
        private userRepositories: IUserRepositories
    ) {}

    async execute(userId: string, addressId: string): Promise<void> {
        const user = await this.userRepositories.findById(userId);
        if(!user) throw new Error("User not found");

        const address = await this.userRepositories.findAddressByID(userId, addressId);
        if(!address) throw new Error("Address not found");

        await this.userRepositories.removeAddress(userId, addressId);
    }
}