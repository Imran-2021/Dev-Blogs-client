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
                <Link className="text-linkrr "to="/home"><button className="mt-4 btn btn-warning px-4">writting blogs ?</button ></Link> <Link className="text-linkrr "to="/home"><button className="mt-4 mx-4 btn btn-warning px-4">Reading blogs ?</button></Link>
            </div>
        </div>
        <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia consequatur quibusdam soluta saepe ne?</p>
        <Blogs/>
        </>
    );
};

export default Home;