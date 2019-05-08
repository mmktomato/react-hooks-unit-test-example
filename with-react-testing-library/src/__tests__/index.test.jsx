import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { TestCounter, TestFormattedDate } from './TestComponent';

afterEach(cleanup);

describe('TestCounter', () => {
    it('should show an initial count.', () => {
        const initialCount = 5;
        const { getByText } = render(<TestCounter initialCount={initialCount} />);

        const div = getByText('count: 5');
        expect(div).toBeDefined();
    });

    it('should increment when the button is pushed.', () => {
        const { getByText } = render(<TestCounter />);

        const button = getByText('increment');
        fireEvent.click(button);

        const div = getByText('count: 1');
        expect(div).toBeDefined();
    });
});

describe('TestFormattedDate', () => {
    it('should show yyyy-mm-dd if dateStr is valid.', () => {
        const { getByText } = render(<TestFormattedDate initialDateStr='20190504' />);

        const div = getByText('2019-05-04');
        expect(div).toBeDefined();
    });

    it('should show yyyy-mm-dd if dateStr is changed.', () => {
        const { getByText, getByDisplayValue } = render(<TestFormattedDate initialDateStr='20190504' />);

        const input = getByDisplayValue('20190504');
        fireEvent.change(input, { target: { value: '20001201' } });

        const div = getByText('2000-12-01');
        expect(div).toBeDefined();
    });

    it('should show "invalid date" if dateStr is invalid.', () => {
        const { getByText } = render(<TestFormattedDate initialDateStr='abc' />);

        const div = getByText('invalid date');
        expect(div).toBeDefined();
    });
});
