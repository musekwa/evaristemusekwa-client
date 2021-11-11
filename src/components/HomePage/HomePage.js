import React, { useState, useEffect, Children } from "react";
// import { Row, Col, Card, Nav } from "react-bootstrap";
import { Container, Tabs, Tab, Paper, Divider } from "@material-ui/core";
import "./homepage.css";
import styles from "./homepage.styles";
import PostCard from "../Posts/PostCard";

// test postcards
const postcards = [
  {
    title: "Lodash Fundamentals",
    category: "javascript",
    description: `Lodash has come to ease the programmer's life`,
    images: [
      {
       
      }
    ]
  }
];

const TabPanel = (props)=>{
  const { children, value, index } = props;
  return (
    <div>
      <h4>{value === index && children }</h4>
    </div>
  )
}

// Home page component
function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const [postcards, setPostCards] = useState([]);
  const classes = styles();

  const handleChange = (event, value) => {
    setValue(value);
  };

  // continuously check the window width resizing
  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);
  }, [isMobile]);

  console.log("value ", value);
  return (
    <Container>
      <Paper className={classes.root} centered>
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
        <Divider />
        <TabPanel value={value} index={0}>
          JavaScript
        </TabPanel>
        <TabPanel value={value} index={1}>
          Algorithms
        </TabPanel>
        <TabPanel value={value} index={2}>
          Uncategorized
        </TabPanel>
      </Paper>
    </Container>
  );
}

export default HomePage;
