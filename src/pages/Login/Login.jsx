import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import  './login.css';

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const {user,dispatch} = useContext(Context);
    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        dispatch({type:"LOGIN_START"});

        // try {
        //     const res = await axios.post("http://localhost:5000/api/auth/login",{
        //         user:userRef.current.value,
        //         password:passRef.current.value,
        //     });
        //     dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        // } catch (err) {
        //     dispatch({type:"LOGIN_FAILURE"});

        // }

    };

    console.log(user);
    return (
        <div className="login">
            <form className="loginForm"  >
                <h1>Login</h1>
                <div className="loginFormGroup">
                    <span>Username</span>
                    <input type="text" placeholder="Username" ref={userRef} />
                </div>
                <div className="loginFormGroup">
                    <span>Password</span>
                    <input type="password" placeholder="Password" ref={passRef} />
                </div>
                <button className="loginBtn" type="submit">Login</button>
            </form>
            <button className="alterBtn">
                <Link className="link" to="/register" >Register</Link>
            </button>
        </div>
    );
};

export default Login;