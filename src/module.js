export function ruslan(){
  console.log(`Hello from module js file`)
}

 async function start(){
  return await Promise.resolve('asyn is working!!!!')
}

start().then(console.log)
