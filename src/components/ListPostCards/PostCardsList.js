import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";
import { Button, Grid } from '@material-ui/core'
//import './listpostcards.css';

function PostCardsList({ postCards }) {

  return (
    <>
      {postCards &&
        postCards.map((post) => {
          return <PostCard post={post} />;
        })}
    </>
  );
  
}

export default PostCardsList;
