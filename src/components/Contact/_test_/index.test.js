import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />)
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1contact')).toHaveTextContent('Contact Me')
        expect(getByTestId('buttoncontact')).toHaveTextContent('Submit');
    });
})