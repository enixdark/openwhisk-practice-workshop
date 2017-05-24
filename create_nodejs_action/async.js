function main(args) {
  console.log('hello world');
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve({ done: true })
    }, 20000)
  })
}