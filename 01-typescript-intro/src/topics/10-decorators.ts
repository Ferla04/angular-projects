function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log("Decorator called with constructor:", constructor);
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  }
}

@classDecorator
export class SuperClass {

  public myProperty: string = 'Abc123';

  print() {
    console.log('Hola Mundo');
  }
}

console.log(SuperClass)
console.log(new SuperClass())