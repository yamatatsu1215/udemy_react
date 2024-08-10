import { render, screen } from '@testing-library/react';
import Greet from "./Greet"

test('h1が存在するかどうか', () => { 
    render(<Greet></Greet>);
    const h1EL = screen.getByText("こんにちは");
    expect(h1EL).toBeInTheDocument();

    const radioEl = screen.getByRole('radio');
    debug(radioEl);
    
})