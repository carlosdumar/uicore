import React from 'react'
import { StyledProps, styledClasses } from '../../styled-props/StyledProps'
import styledClass from '../../styled-props/StyledProps.css'

type HeadingLevel = 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4'

interface Props extends StyledProps {
  /** Heading level ('1' -> h1, '2' -> h2, ..., '6' -> h6). Default is '1' */
  level?: HeadingLevel
}

/**
 * Heading renders consistent H1 to H6 elements.
 */
function Heading(props: Props) {
  const { level = 1, children } = props
  const Tag = `h${level}` as React.ElementType

  return <Tag className={styledClasses(props, styledClass.font, styledClass[`font-h${level}`])}>{children}</Tag>
}

export { Heading }
