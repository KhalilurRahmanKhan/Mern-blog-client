import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitleSm">Mern</div>
            <div className="headerTitleLg">Blog</div>
            <img src="https://picsum.photos/200" alt="" className="headerImg" />
        </div>
    );
};

export default Header;