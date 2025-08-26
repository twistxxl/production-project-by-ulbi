import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/lib/Button/Button'


describe('Button', () => {
    test('with only first param', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('test clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
})