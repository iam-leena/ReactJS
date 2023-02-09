import React, { useState } from 'react'

const App = () => {

    const [count, setCount] = useState(0);

    const handleUp = () => {
        setCount(count + 1)
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleDown = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }

    return (
        <div>
            <p>The current count is  = {count} </p>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDown}>down</button>

        </div>
    )
}

export default App