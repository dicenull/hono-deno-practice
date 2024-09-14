import { hc } from "hono/client";
import type { AppType } from "../main.ts";

const client = hc<AppType>("/");

const res = await client.api.users.$post();

if (res.ok) {
  const data = await res.json();

  console.log(data.message);
}

const hogeRes = await client.api.hoge.$get();

if (hogeRes.ok) {
  const data = await res.text();

  console.log(data);
}
