
import { render, screen } from '@testing-library/react'
import HighOrderComponent from './HighOrderComponent'

describe('Should render Child', () => {
    it('the title is visible', () => {
        render(<HighOrderComponent />)
        expect(screen.getByText(/Children/i)).toBeInTheDocument()
    })
})
