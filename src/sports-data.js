const wikiCommons = 'https://upload.wikimedia.org/wikipedia/commons/'
const wikiEn = 'https://upload.wikimedia.org/wikipedia/en/'
const footballSrc = wikiCommons + '1/1b/American_football_icon_simple.svg'
const basketballSrc = wikiCommons + '7/7a/Basketball.png'
const baseballSrc = wikiCommons + '9/92/Baseball.svg'
const soccerSrc = wikiCommons + '6/6e/Football_%28soccer_ball%29.svg'
const starcraftSrc = wikiEn + '/2/20/StarCraft_II_-_Box_Art.jpg'

const sports = [
  { id: 1, title: 'Football', imageSrc: footballSrc },
  { id: 2, title: 'Basketball', imageSrc: basketballSrc },
  { id: 3, title: 'Baseball', imageSrc: baseballSrc },
  { id: 4, title: 'Soccer', imageSrc: soccerSrc },
  { id: 5, title: 'Starcraft', imageSrc: starcraftSrc }
]

export default sports;