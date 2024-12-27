import { Auth } from "modules/auth/entities/Auth";
import { IAuthRepositories } from "modules/auth/repositories/IAuthRepositories";
import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

@injectable()
export class SigninService {

    constructor(
        @inject("AuthRepositories")
        private authRepositories: IAuthRepositories
    ) {}

    async execute(data: Auth) {
        const user = await this.authRepositories.findUserByEmail(data.email);

        if(!user) throw new Error("Email or password invalid");

        const passwordOk = await bcrypt.compare(data.password, user.password);
    
        if(!passwordOk) throw new Error("Email or password invalid");

        return this.authRepositories.generateToken(user._id);
    }
}