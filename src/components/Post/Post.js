import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./post.styles";
import { allPosts } from "../../fakedata/fakedata.test";

function Post() {
    const location = useLocation();
    const title = new URLSearchParams(location.search).get('title');
    const [post, setPost] = useState({});
    const classes = styles();
    
    useEffect(()=>{
        const findPost = ()=>{
           const post = allPosts.find(post=>post.title === title)
           setPost(post);
        }
        findPost();
    }, [title])
      
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid className={classes.leftSide} item>
            <h2></h2>
          </Grid>
          <Grid className={classes.main} item>
            <Box square>
              <img className={classes.postImg} src={`${post.image}`} alt="" />
              <Typography variant="h4" className={classes.postTitle}>{post.title}</Typography>
              <main>
                  <Typography variant='body2' color='textSecondary'>{post.description}</Typography>
                   <Typography variant="body2">
                     {post.content}
                     </Typography> 
              </main>
            </Box>
          </Grid>
          <Grid className={classes.rightSide} item container>
            <h2></h2>
          </Grid>
        </Grid>
      </div>
    );
}

export default Post
