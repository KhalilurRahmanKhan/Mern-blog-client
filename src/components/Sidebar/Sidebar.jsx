import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const [cat,setCat] = useState([]);

    useEffect(()=>{
        const fetchCat = async ()=>
        {
            const res = await axios.get("http://localhost:5000/api/category/");
            setCat(res.data);
        }
        fetchCat();
    },[])
    return (
        <div className="sidebar" >
            <div className="sidebarItem">
                <h2>About </h2>
                <img src="https://picsum.photos/200" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, maiores molestiae. Quasi assumenda nisi ipsa sunt rem eum doloremque quaerat!</p>
            </div>
            <div className="sidebarItem">
                <h2>Categories </h2>
                <ul>
                    {
                        cat.map(c=>(
                           <li> <Link to={`/?cat=${c.name}`} className="link"> {c.name} </Link></li>
                       
                        ))
                    }
                    
                   
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;