import css from './StyledProps.css'
import { Intent } from './Intent'
import { Spacing } from './Spacing'
import { Color } from './Color'
import { KVO } from './Types'

/*
  List of styled props to loop through as you won't be
  able to do that with TypeScript type/inteface fields.
*/
const PropsList = [
  'intent',
  'margin',
  'padding',
  'font',
  'bold',
  'italic',
  'inline',
  'mono',
  'color',
  'background',
  'textAlign',
  'flex',
  'flexAlign',
  'flexDistribution',
  'border',
  'borderColor'
]

/**
 * Styled Props: Define reusable styles across components.
 * Inspired by https://styled-system.com/theme-specification
 */
export interface StyledProps {
  /** Component intent */
  intent?: Intent

  /** Component margin. Usually used for containers */
  margin?: Spacing

  /** Component padding. Usually used for containers */
  padding?: Spacing

  /** Component font size */
  font?: Spacing

  /** Make text bold */
  bold?: boolean

  /** Make text italic */
  italic?: boolean

  /** Render component as inline block */
  inline?: boolean

  /** Set font family to mono. Ussually used in for code or snippet */
  mono?: boolean

  /** Text color */
  color?: Color

  /** Background color */
  background?: Color

  /** Text align */
  textAlign?: 'center' | 'right'

  /** Component flex layout. Use in commbination with flexAlign and flexDistribution */
  flex?: boolean

  /** Component children flex layout content alignment (Note: Not everything below is implemented) */
  flexAlign?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center-center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'

  /** Component children flex layout content distribution */
  flexDistribution?: 'space-between'

  /** Component border */
  border?: boolean | 'top' | 'right' | 'bottom' | 'left'

  /** Border color */
  borderColor?: Color

  /** Component children */
  children: React.ReactNode
}

/** Generate classes from styled props */
export function styledClasses(props: StyledProps, className?: string) {
  const classNames = []

  classNames.push(css.reset, className)

  Object.keys(props).forEach(name => {
    classNames.push(css[name], css[(props as KVO)[name]])

    if ((props.bold || props.mono) && !props.font) {
      classNames.push(css.font)
    }
  })

  return classNames.filter(e => !!e).join(' ')
}

/** Return all props that are not styled props */
export function omitStyledProps(props: KVO): KVO {
  return Object.keys(props)
    .filter(key => !PropsList.includes(key))
    .reduce((obj: KVO, key) => {
      obj[key] = props[key]
      return obj
    }, {})
}
