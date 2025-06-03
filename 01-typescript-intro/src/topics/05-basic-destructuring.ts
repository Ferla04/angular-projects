
interface Details {
  author: string
  year: number
}

interface AudioPlayer {
  audioVolume: number
  songDuration: number
  song: string
  details: Details
}

const audioPlayer: AudioPlayer = {
  audioVolume: 0,
  songDuration: 0,
  song: 'Mess',
  details: {
    author: 'Bebe Rexha',
    year: 2018
  }
}

const { song, details: { author } } = audioPlayer

// console.log({ song,  author})

const [ , , trunks = 'Not Found']: string[] = ['Goku', 'Vegeta']

console.log('Personaje 3: ' + trunks)

export {}