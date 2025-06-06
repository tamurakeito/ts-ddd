import { User } from "../../domain/user/User";

// Data Transfer Object: プレゼンテーション層に渡すためのプレーンなオブジェクト
export class UserDTO {
  readonly id: string;
  readonly name: string;

  constructor(user: User) {
    this.id = user.id.value;
    this.name = user.name;
  }
}
