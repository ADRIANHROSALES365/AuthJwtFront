import '../form.css'
const Login = ()=>{
return(
    <div id='login'>
        <form action="" method="post">
        <ul>
            <li>
                <label htmlFor="user_name">UserName:</label>
                <input type="text" name="user_name" id="user_name" placeholder="Username" />
            </li>
            <li>
                <label htmlFor="user_name">Password:</label>
                <input type="text" name="pass" id="pass" placeholder="Password"/>
            </li>
        </ul>
        <button type="submit">Log In</button>
        </form>
    </div>

);
};

export default Login;