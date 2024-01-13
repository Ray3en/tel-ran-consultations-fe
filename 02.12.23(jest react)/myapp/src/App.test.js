import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from './App'

// test('test App', () => {
//     render(<App/>)
//     const h2_elem = screen.getByText('telran')
//     const btn_elem = screen.getByRole('button')
//     const inp_elem = screen.getByPlaceholderText('name')
//     expect(h2_elem).toBeInTheDocument()
//     expect(btn_elem).toBeInTheDocument()
//     expect(inp_elem).toBeInTheDocument()
//     screen.debug()
//     // expect(h2_elem).toMatchSnapshot()
// })

// test('test App v1', () => {
//     render(<App/>)
//     screen.debug()
//     expect(screen.queryByText('HELLO!')).toBeNull()
//     const btn_elem = screen.getByRole('button')
//     fireEvent.click(btn_elem)
//     expect(screen.queryByText('HELLO!')).toBeInTheDocument()
//     screen.debug()
// })

test('test App v2', async () => {
    render(<App/>)
    screen.debug()
    const h2_elem = await screen.findByText('HELLO!')
    expect(h2_elem).toBeInTheDocument()
    screen.debug()
})


// findAll
// findBy

// getAll
// getBy

// queryAll
// queryBy