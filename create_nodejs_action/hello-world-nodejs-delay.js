function main(args) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve({ "message": "Hello World" })
    }, 1000)
  })
}