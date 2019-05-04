import React from 'react';
import { useCounter, useFormattedDate } from '../index';

export const TestCounter = ({ initialCount = 0 }) => {
    const [count, increment] = useCounter(initialCount);
    return (
        <>
            <div>count: {count}</div>
            <button onClick={() => increment()}>increment</button>
        </>
    );
};

export const TestFormattedDate = ({ initialDateStr }) => {
    const [dateStr, formattedDateStr, setDateStr] = useFormattedDate(initialDateStr);
    return (
        <>
            <input value={dateStr} onChange={(e) => setDateStr(e.currentTarget.value)} />
            <div>{formattedDateStr || 'invalid date'}</div>
        </>
    );
}
