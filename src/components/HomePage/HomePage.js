import React, { useState, useEffect, Children } from "react";
// import { Row, Col, Card, Nav } from "react-bootstrap";
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
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActionArea,
  Button,
  Chip,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import "./homepage.css";
import styles from "./homepage.styles";
import PostCard from "../Posts/PostCard";
import "./homepage.css";

// test postcards
const mostPopularPost = {
  javascript: [
    {
      title: "JavaScript Lodash Fundamentals",
      image: "/js1.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
    {
      title: "JavaScript Lodash Advanced Concepts",
      image: "/js2.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
    {
      title: "JavaScript Lodash Examples",
      image: "/js3.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
  ],
  algorithms: [
    {
      title: "Algorithms Lodash Fundamentals",
      image: "/js1.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
    {
      title: "Algorithms Lodash Advanced Concepts",
      image: "/js2.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
    {
      title: "Algorithms Lodash Examples",
      image: "/js3.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
  ],
  uncategorized: [
    {
      title: "Uncategorized Lodash Fundamentals",
      image: "/js1.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
    {
      title: "Uncategorized Lodash Advanced Concepts",
      image: "/js2.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
    {
      title: "Uncategorized Lodash Examples",
      image: "/js3.jpg",
      description: "This is a short post description",
      tags: ["javascript", "lodash"],
      content: "This is the long long long post content",
      created: "Jan 21, 2021",
    },
  ],
};

const TabPanel = (props) => {
  return <div>{props.children}</div>;
};

// Home page component
function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([]);
  const classes = styles();

  const handleChange = (event, value) => {
    setValue(value);
    const category =
      value === 0
        ? mostPopularPost["javascript"]
        : value === 1
        ? mostPopularPost["algorithms"]
        : mostPopularPost["uncategorized"];
    setCategory(category);
  };

  // continuously check the window width resizing
  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);

    const category =
      value === 0
        ? mostPopularPost["javascript"]
        : value === 1
        ? mostPopularPost["algorithms"]
        : mostPopularPost["uncategorized"];
    setCategory(category);
  }, [isMobile, value]);

  console.log("category length", category);

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
                      <BootstrapButton>
                        <ListItem className={classes.primary}>
                          <img
                            src={`${post.image}`}
                            alt=""
                            className="most-popular-post-image"
                            id=""
                          />
                          <ListItemText
                            primary={`${post.title}`}
                            secondary="Jan 21, 2021"
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

        <Grid className={classes.root} centered item>
          <Paper square elevation={2}>
            <Container>
              <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Link to={"#"}>
                  <img alt="post" src="/js1.jpg" className="all-post-image" />
                </Link>
                <Link to={"/about-me"}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ color: "#0d5b49", fontWeight: "bolder" }}
                  >
                    Lizard
                  </Typography>
                </Link>
                <div className={classes.chips}>
                  <Chip
                    size="large"
                    label="javascript"
                    component="a"
                    href="#chip"
                    clickable
                    style={{ color: "inherit" }}
                    className="chipItem"
                  />

                  <Chip
                    size="large"
                    label="javascript"
                    component="a"
                    href="#chip"
                    clickable
                    style={{ color: "inherit" }}
                    className="chipItem"
                  />
                </div>
                <Typography variant="body1" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <BootstrapButton>
                  Continue reading
                  <ArrowRightAltIcon />
                </BootstrapButton>
              </div>
            </Container>
          </Paper>
        </Grid>
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
    // borderBottom: "3px solid",
    lineHeight: 1.5,
    //  backgroundColor: "#0063cc",
    // borderColor: "#0d5b49",
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
