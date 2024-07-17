import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for matchers like "toBeInTheDocument"
import User from './UserManagement'; // Adjust import according to your file structure

test('renders User component', () => {
    render(<User />);
    // Add assertions based on your component
    const element = screen.getByText(/some text/i);
    expect(element).toBeInTheDocument();
});
