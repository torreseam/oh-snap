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
    //rendeds About the test
    //first test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('matches snapchot DOM node structure', () => {
        //render About 
        const { asFragment } = render(<About />);

        //test whether the expected & actual outcome match
        expect(asFragment()).toMatchSnapshot();
    })
})

