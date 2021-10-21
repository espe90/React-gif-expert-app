import { useState } from "react";

export default function useCounter(initialcounter=10) {
    const [counter, setCounter] = useState(initialcounter)

    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    const reset = () => {
        setCounter(initialcounter);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
