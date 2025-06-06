import { UserId } from "./UserId";

// エンティティ: アプリケーションの核となるオブジェクト。ビジネスルールを持つ。
export class User {
  readonly id: UserId;
  public name: string;

  constructor(id: UserId, name: string) {
    this.id = id;
    this.name = name;
  }

  // 例: ビジネスルール（名前を変更する際のロジックなど）
  changeName(newName: string): void {
    if (newName.length < 3) {
      throw new Error("Name must be at least 3 characters long.");
    }
    this.name = newName;
  }
}
