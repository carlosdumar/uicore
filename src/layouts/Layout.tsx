import React, { HTMLAttributes } from 'react'
import { Assign } from 'utility-types'
import { StyledProps, styledClasses, omitStyledProps } from '../styled-props/StyledProps'
import css from './Layout.css'
import { Spacing } from 'core/Spacing'
import { Masonry, MasonryRef, MasonryProps } from './Masonry'

export interface LayoutProps extends Assign<HTMLAttributes<HTMLDivElement>, StyledProps> {
  /** Spacing among children */
  spacing?: Spacing
}

function Vertical(props: LayoutProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      {...omitStyledProps(props)}
      className={styledClasses(props, css.vertical, css[`layout-spacing-${props.spacing}`])}>
      {props.children}
    </div>
  )
}

function Horizontal(props: LayoutProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      {...omitStyledProps(props)}
      className={styledClasses(props, css.horizontal, css[`layout-spacing-${props.spacing}`])}>
      {props.children}
    </div>
  )
}

const Layout = { Vertical: React.forwardRef(Vertical), Horizontal: React.forwardRef(Horizontal), Masonry }

export { Layout, MasonryRef, MasonryProps }
