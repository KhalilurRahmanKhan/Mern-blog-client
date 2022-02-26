import  './post.css';
import {Link} from "react-router-dom";

const Post = ({posts}) => {

    return (
        
        <div className="post">
            {posts.map(post=>(
                <div className="wrapper">
                {
                    post.photo ? (
                        <img src={post.photo} alt="" className="postImg" />
                    ) : (
                        <img src="https://picsum.photos/200" alt="" className="postImg" />
                    )
                }
                
                <div className="categoryBox">
                    <ul>
                        {
                            post.categories.map(c=>(

                                <li><Link to={`/?cat=${c}`} className="link"> {c} </Link></li>
                            ))
                        }
                        
                    </ul>
                </div>
                <Link to={`/post/${post._id}`} className="link"  >
                    <h2>{post.title}</h2>
                </Link>
                <div className="timeBox">
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p> {post.desc} </p>
            </div>
            ))}
                
        
           
          
           
        </div>
    );
};

export default Post;