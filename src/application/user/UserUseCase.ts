import { IUserRepository } from "../../domain/user/IUserRepository";
import { UserId } from "../../domain/user/UserId";
import { UserDTO } from "./UserDTO";

// ユースケース: ユーザー取得の具体的な手順を記述
export class UserUseCase {
  // DIP: 具象クラス(InMemoryUserRepository)ではなく、抽象(IUserRepository)に依存する
  constructor(private readonly userRepository: IUserRepository) {}

  async findById(id: string): Promise<UserDTO | null> {
    const userId = UserId.create(id);
    const user = await this.userRepository.findById(userId);

    if (!user) {
      return null;
    }

    return new UserDTO(user);
  }
}
