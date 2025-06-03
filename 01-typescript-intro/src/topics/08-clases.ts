// !Antiguo
// export class Person{
//   public name: string
//   private address: string

//   constructor(name: string, address: string) {
//     this.name = name
//     this.address = address
//   }
// }

// *Mejor
export class Person{
  constructor(
    public name: string, 
    private address: string = 'No Address'
  ) {}

  get() {
    console.log(this.address)
  }
}

// !Herencia: Cuando pasa más de dos niveles
// export class Hero extends Person {

//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, 'New York')
//   }
// }

// *Composición
export class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public person: Person
  ) {}

}

const tony = new Person('Tony Stark', 'New York')
const ironMan = new Hero('Ironman', 45, tony)
console.log(ironMan)
