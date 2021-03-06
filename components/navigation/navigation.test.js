import { render, screen } from '@testing-library/react'
import { Navigation } from '@components'

describe('Navigation Component', () => {
	it('should render navigation text', () => {
		render(<Navigation />)

		expect(screen.getByText(/navigation/i)).toBeInTheDocument()
	})
})
