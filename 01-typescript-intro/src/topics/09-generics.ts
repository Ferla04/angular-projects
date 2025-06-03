
export function whatsMyType<T>( argument: T ): T {
  return argument
}

let imString = whatsMyType<string>('Hola Mundo')
let imNumber = whatsMyType(100)
let imArray = whatsMyType([1,2,3,4,5])

console.log(imString.split(' '))
console.log(imNumber.toFixed())
console.log(imArray.join('-'))
