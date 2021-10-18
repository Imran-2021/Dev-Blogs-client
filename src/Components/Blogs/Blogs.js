import React, { useState } from 'react';
import FakeData from '../../FakeData';
import Blog from './Blog';
import "./Blogs.css"
const Blogs = () => {
    // const st = `Lorem ipsum <a href="facebook.com">as</a> dolor sit,  amet consectetur adipisicing elit. Sequi nesciunt impedit nemo necessitatibus natus iure? Consectetur tempora omnis, eligendi nemo accusantium vel sint provident vitae similique harum? Necessitatibus, praesentium veniam!`
    // const asd="www.google.com,www.yahoo.com,www.microsoft.com,asd"
    // const asp= asd.split(",")
    // asp.map(x=>console.log(x))
    // const asp = "there are many way to be come web dev . you can try to understand this topic with the help of google _ youtube or anything. you need to understand - , html ,css, js,telwind, css,php etc."
    // console.log("p",asp.split(".")[0],".");
    // console.log("h",asp.split(".")[1]);
    // console.log("topic",asp.split(",").slice(1));



    const [blogs, setBlogs] = useState(FakeData)
    console.log(blogs);

    return (
        <div className="bloggers">

            <h4 className="text-center text-white p-5">Lorem ipsum dolor sit.</h4>
            <p className="p-3 mx-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus laboriosam quos similique reprehenderit cumque eius perferendis, odio deleniti enim qui distinctio quibusdam cupiditate inventore sint deserunt esse, dignissimos nesciunt?</p>
            <div className="container bloggers-in">

                <div className="iinnn asdf ">
                    {
                        blogs.map(x => <Blog x={x} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Blogs;