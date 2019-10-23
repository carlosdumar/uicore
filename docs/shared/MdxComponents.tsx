/*
 * This file contains mapping from MDX tags to UIKit Component.
 */

import React from 'react'
import { Link, Text, Heading, List, ListItem, Icons } from '../static'
import CodeBlock from './CodeBlock'

const BASE_URL = 'https://github.com/wings-software/uikit/edit/master/'

const Title = (props: React.ComponentProps<typeof Heading>) => {
  const children = props.children as string
  let _children: React.ReactNode[] | undefined
  const [title, link] = children.split(/\s?---\s?/)

  if (link) {
    _children = [
      <span key="title">{title}</span>,
      <Link flex={{ align: 'center-center' }} target="_blank" key="edit" href={`${BASE_URL}${link}`} font="small">
        <Icons.MainEdit width="12px" height="12px" />
        <span>&nbsp;Edit this page</span>
      </Link>
    ]
  }

  return (
    <Heading
      flex={{ align: 'center-center', distribution: 'space-between' }}
      bold
      level="1"
      {...props}
      children={_children || children}
    />
  )
}

export default {
  code: CodeBlock,

  a: (props: React.ComponentProps<typeof Link>) => <Link {...props} />,
  h1: Title,
  h2: (props: React.ComponentProps<typeof Heading>) => <Heading bold level="2" {...props} />,
  h3: (props: React.ComponentProps<typeof Heading>) => <Heading bold level="3" {...props} />,
  h4: (props: React.ComponentProps<typeof Heading>) => <Heading bold level="4" {...props} />,
  h5: (props: React.ComponentProps<typeof Heading>) => <Heading bold level="5" {...props} />,
  h6: (props: React.ComponentProps<typeof Heading>) => <Heading bold level="6" {...props} />,
  p: (props: React.ComponentProps<typeof Text>) => <Text {...props} inline={false} />,
  span: (props: React.ComponentProps<typeof Text>) => <Text {...props} />,
  ul: (props: React.ComponentProps<typeof Text>) => <List {...props} />,
  ol: (props: React.ComponentProps<typeof Text>) => <List ordered {...props} />,
  li: (props: React.ComponentProps<typeof Text>) => <ListItem {...props} />
}
