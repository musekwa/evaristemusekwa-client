import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper, Chip, Box } from "@material-ui/core";

import { useLocation, Link } from "react-router-dom";
import styles from "./allposts.styles";
import { allPosts } from "../../fakedata/fakedata.test";

// posts come in an JS Object: each bject property
// take as value any array of posts
// The function merge all the posts into a unique array
// parameter: An object
// return value: an array
const mergePostsCategories = (allPosts) => {
  let posts = [];
  for (let category in allPosts) {
    posts = posts.concat(allPosts[category]);
  }
  return posts;
};

// Sort all the array of posts by the date of post creation
// parameter: an array of posts
// return value: a sorted array of posts
const sortPostsByCreatedDate = (mergedPosts) => {
  return mergedPosts.sort(
    (post1, post2) => new Date(post1.createdAt) - new Date(post2.createdAt)
  );
};

// Filter all the posts by their tags
// parameters: a tag and an array of posts
// return value: an array of filtered posts
const filterPostsByTag = (tag, posts = []) => {
  let filteredPosts = posts.filter((post) => {
    return post.tags?.includes(tag);
  });
  return filteredPosts;
};

// Get all the tags from all the posts
// parameter: an array of all posts
// return value: an array of all distinct tags
// const getAlltags = (mergedPosts)=>{
//   let tags = [];
//   array.forEach(element => {
    
//   });
// }

function AllPosts() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const tag = new URLSearchParams(location.search).get("tag");
  let month = 0;
  const classes = styles();

  useEffect(() => {
    let mergedPosts = mergePostsCategories(allPosts);
    let fetchedPosts = [];
    if (tag) {
      mergedPosts = filterPostsByTag(tag, mergedPosts).reverse();
    }
    fetchedPosts = sortPostsByCreatedDate(mergedPosts).reverse();

    setPosts(fetchedPosts);
  }, [tag]);

  return (
    <div
      style={{
        padding: 10,
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        direction="row"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* left side pane goes here */}
        <Grid direction="column" spacing={2} className={classes.leftSide}>
          <Box style={{ backgroundColor: "silver" }}>
            <Typography>Search Pane</Typography>
          </Box>
        </Grid>
        {/* main pane */}
        <Grid md={6} direction="column" spacing={3}>
          <Typography variant="h5" align="center">
            {tag ? (
              <span style={{ backgroundColor: "lightgreen", padding: "5px" }}>
                "{tag.toLowerCase()}" is tagged in {`${posts.length} posts.`}
              </span>
            ) : (
              "All Posts"
            )}
            <br />
          </Typography>
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
                          {new Date(post.createdAt).toDateString().slice(4, 7) +
                            " " +
                            new Date(post.createdAt)
                              .toDateString()
                              .slice(11, 15)}
                        </Typography>
                      </div>
                    </div>
                  ) : null}
                  <Grid item centered className={classes.item}>
                    <Paper elevation={2} className={classes.paper}>
                      <Link
                        to={{
                          pathname: "/post",
                          search: `?title=${post.title}`,
                          hash: "#hash-title",
                          state: { Post: true },
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
        {/* right side pane goes here */}
        <Grid direction="column" spacing={2} className={classes.rightSide}>
          <Box style={{ backgroundColor: "silver" }}>
            <Typography>Search Tags</Typography>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AllPosts;
