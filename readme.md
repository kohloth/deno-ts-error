Possible deno bug demo.

Deno version is:
deno 1.18.1 (release, x86_64-unknown-linux-gnu)
v8 9.8.177.6
typescript 4.5.2

Run this command:
deno run -A --unstable --config ./denoConfig.json ./procedures/push.ts

Error I am seeing is as below.
Interestingly, it works without the --config ./denoConfig.json flag.

error: TS2345 [ERROR]: Argument of type 'T' is not assignable to parameter of type 'never'.
      common.push(A[reverse ? A.length - i - 1 : i]);
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:32:19

TS2322 [ERROR]: Type 'import("https://deno.land/std@0.123.0/testing/_diff.ts").DiffType' is not assignable to type 'never'.
  Type 'import("https://deno.land/std@0.123.0/testing/_diff.ts").DiffType' is not assignable to type 'never'.
          type: swapped ? DiffType.removed : DiffType.added,
          ~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:120:11

TS2322 [ERROR]: Type 'T' is not assignable to type 'never'.
          value: B[b],
          ~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:121:11

TS2322 [ERROR]: Type 'import("https://deno.land/std@0.123.0/testing/_diff.ts").DiffType' is not assignable to type 'never'.
  Type 'import("https://deno.land/std@0.123.0/testing/_diff.ts").DiffType' is not assignable to type 'never'.
          type: swapped ? DiffType.added : DiffType.removed,
          ~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:126:11

TS2322 [ERROR]: Type 'T' is not assignable to type 'never'.
          value: A[a],
          ~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:127:11

TS2322 [ERROR]: Type 'import("https://deno.land/std@0.123.0/testing/_diff.ts").DiffType' is not assignable to type 'never'.
        result.unshift({ type: DiffType.common, value: A[a] });
                         ~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:131:26

TS2322 [ERROR]: Type 'T' is not assignable to type 'never'.
        result.unshift({ type: DiffType.common, value: A[a] });
                                                ~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:131:49

TS2322 [ERROR]: Type 'string' is not assignable to type 'never'.
          tokens[tokens.length - 1] += lines[i];
          ~~~~~~~~~~~~~~~~~~~~~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:287:11

TS2345 [ERROR]: Argument of type 'string' is not assignable to parameter of type 'never'.
          tokens.push(lines[i]);
                      ~~~~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:289:23

TS2345 [ERROR]: Argument of type 'DiffResult<string>' is not assignable to parameter of type 'never'.
      added.push(result);
                 ~~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:324:18

TS2345 [ERROR]: Argument of type 'DiffResult<string>' is not assignable to parameter of type 'never'.
      removed.push(result);
                   ~~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:327:20

TS2339 [ERROR]: Property 'value' does not exist on type 'never'.
        tokenize(a.value, { wordDiff: true }),
                   ~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:341:20

TS2339 [ERROR]: Property 'value' does not exist on type 'never'.
        tokenize(b?.value ?? "", { wordDiff: true }),
                    ~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:342:21

TS2339 [ERROR]: Property 'details' does not exist on type 'never'.
    a.details = createDetails(a, tokens);
      ~~~~~~~
    at https://deno.land/std@0.123.0/testing/_diff.ts:353:7

Found 14 errors.

