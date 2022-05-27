
export function saiHi(name: string): string {
  return "Hi," + name;
}

export function more(name: string, age: number): string {
  return "more name=" + name + "\t age=" + age;
}

export async function sleep(i: number): Promise<void> {
  const p = new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000);
  })
  await p
  console.log(new Date(), "run sleep ++++++", i)
}


export const modurlUrl = import.meta.url