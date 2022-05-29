# @gimmi7/ts-worker-pool

## Getting Started

install @gimmi7/ts-worker-pool using npm:

```console
npm install @gimmi7/ts-worker-pool --save
```

Import WorkerPool and run a method with worker_threads pool:

```js
import { WorkerPool } from '@gimmi7/ts-worker-pool';
import { moduleurl } from './task.js';

const workerpool = WorkerPool.defaultPool()

const greeting = await workerpool.run<string>(moduleurl, "saihi", "gimmi7")
console.log(greeting)  // will print "hi,gimmi7"
```

task.ts

```js
export function saihi(name: string): string {
  return "hi," + name;
}

export const moduleurl = import.meta.url
```

## Rationale

* run a worker and listen message on default MessagePort

* a message contains (moduleurl, functionName, funcArgs)

* import module with moduleurl, then run the function with funcArgs

* wrap the function run in a promise, return immediate

* when the function ended, resolve the promise, or reject with error

* the worker can be reuseed, so we can maintain a woker pool
