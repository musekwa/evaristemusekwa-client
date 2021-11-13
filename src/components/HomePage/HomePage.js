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
} from "@material-ui/core";
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
      created: "Jan 21, 2021",
    },
    {
      title: "JavaScript Lodash Advanced Concepts",
      image: "/js2.jpg",
      created: "Jan 21, 2021",
    },
    {
      title: "JavaScript Lodash Examples",
      image: "/js3.jpg",
      created: "Jan 21, 2021",
    },
  ],
  algorithms: [
    {
      title: "Algorithms Lodash Fundamentals",
      image: "/js1.jpg",
      created: "Jan 21, 2021",
    },
    {
      title: "Algorithms Lodash Advanced Concepts",
      image: "/js2.jpg",
      created: "Jan 21, 2021",
    },
    {
      title: "Algorithms Lodash Examples",
      image: "/js3.jpg",
      created: "Jan 21, 2021",
    },
  ],
  uncategorized: [
    {
      title: "Uncategorized Lodash Fundamentals",
      image: "/js1.jpg",
      created: "Jan 21, 2021",
    },
    {
      title: "Uncategorized Lodash Advanced Concepts",
      image: "/js2.jpg",
      created: "Jan 21, 2021",
    },
    {
      title: "Uncategorized Lodash Examples",
      image: "/js3.jpg",
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
                      {index < 2 && <Divider component="li" />}
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
              <div>
                <img alt="post" src="/js1.jpg" className="all-post-image" />

                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </div>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
