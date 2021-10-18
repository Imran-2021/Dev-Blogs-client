import React from 'react';
const Blog = (props) => {
       const {image,oneline,topic,id,descriptions,Documentations_Links,Video_Links}= props.x;
       console.log(image,oneline,topic,id,descriptions,Documentations_Links,Video_Links);
    return (
        <div className="as">
        <img src={image} width="100%" height="100%" alt="" />
        <div className="nimg">
        <h5>{topic.toUpperCase()}</h5>
        <p>{oneline.slice(0,40)} . . . . . . .</p>
        <h6 style={{fontWeight:"400"}}>{descriptions.slice(0,70).toLowerCase()} . . . . . . .</h6>
        <button className="btn btn-primary">read more</button>
        </div>
    </div>
    );
};

export default Blog;