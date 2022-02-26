import { useState } from 'react';
import { Link } from 'react-router-dom';
import  './register.css';
import axios from "axios";

const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [err,setErr] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setErr(false);
    //     try {
    //         const res = await axios.post("http://localhost:5000/api/auth/register",{
    //         username,email,password,
    //     });
    //     res.data && window.location.replace('/login');
    //     } catch (err) {
    //         setErr(true);
    //     }
        
    // }
    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <h1>Register</h1>
                
                <div className="loginFormGroup">
                    <span>Username</span>
                    <input onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username" />
                </div>
                <div className="loginFormGroup">
                    <span>Email</span>
                    <input onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email" />
                </div>
                <div className="loginFormGroup">
                    <span>Password</span>
                    <input onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                <button type='submit' className="loginBtn">Register</button>
                {err && <span style={{color:"red",fontSize:"12",fontStyle:"italic",marginTop:"5px",backgroundColor:"white",padding:"3px 5px",borderRadius:"2px"}} >Something went wrong!</span> }
            </form>
            <button className="alterBtn">
                <Link className="link" to="/login" >Login</Link>
            </button>
        </div>
    );
};

export default Register;