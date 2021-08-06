import { render } from '@testing-library/react'
import IndexPage from '@/pages'

test('should message index page', () => {
  const { getByText } = render(<IndexPage />)
  expect(getByText('Encurtador de URL')).toBeInTheDocument()
})
