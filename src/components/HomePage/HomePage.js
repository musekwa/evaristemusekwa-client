import React, { useState, useEffect } from "react";
import { Divider, Grid } from "@material-ui/core";
import "./homepage.css";
import styles from "./homepage.styles";
import { allPosts, categories } from "../../fakedata/fakedata.test";
import TabCategory from "../../core/Tab/TabCategory";
import TopPosts from "../../core/TopPosts/TopPosts";
import PostCardsList from "../ListPostCards/PostCardsList";

// Home page component
function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  //  const [page, setPageNumber] = useState(0);
  const classes = styles();

  const getOneCategoryPosts = (category) => {
    const oneCategoryPosts = allPosts.filter(
      (post) => post.category === category
    );
    setSelectedCategory(oneCategoryPosts);
  };

  const handleCategory = (event, value) => {
    setValue(value);
    const category =
      value === 0 ? "javascript" : value === 1 ? "algorithms" : "uncategorized";
    setCategory(category);

    // You need to find parameters that determine
    // the selection of most popular posts
    getOneCategoryPosts(category);
  };

  useEffect(() => handleCategory(null, 0), []);

  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);
  }, [isMobile, value]);

  return (
    <div className={classes.root}>
      <Grid
        container
        xs={12}
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid centered item>
          <TabCategory
            isMobile={isMobile}
            handleCategory={handleCategory}
            value={value}
          />
        </Grid>
        <Divider />
        <Grid className={classes.homePostCard} item>
          <TopPosts topPosts={selectedCategory.slice(0, 3)} />
        </Grid>
        <Grid className={classes.homePostCard} item>
          <PostCardsList postCards={selectedCategory.slice(3)} />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
