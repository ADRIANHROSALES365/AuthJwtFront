import Header from "./Header";
import '../register.css';

const Register=()=>{
    return(
    <div id="register_div">
    <Header title="Sign Up"/>
        <form action="" method="Post">
            
                <ul>
                    <li>
                        <label htmlFor="">FullName</label>
                        <input name="register_name" type="text" />
                    </li>
                    <li>
                        <label htmlFor="">UserName</label>
                        <input id="input_username" name="register_username"type="text" />
                    </li>
                    <li>
                        <label htmlFor="">Password</label>
                        <input id="input_password" name="register_password" type="text" />
                    </li>

                </ul>
                <button id="register_button "type="submit">Register User</button>
            
        </form>
    </div>

    )
}

export default Register;