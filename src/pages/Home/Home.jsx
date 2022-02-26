import  './home.css';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await axios.get("http://localhost:5000/api/post"+search);
            setPosts(res.data);
        };
        fetchPost();
    },[search]);
    return (
        <>
            <Header/>
            <div className="home">
                <Post posts={posts} />
                <Sidebar/>
            </div>

        </>
    );
};

export default Home;