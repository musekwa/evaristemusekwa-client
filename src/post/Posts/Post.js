
import React from 'react';
import { useLocation } from 'react-router-dom';

function Post() {
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title')
 
    console.log('location ', title);

  
    return (
        <div>
            <h1>Single Post {title}</h1>
        </div>
    )
}

export default Post
