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
  const color: Color = Color.GREY_500
  let backgroundColor: Color = Color.WHITE

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
  }

  return { color, backgroundColor }
}

const Utils = { stopEvent, copy, randomId, getIntentColors }

export { Utils }
