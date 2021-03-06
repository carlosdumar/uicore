import { Classes } from '@blueprintjs/core'
import copy from 'clipboard-copy'
import React, { KeyboardEvent, MouseEvent } from 'react'
import { Popover } from '../components/Popover/Popover'
import { Text } from '../components/Text/Text'
import { Color } from './Color'
import { Intent } from './Intent'
import { OptionalTooltip } from './Types'

function stopEvent(event: MouseEvent | KeyboardEvent): void {
  event.stopPropagation()
  event.preventDefault()
}

const randomId = () => Math.random().toString(36).substring(2)

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

interface WrapOptionalTooltipProps extends OptionalTooltip {
  children: JSX.Element
}

export function WrapOptionalTooltip({ tooltip, tooltipProps, children }: WrapOptionalTooltipProps) {
  const isDark = tooltipProps?.isDark
  const content =
    typeof tooltip === 'string' ? (
      <Text
        padding="medium"
        style={{
          maxWidth: '500px',
          maxHeight: '500px',
          overflow: 'auto',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          hyphens: 'auto'
        }}
        color={(isDark && 'white') || undefined}>
        {tooltip}
      </Text>
    ) : (
      tooltip
    )

  // NextJS does not work well with usePortal={true}
  const isNext =
    typeof window !== 'undefined' && typeof window.next !== 'undefined' && typeof window.__NEXT_DATA__ !== 'undefined'

  return tooltip ? (
    <Popover
      usePortal={!isNext}
      boundary="viewport"
      position="top"
      interactionKind="hover"
      {...tooltipProps}
      popoverClassName={isDark ? Classes.DARK : undefined}
      content={content || ''}>
      {children}
    </Popover>
  ) : (
    children
  )
}

const Utils = { stopEvent, copy, randomId, getIntentColors, getRealCSSColor, WrapOptionalTooltip }

export { Utils }
