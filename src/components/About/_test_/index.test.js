import React from 'react';
// render to "render" component cleanup to remove components from the DOM to prevent memory leaking and variable/data collisions between tests that could corrupt test results
import { render, cleanup } from '@testing-library/react';
// import extend-expect library from jest-dom (offers access to custom matchers used to test DOM elements)
import '@testing-library/jest-dom/extend-expect';
// import the About component
import About from '..';

// add utility function to keep things clean & ensure after each test there is no leftover memory data that could give us false results
afterEach(cleanup);

// use the describe function to declare component we are testing
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
