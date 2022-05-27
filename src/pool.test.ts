import { WorkerPool } from "./workerpool.js";
import { modurlUrl } from "./taskset.js";
const workerpool = WorkerPool.defaultPool()
workerpool.run(modurlUrl, "sleep")
await sleep(2000)

for (let i = 0; i < 10; i++) {
  workerpool.run(modurlUrl, "sleep", i)
}

await sleep(2000)
for (let i = 10; i < 20; i++) {
  workerpool.run(modurlUrl, "sleep", i)
}

async function sleep(ms) {
  const p = new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
  await p
}