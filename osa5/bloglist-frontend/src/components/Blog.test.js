import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  title: 'Testiblogi',
  author: 'Arthur',
  url: 'blogi.fi',
  likes: 10,
  user: {
    name: 'Jenni',
    username: 'Jemppa'
  }
}

test('renders only title and author', () => {

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'Testiblogi'
  )
  expect(component.container).toHaveTextContent(
    'Arthur')

  expect(component.container).not.toHaveTextContent(blog.url)
  expect(component.container).not.toHaveTextContent(blog.likes)
})