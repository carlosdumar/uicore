import React from 'react'
import { render } from '@testing-library/react'
import { Avatar } from './Avatar'
import { getInitialsFromNameOrEmail, getSumOfAllCharacters } from './utils'

import { Color } from '../../core/Color'

describe('Render basic component', () => {
  test('should check snapshot with name', () => {
    const { container } = render(<Avatar backgroundColor={Color.RED_100} name="John Doe" />)
    expect(container).toMatchSnapshot()
  })
  test('should check snapshot with email', () => {
    const { container } = render(<Avatar backgroundColor={Color.RED_100} email="John.Doe@harness.io" />)
    expect(container).toMatchSnapshot()
  })
  test('should check snapshot with image', () => {
    const { container } = render(
      <Avatar backgroundColor={Color.RED_100} src="https://www.mangaship.com/Content/img/human-avatar.png" />
    )
    expect(container).toMatchSnapshot()
  })
  test('getInitials with name', () => {
    expect(getInitialsFromNameOrEmail('All Name Here')).toEqual('AH')
    expect(getInitialsFromNameOrEmail('All Name')).toEqual('AN')
    expect(getInitialsFromNameOrEmail('AllNameHere')).toEqual('A')
  })
  test('getInitials with email', () => {
    expect(getInitialsFromNameOrEmail('', 'AllNameHere@com')).toEqual('A')
    expect(getInitialsFromNameOrEmail('', 'AllName.here@com')).toEqual('Ah')
  })
  test('getSumofCharacters', () => {
    expect(getSumOfAllCharacters('abcd')).toEqual(10)
    expect(getSumOfAllCharacters('Abcd')).toEqual(10)
    expect(getSumOfAllCharacters('')).toEqual(0)
  })
})
