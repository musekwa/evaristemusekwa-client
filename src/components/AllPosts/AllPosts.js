import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Box,
  Divider,
} from "@material-ui/core";
//import { client } from "../../api";
//import axios from "axios";
//import { withStyles } from "@material-ui/styles";
import { useLocation, Link } from "react-router-dom";
import styles from "./allposts.styles";
import { allPosts } from "../../fakedata/fakedata.test";

const sortByMonth = (allPosts) => {
  let posts = [];
  for (let category in allPosts) {
    posts = posts.concat(allPosts[category]);
  }
  return posts.sort((post1, post2) => {
    //  console.log('month ', new Date(post1.createdAt).getMonth())
    return new Date(post1.createdAt) - new Date(post2.createdAt);
  });
};

function AllPosts() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const params = new URLSearchParams(location.hash);
  let month = 0;

  const classes = styles();
  useEffect(() => {
    const sortedPosts = sortByMonth(allPosts).reverse();
    setPosts(sortedPosts);
  }, []);
  //console.log(posts);
  return (
      <div
        style={{
          padding: 10,
          // backgroundColor: "cyan",
        }}
      >
        <Grid container direction="row">
          <Grid xs={12} direction="column" spacing={3}>
            {/* <Grid item className={classes.allpostTitle} > */}
            <Typography variant="h4" align="center">
              All Posts
            </Typography>
            {/* </Grid> */}
            {posts &&
              posts.map((post, index) => {
                let flag = 0;
                if (month !== new Date(post.createdAt).getMonth()) {
                  month = new Date(post.createdAt).getMonth();
                  flag = month;
                } else {
                  flag = 0;
                }

                return (
                  <>
                    {flag ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div className={classes.dates}>
                          {" "}
                          <Typography variant="h6" align="left">
                            {new Date(post.createdAt)
                              .toDateString()
                              .slice(4, 7) +
                              " " +
                              new Date(post.createdAt)
                                .toDateString()
                                .slice(11, 15)}
                          </Typography>
                        </div>
                      </div>
                    ) : null}
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
                  </>
                );
              })}
          </Grid>
        </Grid>
     
      {/* <div
        style={{
          border: "1px solid",
          width: "20%",
          backgroundColor: "red",
          position: "relative",
          top: 10,
        }}
      >
        <h1>Tags</h1>
      </div> */}
    </div>
  );
}

export default AllPosts;
