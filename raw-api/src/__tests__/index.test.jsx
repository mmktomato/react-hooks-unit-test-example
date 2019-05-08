import React from 'react';
import { render } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import { TestCounter, TestFormattedDate } from './TestComponent';

let container;

beforeEach(() => {
    container = document.createElement('div');

    // If your custom hook touchs DOM (like, measuring width and height, or dispatching events, or someting),
    // "container" must be attached to "document".
    //
    // document.body.appendChild(container);
});

afterEach(() => {
    // If you attach "container" to "document" in "beforeEach",
    // you should remove it from "document".
    //
    // document.body.removeChild(container);

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
            Simulate.click(button);
        });

        const div = container.querySelector('div');
        expect(div.textContent).toEqual('count: 1');
    });
});

describe('TestFormattedDate', () => {
    it('should show yyyy-mm-dd if dateStr is valid.', () => {
        act(() => {
            render(<TestFormattedDate initialDateStr='20190504' />, container);
        });

        const div = container.querySelector('div');
        expect(div.textContent).toEqual('2019-05-04');
    });

    it('should show yyyy-mm-dd if dateStr is changed.', () => {
        act(() => {
            render(<TestFormattedDate initialDateStr='20190504' />, container);

            const input = container.querySelector('input');
            input.value = '20001201';
            Simulate.change(input);
        });

        const div = container.querySelector('div');
        expect(div.textContent).toEqual('2000-12-01');
    });

    it('should show "invalid date" if dateStr is invalid.', () => {
        act(() => {
            render(<TestFormattedDate initialDateStr='abc' />, container);
        });

        const div = container.querySelector('div');
        expect(div.textContent).toEqual('invalid date');
    });
});
