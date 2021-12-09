import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper, Chip, Box, TextField, Divider } from "@material-ui/core";

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
// return value: a set of all distinct tags
const getAllTags = (mergedPosts) => {
  let tags = new Set();
  mergedPosts.forEach((post) => {
    for (let i = 0; i < post.tags.length; i++) {
      if (!tags.has(post?.tags[i])) {
        tags.add(post.tags[i]);
      }
    }
    console.log("tags ", tags);
  });

  return tags;
};

function AllPosts() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState(new Set());
  const tag = new URLSearchParams(location.search).get("tag");
  let month = 0;
  const classes = styles();

  // useEffect(()=>{

  // })

  useEffect(() => {
    let mergedPosts = mergePostsCategories(allPosts);
    let tags = getAllTags(mergedPosts);
    setTags(tags);
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
      <Grid className={classes.gridRoot} direction="row">
        {/* left side pane goes here */}
        <Grid direction="column" spacing={2} className={classes.leftSide}>
          <Paper style={{ height: "60vh" }}>
            <Typography
              variant="h6"
              color="#0d5b49"
              style={{ marginBottom: "10px" }}
            >
              Search Pane
            </Typography>
            <Divider />
            <TextField />
          </Paper>
        </Grid>
        {/* main pane */}
        <Grid md={6} direction="column" spacing={3}>
          <Typography variant="h5" align="center">
            All Posts
            {tag ? (
              <Typography color="textSecondary" style={{ padding: "5px" }}>
                ("{tag.toLowerCase()}" is tagged in {`${posts.length}`}{" "}
                {posts.length <= 1 ? "post)" : "posts)"}
              </Typography>
            ) : (
              <Typography color="textSecondary" style={{ padding: "5px" }}>
                ({`${posts.length}`}{" "}
                {posts.length <= 1 ? "post)" : "posts from all categories)"}
              </Typography>
            )}
          </Typography>
          <br />
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
                    <Paper elevation={2} className={classes.itemPaper}>
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
                            sx={{ fontStyle: "italic", fontSize: 12 }}
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
          <Paper style={{ minHeight: "60vh" }}>
            <Typography
              variant="h6"
              color="#0d5b49"
              style={{ marginBottom: "10px" }}
            >
              Search by tags
            </Typography>
            <Divider />
            <Grid container spacing={1} style={{ padding: "10px" }}>
              {[...tags].map((tag) => (
                <Grid item>
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
                    style={{ color: "#0d5b49", margin: "1px" }}
                    className="chips"
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AllPosts;
