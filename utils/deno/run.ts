import { readLines } from "../../deps.ts";

export async function run(cmd: string[]) {
  const p = Deno.run({
    // @ts-ignore
    cmd,
    stdout: "piped",
    stderr: "piped",
  });

  for await (const line of readLines(p.stdout)) {
    console.log(line);
  }

  const { code } = await p.status();
  const rawOutput = await p.output();
  const rawError = await p.stderrOutput();

  if (code === 0) {
    await Deno.stdout.write(rawOutput);
  } else {
    const errorString = new TextDecoder().decode(rawError);
    console.log(errorString);
  }
}
