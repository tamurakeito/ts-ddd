import { Hono } from "hono";
import { userUseCase } from "../infrastructure/DIContainer"; // DIコンテナからユースケースを取得

const app = new Hono();

app.get("/:id", async (c) => {
  const id = c.req.param("id");

  try {
    const user = await userUseCase.findById(id);

    if (!user) {
      return c.json({ message: "User not found" }, 404);
    }

    return c.json(user, 200);
  } catch (error) {
    // エラーハンドリング
    return c.json({ message: "An error occurred" }, 500);
  }
});

export const userController = app;
