
import React, { useState, useEffect, } from 'react';
import { Container } from '@material-ui/core';
import { client } from '../../api';
import axios from 'axios';

function AllPosts() {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5001/all-posts").then((posts)=>setAllPosts(posts.data))
    }, [])


    return (
        <Container>
            {

                allPosts && allPosts.map((post, key)=>(
                    <div>
                        {post.title}
                    </div>
                ))
            }
        </Container>
    )
}

export default AllPosts
