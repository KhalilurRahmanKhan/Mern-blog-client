import SinglePost from '../../components/SinglePost/SinglePost';
import Sidebar from '../../components/Sidebar/Sidebar';
import  './single.css';

const Single = () => {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        
        </div>
    );
};

export default Single;