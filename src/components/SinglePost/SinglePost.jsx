import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './singlepost.css';

const SinglePost = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [post,setPost] = useState({});

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("http://localhost:5000/api/post/" + id);
            console.log(res);
            setPost(res.data);
        }
        getPost();
    },[id])
    return (
        <div className="singlePost">
            {
                post.photo && (

                    <img src={post.photo} alt="" />
                )
            }
            <h1>{post.title}
                <div className="editIcons">
                    <i class="far fa-edit"></i>
                    <i class="fas fa-trash"></i>
                </div>
            </h1>
            <div className="postInfo">
                
                    <span>Author: <Link to={`/?user=${post.username}`} className="link">{post.username} </Link></span>
                
                <span>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p>{post.desc}</p>
        </div>
    );
};

export default SinglePost;