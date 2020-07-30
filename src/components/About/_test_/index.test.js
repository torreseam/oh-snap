import React from 'react';

//incorporate React testing Library 
import { render, cleanup } from "@testing-library/react";
//Import Jest-DOM Package
import '@testing-library/jest-dom/extend-expect';
//Import the About Component
import About from '..';



//configure testing environment -call global function from JEST
afterEach(cleanup);

//describe function to declare testing component
describe('About component', () => {
    // First test is baseline to verify the component is rendering
    it('renders', () => {
        render(<About />)
    })
    // Second test known as a "test case" will compare snapshot versions of the DOM node structure aka a serialized version of the DOM node structure, enabled by Jest
    it('matches snapshot DOM node structure', () => {
        // use asFragment function to return snapshot of Amount component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

