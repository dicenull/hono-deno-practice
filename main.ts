import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
app.get("/", serveStatic({ path: "./static/index.html" }));

const routes = app
  .post("/api/users", (c) => {
    return c.json({
      message: `young man is 20 years old`,
    });
  })
  .get("/api/hoge", (c) => {
    return c.text("hello, hoge!!");
  });

Deno.serve(app.fetch);

export type AppType = typeof routes;
