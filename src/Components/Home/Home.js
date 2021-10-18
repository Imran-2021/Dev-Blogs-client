import React from 'react';
import { Link } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import "./Home.css"
const Home = () => {
    return (
        <>
        <div className="home" style={{backgroundImage: "linear-gradient(rgb(219 220 224 / 0%), rgb(255 255 255)), url(Images/devshare.jfif)"}}>
            <div className="container">
                <h3 className="text-primaryy">Welcome to <span className="text-whitee">world of blogs.</span> !</h3>

                {/* mp it's only for me ! */}

                {/* <Link className="text-linkrr "to="/home"><button className="mt-4 btn btn-warning px-4">writting blogs ?</button ></Link>  */}
                
                <Link className="text-linkrr "to="/blogs"><button className="mt-4 btn btn-warning px-4">Reading blogs ?</button></Link>
            </div>
        </div>
        
        <Blogs/>
        </>
    );
};

export default Home;