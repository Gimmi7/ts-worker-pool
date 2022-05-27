import { WorkerWrap } from './workerwrap.js';
import { isMainThread } from "worker_threads";
import { modurlUrl } from "./taskset.js";

if (isMainThread) {
  const workerwrap = new WorkerWrap()

  workerwrap.on('exit', () => {
    console.log("worker wrap exite")
  })

  console.log("worker taskSize=", workerwrap.performance.eventLoopUtilization())
  const rspPromise = workerwrap.run(modurlUrl, "sleep")
  workerwrap.run(modurlUrl, "sleep")
  workerwrap.run(modurlUrl, "sleep")
  workerwrap.run(modurlUrl, "sleep")
  workerwrap.run(modurlUrl, "sleep")
  workerwrap.run(modurlUrl, "sleep")
  console.log("worker taskSize=", workerwrap.performance.eventLoopUtilization())

  console.log(await rspPromise)
  workerwrap.terminate()

  console.log("worker taskSize=", workerwrap.performance.eventLoopUtilization())

  setTimeout(() => {
    console.log("after 3s")
    console.log(new Date())
    console.log("worker taskSize=", workerwrap.performance.eventLoopUtilization())
    console.log(new Date())
    workerwrap.terminate()
  }, 3000);

}