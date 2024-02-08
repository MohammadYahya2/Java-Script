import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor, age } = props;
    const [currentAge, setCurrentAge] = useState(age);
    const IncrementAge = () => {
        setCurrentAge(currentAge + 1);
    };
    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button type="button"  onClick={IncrementAge}>Birthday Button for{firstName},{lastName}</button>
        </>
    );
}
export default PersonCard;