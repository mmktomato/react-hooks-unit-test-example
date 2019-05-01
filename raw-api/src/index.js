import { useState } from 'react';

export const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);

    return [count, increment];
};
