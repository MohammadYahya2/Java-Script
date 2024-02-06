import React from 'react';
const PersonCard = (props) => {
    const{firstName,lastName,age,color}=props;
    return(
        <div>
            <h1>{firstName}{lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {color}</p>
        </div>
    );
}
export default PersonCard;
