import { User } from "modules/users/entities/User";
import bcrypt from 'bcrypt';
import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateService {
    constructor(
        @inject('UserRepositories')
        private userRepository: IUserRepositories
    ) {}

    async execute(body: User) {
        const hashPassword = await bcrypt.hash(body.password, 10);

        const userExists = await this.userRepository.findByEmail(body.email); 
        
        if (userExists) {
            throw new Error('User already exists');
        }

        await this.userRepository.create({...body, password: hashPassword});
        
    }
}