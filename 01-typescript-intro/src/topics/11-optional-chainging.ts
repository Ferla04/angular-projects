
export interface Passenger {
  name: string
  children?: string[]
}

const passanger1: Passenger = {
  name: 'Fernando'
}

const passanger2: Passenger = {
  name: 'Mellisa',
  children: ['Natalia', 'Elizabeth']
}

console.log(passanger1.children?.length ?? 0)
