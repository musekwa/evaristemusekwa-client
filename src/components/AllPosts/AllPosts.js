import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper, Chip, Box } from "@material-ui/core";
//import { client } from "../../api";
//import axios from "axios";
//import { withStyles } from "@material-ui/styles";
import { useLocation, Link } from "react-router-dom";
import styles from "./allposts.styles";
import { allPosts } from "../../fakedata/fakedata.test";

let arrayOfPosts = [];
for (let category in allPosts) {
  arrayOfPosts = arrayOfPosts.concat(allPosts[category]);
}

function AllPosts() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const params = new URLSearchParams(location.hash);
  // console.log("location", params);
  const classes = styles();

  useEffect(() => {
    setPosts(arrayOfPosts);
  }, []);
  console.log(posts);
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Grid container direction="row">
        <Grid xs={12} direction="column" spacing={3}>
          {posts &&
            posts.map((post, index) => {
              return (
                <Grid item centered className={classes.root}>
                  <Paper elevation={2} className={classes.paper}>
                    <Link
                      to={{
                        pathname: `/${post.title}`,
                      }}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <Typography className={classes.title} variant="h6">
                        {post.title}
                      </Typography>
                    </Link>
                    <Grid container direction="row" spacing={4}>
                      <Grid item xs>
                        <div style={{ marginTop: "10px" }}>
                          {post.tags.map((tag) => {
                            return (
                              <span style={{ marginRight: "10px" }}>
                                <Chip
                                  size="large"
                                  label={`${tag}`}
                                  component={Link}
                                  to={{
                                    pathname: "/all-posts",
                                    search: `?tag=${tag}`,
                                    hash: "#the-hash",
                                    state: { AllPosts: true },
                                  }}
                                  clickable
                                  style={{ color: "inherit" }}
                                  className="chips"
                                />
                              </span>
                            );
                          })}
                        </div>
                      </Grid>
                      <Grid item>
                        <Box
                          sx={{ fontStyle: "italic", fontSize: 14 }}
                          align="right"
                        >
                          {post.createdAt}
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}

export default AllPosts;
