import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const create = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be  2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be  2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2) {
            setEmailError("Email must be  2 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length < 8) {
            setPasswordError("Password must be  8 characters");
        } else {
            setPasswordError("");
        }
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }
    return (
        <form onSubmit={create}>
            <div className='test'>
            <div>
                <label htmlFor="userFirstName" >First Name:</label>
                <input type="text" id='userFirstName' onChange={handleFirstName} />
                <p style={{color:"red"}}>{firstNameError}</p>
            </div>

            <div>
                <label htmlFor="userLastName">Last Name:</label>
                <input type="text" id='userLastName' onChange={handleLastName} />
                <p style={{color:"red"}}>{lastNameError}</p>
            </div>

            <div>
                <label htmlFor="userEmail">Email:</label>
                <input type="email" id='userEmail' onChange={handleEmail} />
                <p style={{color:"red"}}>{emailError}</p>
            </div>

            <div>
                <label htmlFor="userPassword">Password:</label>
                <input type="password" id='userPassword' onChange={handlePassword} />
                <p style={{color:"red"}}>{passwordError}</p>
            </div>

            <div>
                <label htmlFor="userConfirmPassword">Confirm Password:</label>
                <input type="password" id='userConfirmPassword' onChange={handleConfirmPassword} />
                <p style={{color:"red"}}>{confirmPasswordError}</p>
            </div>

            <button type="submit">create user</button>
            </div>
        </form>
        
    );
};

export default UserForm;
