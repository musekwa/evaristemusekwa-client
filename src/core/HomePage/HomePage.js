import React, { useState, useEffect } from "react";
import {
  Container,
  Tabs,
  Tab,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Button,
  Chip,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import "./homepage.css";
import styles from "./homepage.styles";
import { mostPopularPosts, allPosts } from "../../fakedata/fakedata.test";

// test postcards

const TabPanel = (props) => {
  return <div>{props.children}</div>;
};

// Home page component
function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([]);
  const classes = styles();
  //const { path, url} = match;

  //console.log('useHistory ', history);

  const handleChange = (event, value) => {
    setValue(value);
    const category =
      value === 0
        ? mostPopularPosts["javascript"]
        : value === 1
        ? mostPopularPosts["algorithms"]
        : mostPopularPosts["uncategorized"];
    setCategory(category);
  };

  // continuously check the window width resizing
  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);

    const category =
      value === 0
        ? mostPopularPosts["javascript"]
        : value === 1
        ? mostPopularPosts["algorithms"]
        : mostPopularPosts["uncategorized"];
    setCategory(category);
  }, [isMobile, value]);

  // console.log("category length", category);

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
          <Paper square>
            <Tabs
              value={value}
              onChange={handleChange}
              variant={!isMobile ? "standard" : "fullWidth"}
              classes={{
                root: classes.tabsRoot,
                indicator: classes.tabsIndicator,
              }}
            >
              <Tab
                variant="fixed"
                label="JavaScript"
                classes={{ root: classes.tabRoot }}
              />
              <Tab
                variant="fixed"
                label={
                  !isMobile ? "Algorithms & Data Structures" : "Algorithms"
                }
                classes={{ root: classes.tabRoot }}
              />
              <Tab
                variant="fixed"
                label="Uncategorized"
                classes={{ root: classes.tabRoot }}
              />
            </Tabs>
          </Paper>
        </Grid>
        <Divider />
        <Grid className={classes.root} centered item>
          <Paper square elevation={2}>
            <TabPanel category={category}>
              <List>
                {category.map((post, index) => {
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
                        <ListItem className={classes.primary}>
                          <img
                            src={`${post.image}`}
                            alt=""
                            className="most-popular-post-image"
                            id=""
                          />

                          <ListItemText
                            primary={`${post.title}`}
                            secondary={`${post.createdAt}`}
                            inset
                          />
                        </ListItem>
                      </BootstrapButton>
                      {index < category.length - 1 && (
                        <Divider component="li" />
                      )}
                    </>
                  );
                })}
              </List>
            </TabPanel>
          </Paper>
        </Grid>
        {Object.values(allPosts)
          .flat()
          .map((post, index) => {
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

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    color: "#0d5b49",
    padding: "6px 12px",
    lineHeight: 1.5,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      //   backgroundColor: "#C4C4C4",
      borderColor: "#0d5b49",
      color: "#0d5b49",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      //   backgroundColor: "#C4C4C4",
      borderColor: "#0d5b49",
    },
    "&:focus": {
      //     boxShadow: "0 0 0 0.2rem rgba(30, 130, 76, 1)",
    },
  },
})(Button);

export default HomePage;
