import React from 'react'
import { render } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Render basic component', () => {
  test('should check snapshot with name', () => {
    const { container } = render(<Avatar color="red" name="John Doe" />)
    expect(container).toMatchSnapshot()
  })
  test('should check snapshot with email', () => {
    const { container } = render(<Avatar color="red" email="John.Doe@harness.io" />)
    expect(container).toMatchSnapshot()
  })
  test('should check snapshot with image', () => {
    const { container } = render(<Avatar color="red" src="https://www.mangaship.com/Content/img/human-avatar.png" />)
    expect(container).toMatchSnapshot()
  })
})
