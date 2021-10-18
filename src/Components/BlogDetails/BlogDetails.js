import React from 'react';
import { useParams } from 'react-router';
import "./BlogDetails.css"
const BlogDetails = () => {
    const {nm}=useParams();
    console.log(nm);
    return (
        <div className="blg">
            <p>this is the details blog. </p>
        </div>
    );
};

export default BlogDetails;