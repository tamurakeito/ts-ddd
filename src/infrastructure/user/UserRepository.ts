import { User } from "../../domain/user/User";
import { UserId } from "../../domain/user/UserId";
import { IUserRepository } from "../../domain/user/IUserRepository";

// IUserRepositoryの実装クラス。
// 実際のアプリではここでPrismaやKyselyなどを使ってDBと通信する。
export class InMemoryUserRepository implements IUserRepository {
  private users: Map<string, User> = new Map();

  constructor() {
    // テスト用のダミーデータ
    const userId = UserId.create("1");
    const user = new User(userId, "Taro Yamada");
    this.users.set(user.id.value, user);
  }

  async findById(id: UserId): Promise<User | null> {
    const user = this.users.get(id.value);
    return user || null;
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id.value, user);
  }
}
