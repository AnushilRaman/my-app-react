import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(s => s + 1);///use of updater function when setting a state (queueing of multiple state updates.)
    }

    return (
        <>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score:{count}</h1>
        </>
    );
}