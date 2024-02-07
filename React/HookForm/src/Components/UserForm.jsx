import React, { useState } from 'react';
import './styles.css';
const UserForm = (props) => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const createUser = (e) => {
    e.preventDefault();

    const newUser = {
    username: username,
    email: email,
    password: password
    };

setUsername("");
setEmail("");
setPassword("");
    console.log("Welcome", newUser);
};

return (
    <form onSubmit={createUser}>
        
        
    <div>
        <label>Username: </label>
        <input type="text" value={ username } onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div>
        <label>Email Address: </label>
        <input type="text"value={ email } onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div>
        <label>Password: </label>
        <input type="password"value={ password } onChange={(e) => setPassword(e.target.value)} />
    </div>
    <input type="submit" value="Create User" />
    <div className='btn'>
    
    Username:{ username }
    
    </div>
    <div className='btn'>
    Email Address: { email }
    </div>
    <div className='btn'>
    Password: { password }  
    </div>

    
    </form>
    
    
);


};


export default UserForm;
