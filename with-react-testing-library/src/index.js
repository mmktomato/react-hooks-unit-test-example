import { useState, useEffect } from 'react';

export const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);

    return [count, increment];
};

// @param {string} initialDateStr formatted in yyyymmdd.
export const useFormattedDate = (initialDateStr) => {
    // yyyymmdd
    const [dateStr, setDateStr] = useState(initialDateStr);

    // yyyy-mm-dd
    const [formattedDateStr, setFormattedDateStr] = useState(null);

    useEffect(() => {
        const ymd = splitYearMonthDate(dateStr);

        if (ymd) {
            const [yyyy, mm, dd] = ymd;
            setFormattedDateStr(`${yyyy}-${mm}-${dd}`);
        } else {
            setFormattedDateStr(null);
        }
    }, [dateStr]);

    return [dateStr, formattedDateStr, setDateStr];
};

const splitYearMonthDate = (dateStr) => {
    if (!dateStr) {
        return null;
    }

    const m = dateStr.match(/^(\d{4})(\d{2})(\d{2})$/);
    if (!m || m.length !== 4) {
        return null;
    }

    return [m[1], m[2], m[3]];
}
