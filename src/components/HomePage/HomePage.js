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
  ListItemAvatar,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@material-ui/core";
import "./homepage.css";
import styles from "./homepage.styles";
import PostCard from "../Posts/PostCard";
import "./homepage.css";

// test postcards
const postcards = {
  javascript: [
    {
      title: "JavaScript Lodash Fundamentals",
      image: "/js1.jpg",
    },
    {
      title: "JavaScript Lodash Advanced Concepts",
      image: "/js2.jpg",
    },
    {
      title: "JavaScript Lodash Examples",
      image: "/js3.jpg",
    },
  ],
  algorithms: [
    {
      title: "Algorithms Lodash Fundamentals",
      image: "/js1.jpg",
    },
    {
      title: "Algorithms Lodash Advanced Concepts",
      image: "/js2.jpg",
    },
    {
      title: "Algorithms Lodash Examples",
      image: "/js3.jpg",
    },
  ],
  uncategorized: [
    {
      title: "Uncategorized Lodash Fundamentals",
      image: "/js1.jpg",
    },
    {
      title: "Uncategorized Lodash Advanced Concepts",
      image: "/js2.jpg",
    },
    {
      title: "Uncategorized Lodash Examples",
      image: "/js3.jpg",
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
        ? postcards["javascript"]
        : value === 1
        ? postcards["algorithms"]
        : postcards["uncategorized"];
    setCategory(category);
  };

  // continuously check the window width resizing
  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);

    const category =
      value === 0
        ? postcards["javascript"]
        : value === 1
        ? postcards["algorithms"]
        : postcards["uncategorized"];
    setCategory(category);
  }, [isMobile, value]);

  return (
    <Grid
      container
      xs={12}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid className={classes.root} centered item>
        <Paper>
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
              label={!isMobile ? "Algorithms & Data Structures" : "Algorithms"}
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
        <Paper>
          <TabPanel category={category}>
            <List >
              {category.map((post) => {
                return (
                  <ListItem className={classes.primary}>
                    <img src={`${post.image}`} alt="" className="post-image" />
                    <ListItemText primary={`${post.title}`} inset />
                  </ListItem>

                  // <div>
                  //   <img src={post.image} alt="" className="post-image" />
                  //   <Typography variant="h6">{post.title}</Typography>
                  // </div>
                );
              })}
            </List>
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default HomePage;
