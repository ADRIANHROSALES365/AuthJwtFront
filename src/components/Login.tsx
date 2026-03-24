import React, { useState } from 'react';
import '../form.css'
const Login = ()=>{
    //Use state of Username declared
        var [formData,setFormData]= useState({
            username:"",
            password:""
        });

        const HandleInputChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
            const {name , value}= e.target;
            setFormData({
                ...formData,[name]:value
            });
        };
return(
    <div id='login'>
        <form action="" method="post">
        <ul>
            <li>
                <label id='label_username' htmlFor="user_name">UserName:</label>
                <input type="text" name="username" id="user_name" placeholder="Username" value={formData.username} onChange={HandleInputChange}/>
                
            </li>
            <li>
                <label htmlFor="user_name">Password:</label>
                <input type="text" name="password" id="pass" placeholder="Password" value={formData.password} onChange={HandleInputChange}/>
            </li>
        </ul>
        <button id='send' type="submit">Log In</button>
        </form>

    </div>

);
};

export default Login;