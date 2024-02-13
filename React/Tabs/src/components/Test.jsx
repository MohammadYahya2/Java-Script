import React from 'react'

const Test = () => {
    const test = ["Yahya", "Amr", "Mutaz"]
    return (
    <ul>
        {test.map((item, i) => {
            <li key={i}>{item}</li>
        })}
    </ul>
    )
}

export default Test