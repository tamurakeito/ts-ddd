import { Hono } from "hono";
import { logger } from "hono/logger";
import { userController } from "./userController";

const app = new Hono();

// Middleware
app.use("*", logger());

// Routing
app.route("/users", userController);

app.get("/", (c) => {
  return c.text("Hello Hono with DDD!");
});

// appインスタンスをデフォルトエクスポートする
export default app;
