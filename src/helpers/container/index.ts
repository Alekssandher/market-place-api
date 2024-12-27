import { IAuthRepositories } from "modules/auth/repositories/IAuthRepositories";
import { AuthRepositoriesMongoDb } from "modules/auth/repositories/implementations/AuthRepositories";

import { UserRepositoryMongoDb } from "modules/users/repositories/implementations/UserRepositoriesMongoDb";
import { IUserRepositories } from "modules/users/repositories/IUserRepositories";

import { container } from "tsyringe";

container.registerSingleton<IUserRepositories>(
    "UserRepositories",
    UserRepositoryMongoDb
)

container.registerSingleton<IAuthRepositories>(
    "AuthRepositories",
    AuthRepositoriesMongoDb
)