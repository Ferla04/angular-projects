
function addNumbers(a: number, b: number) {
  return a + b
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}` 
}

// console.log(addNumbers(1, 4))
// console.log(addNumbersArrow(4, 9))

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base
}

// console.log(multiply(2, 2))

interface Character {
  name: string
  hp: number
  showHp: () => void
}

const heal = ( character: Character, amount: number ) => {
  character.hp += amount;
}

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`)
  },
}

heal(strider, 20)
strider.showHp()

export {}