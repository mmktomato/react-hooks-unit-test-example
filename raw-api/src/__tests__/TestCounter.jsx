import React from 'react';
import { useCounter } from '../index';

export const TestCounter = ({ initialCount = 0 }) => {
    const [count, increment] = useCounter(initialCount);
    return (
        <>
            <div>count: {count}</div>
            <button onClick={() => increment()}>increment</button>
        </>
    );
};
