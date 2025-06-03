
interface Character {
  name: string
  hp: number
  skills: string[]
  hometown?: string
}

const skills: string[] = ['Bash', 'Counter', 'Healing']

const strider: Character = {
  name: 'Strider',
  hp: 20,
  skills,
}

strider.hometown = 'Rivendell'

console.table(strider)

export {}