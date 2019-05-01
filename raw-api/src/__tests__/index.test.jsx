import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { TestCounter } from './TestCounter';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('TestCounter', () => {
    it('should show an initial count.', () => {
        const initialCount = 5;
        act(() => {
            render(<TestCounter initialCount={initialCount} />, container);
        });

        const div = container.querySelector('div');
        expect(div.textContent).toEqual('count: 5');
    });

    it('should increment when the button is pushed.', () => {
        act(() => {
            render(<TestCounter />, container);

            const button = container.querySelector('button');
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        const div = container.querySelector('div');
        expect(div.textContent).toEqual('count: 1');
    });
});
