import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    return(
        <>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </>
    );
}