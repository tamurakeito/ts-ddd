import { UserUseCase } from "../application/user/UserUseCase";
import { InMemoryUserRepository } from "./user/UserRepository";

// 依存関係をここで注入（Dependency Injection）する
const userRepository = new InMemoryUserRepository();
export const userUseCase = new UserUseCase(userRepository);
