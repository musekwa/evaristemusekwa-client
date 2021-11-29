
import React from 'react';
import { useLocation } from 'react-router-dom';

function Post() {
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title');
      
    return (
        <div style={{ minHeight: "100vh" }}>
            <h1>Single Post {title}</h1>
        </div>
    )
}

export default Post
