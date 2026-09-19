"use client"
import Title from "@/components/Title"
import { useState } from "react"

// Hook  =>  useState

function Pricing() {
    const [count, setCount] = useState(0)

    // ...
    // JS code
    // ...
    function handleClick(event) {
        let button = event.target
        if (button.name == 'inc') {
            setCount(count + 1)
        } else if (button.name == 'dec') {
            setCount(count - 1)
        } else {
            throw new Error("Invalid button name")
        }
    }

    return (
        <div className="pricing-page page-container">
            <Title title='Pricing Page'>
                <button onClick={handleClick} name="dec">Decrement</button>
                <b>{count}</b>
                <button onClick={handleClick} name="inc">Increment</button>
            </Title>
        </div>
    )
}

export default Pricing