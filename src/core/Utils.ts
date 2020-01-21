import { MouseEvent, KeyboardEvent } from 'react'
import copy from 'clipboard-copy'
import { Intent } from './Intent'
import { Color } from './Color'

function stopEvent(event: MouseEvent | KeyboardEvent): void {
  event.stopPropagation()
  event.preventDefault()
}

const randomId = () =>
  Math.random()
    .toString(36)
    .substring(2)

function getIntentColors(intent: Intent) {
  let color: Color = Color.WHITE
  let backgroundColor

  switch (intent) {
    case Intent.PRIMARY:
      backgroundColor = Color.BLUE_500
      break
    case Intent.SUCCESS:
      backgroundColor = Color.GREEN_500
      break
    case Intent.WARNING:
      backgroundColor = Color.YELLOW_500
      break
    case Intent.DANGER:
      backgroundColor = Color.RED_500
      break
    default:
      color = Color.GREY_500
      backgroundColor = Color.WHITE
      break
  }

  return { color, backgroundColor }
}

// Convert UIKit named color into real CSS color
const getRealCSSColor = (color: Color) =>
  `var(--${color // eslint-disable-line
    .match(/[A-Z][a-z]+|[0-9]+|[a-z]+/g)!
    .join('-')
    .toLowerCase()})`

const Utils = { stopEvent, copy, randomId, getIntentColors, getRealCSSColor }

export { Utils }
