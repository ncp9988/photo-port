import React from "react";

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // First test
    it('render', () => {
        render(<About />);
    });

    // Second test
    it('match snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})