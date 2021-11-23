
import React from 'react'
import { Paper, Grid, Typography, Divider } from "@material-ui/core"; 
import { Link } from 'react-router-dom';
import BootstrapButton from '../CustomizedButtons/BootstrapButton';
import './topthreeposts.css';


function TopThreePosts(props) {
    const { threeMostPopularPosts } = props; 
    return (
      <Paper square elevation={2}>
        {threeMostPopularPosts.map((post, index) => {
          return (
            <>
              <BootstrapButton
                component={Link}
                to={{
                  pathname: "/post",
                  search: `?title=${post.title}`,
                  hash: "#hash-title",
                  state: { Post: true },
                }}
              >
                <Grid
                  container
                  spacing={1}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid item xs={4}>
                    <img
                      src={`${post.image}`}
                      alt=""
                      className="most-popular-post-image"
                      id=""
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      className="title"
                      variant="h6"
                      style={{ fontFamily: "Arbutus Slab serif" }}
                    >{`${post.title}`}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >{`${post.createdAt}`}</Typography>
                  </Grid>
                </Grid>
              </BootstrapButton>
              {index < 2 && <Divider />}
            </>
          );
        })}
      </Paper>
    );
}


export default TopThreePosts
