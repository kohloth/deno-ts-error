/*
Deploys code to server and reboots server
*/

import { run } from "../utils/deno/run.ts";

run([
  "echo",
  "\"Pushing code to server\"",
]);
