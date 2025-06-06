// 値オブジェクト: IDを単なる文字列ではなく、意味のあるオブジェクトとして扱う
export class UserId {
  readonly value: string;

  private constructor(value: string) {
    if (value.length === 0) {
      throw new Error("UserId cannot be empty");
    }
    this.value = value;
  }

  static create(value: string): UserId {
    return new UserId(value);
  }
}
