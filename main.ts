import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { router } from "./router.tsx";

const app = new Hono();

const routes = app
  .use("*", logger())
  .use("/favicon.ico", serveStatic({ path: "./public/images/favicon.ico" }))
  .post("/api/users", (c) => {
    return c.json({
      message: `young man is 20 years old`,
    });
  })
  .get("/api/hoge", (c) => {
    console.log("yay hoge");
    return c.text("hello, hoge!!");
  })
  .route("/", router);

Deno.serve(app.fetch);

export type AppType = typeof routes;
