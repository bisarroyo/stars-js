import './style.css'

// Main container
const skyContainer = document.querySelector('.sky-container')

// Crete new stars elements for each size
const starsSmall = document.createElement('div')
const starsMedium = document.createElement('div')
const starsBig = document.createElement('div')

// add a class for each size
starsSmall.className = 'stars stars-small'
starsMedium.className = 'stars stars-Medium'
starsBig.className = 'stars stars-big'

// Append elements to main container
skyContainer.appendChild(starsSmall)
skyContainer.appendChild(starsMedium)
skyContainer.appendChild(starsBig)

const STARSCOLOR = [
  'rgba(255, 255, 255, 0.20)',
  'rgba(255, 255, 255, 0.40)',
  'rgba(255, 255, 255, 0.60)',
  'rgba(255, 255, 255, 0.80)',
  'rgba(255, 255, 255)'
]

const random = (max) => {
  const randomNum = Math.floor(Math.random() * max)
  return randomNum
}

const skyCreator = ({
  size = '2px',
  starsQuantity = 100,
  element = starsSmall,
  velocityMove = '20s',
  velocityBright = '1s',
  orientation = 'vertical'
}) => {
  element.style.setProperty('--size', size)
  const stars = []
  for (let i = 0; i < starsQuantity; i++) {
    const x = random(100)
    const y = random(100)
    const color = STARSCOLOR[random(STARSCOLOR.length)]
    orientation === 'vertical'
      ? stars.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`)
      : stars.push(`${x}vw ${y}vh 0 ${color}, ${x + 100}vw ${y}vh 0 ${color}`)
  }
  orientation === 'vertical'
    ? element.style.setProperty('--animation-name', 'moveStarsY')
    : element.style.setProperty('--animation-name', 'moveStarsX')
  element.style.setProperty('--space-layer', stars.join(','))
  element.style.setProperty('--durationMove', velocityMove)
  element.style.setProperty('--durationBright', velocityBright)
}

skyCreator({
  size: '1px',
  starsQuantity: 200,
  element: starsSmall,
  velocityMove: '50s',
  orientation: 'horizontal'
})

skyCreator({
  size: '2px',
  starsQuantity: 150,
  element: starsMedium,
  velocityMove: '45s',
  orientation: 'horizontal'
})

skyCreator({
  size: '5px',
  starsQuantity: 100,
  element: starsBig,
  velocityMove: '40s',
  orientation: 'horizontal'
})
