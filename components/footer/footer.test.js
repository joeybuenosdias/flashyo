import { render, screen } from '@testing-library/react'
import { Footer } from '@components'

describe('Footer Component', () => {
	it('renders Footer', () => {
		render(<Footer />)

		expect(screen.getByText(/footer/i)).toBeInTheDocument()
	})
})
