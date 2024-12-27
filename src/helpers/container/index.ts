import { UserRepositoryMongoDb } from "modules/users/repositories/implementations/UserRepositoriesMongoDb";
import { IUserRepositories } from "modules/users/repositories/IUserRepositories";
import { container } from "tsyringe";

container.registerSingleton<IUserRepositories>(
    "UserRepositories",
    UserRepositoryMongoDb
)