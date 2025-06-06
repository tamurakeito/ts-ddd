import { User } from "./User";
import { UserId } from "./UserId";

// リポジトリのインターフェース: データ永続化の「契約」を定義
// 実装はInfrastructure層で行うことで、Domain層はDBの詳細を知らなくて済む
export interface IUserRepository {
  findById(id: UserId): Promise<User | null>;
  save(user: User): Promise<void>;
}
