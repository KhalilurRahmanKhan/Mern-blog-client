import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
    const user = "";
    return (
        <div className="top">
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook-f"></i>
                <i className=" topIcon fab fa-instagram"></i>
                <i className=" topIcon fab fa-linkedin-in"></i>
            </div>
            <div className="topCenter">
                <ul className="menuList">
                    <li className="menuItem">
                        <Link className="link" to="/" >Home</Link>
                    </li>
                    <li className="menuItem">
                        <Link className="link" to="/about" >About</Link>
                    </li>
                    <li className="menuItem">
                        <Link className="link" to="/contact" >Contact</Link>
                    </li>
                    <li className="menuItem">
                    <   Link className="link" to="/write" >Write</Link>
                    </li>
                    <li className="menuItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? <img src="https://picsum.photos/200" alt="" className="topImg" /> :
                    (
                        <ul className="menuList">
                            <li className="menuItem">
                            <Link className="link" to="/login" >Login</Link>
                            </li>
                            <li className="menuItem">
                            <Link className="link" to="/register" >Register</Link>
                            </li>
                        </ul>

                    )

                }
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default Topbar;