import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Divider,
  Grid,
  Typography,
  Chip,
} from "@material-ui/core";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import "./homepage.css";
import styles from "./homepage.styles";
import { mostPopularPosts, allPosts } from "../../fakedata/fakedata.test";
import TabCategory from "../Tab/TabCategory";
import TopThreePosts from "./TopThreePosts/TopThreePosts";
import BootstrapButton from "./CustomizedButtons/BootstrapButton";

// Home page component
function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([]);
  const [threeMostPopularPosts, setThreeMostPopularPosts] = useState([]);
  const classes = styles();

  const handleCategory = (event, value) => {
    setValue(value);
    const category =
      value === 0
        ? mostPopularPosts["javascript"]
        : value === 1
        ? mostPopularPosts["algorithms"]
        : mostPopularPosts["uncategorized"];
    setCategory(category);

    // You need to find parameters that determine
    // the selection of most popular posts
    setThreeMostPopularPosts(category.slice(0, 3));
  };

  useEffect(() => handleCategory(null, 0), []);

  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);
  }, [isMobile, value]);

  return (
    <>
      <Grid
        container
        xs={12}
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid className={classes.root} centered item>
          <TabCategory
            classes={classes}
            isMobile={isMobile}
            handleCategory={handleCategory}
            value={value}
          />
        </Grid>
        <Divider />
        <Grid className={classes.root} item>
          <TopThreePosts threeMostPopularPosts={threeMostPopularPosts} />
        </Grid>
      
        {category.map((post, index) => {
          return (
            <Grid className={classes.root} centered item>
              <Paper square elevation={2}>
                <Container>
                  <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Link
                      to={{
                        pathname: "/post",
                        search: `?tilte=${post.title}`,
                        hash: "#the-hash",
                        state: { Post: true },
                      }}
                    >
                      <img
                        alt="post"
                        src={`${post.image}`}
                        className="all-post-image"
                      />
                    </Link>
                    <Link
                      to={{
                        pathname: "/post",
                        search: `?tilte=${post.title}`,
                        hash: "#the-hash",
                        state: { Post: true },
                      }}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{
                          color: "#0d5b49",
                          fontWeight: "bolder",
                        }}
                        className="title"
                      >
                        {post.title}
                      </Typography>
                    </Link>
                    <div className={classes.chips}>
                      {post.tags.map((tag, index) => {
                        return (
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
                            className="chipItem"
                          />
                        );
                      })}
                    </div>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {post.description}
                    </Typography>
                    <BootstrapButton
                      component={Link}
                      to={{
                        pathname: "/post",
                        search: `?tilte=${post.title}`,
                        hash: "#the-hash",
                        state: { Post: true },
                      }}
                    >
                      Continue reading
                      <ArrowRightAltIcon />
                    </BootstrapButton>
                  </div>
                </Container>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default HomePage;
