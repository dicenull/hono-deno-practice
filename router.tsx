import { Hono } from "hono";
import { Home } from "./static/index.tsx";

export const router = new Hono();

router
  .get("/", (ctx) => {
    return ctx.html(<Home />);
  })
