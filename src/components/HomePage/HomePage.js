import React, { useState, useEffect } from "react";
import { Divider, Grid } from "@material-ui/core";
import "./homepage.css";
import styles from "./homepage.styles";
import { mostPopularPosts } from "../../fakedata/fakedata.test";
import TabCategory from "../../core/Tab/TabCategory";
import TopThreePosts from "../../core/TopThreePosts/TopThreePosts";
//import PostCard from "../PostCard/PostCard";
import PostCardsList from "../ListPostCards/PostCardsList";
import ReactPaginate from "react-paginate";
//import PaginatedPostCards from "../../components/ListPostCards/PaginatedPostCards";
//import PaginatedPostCards from "../ListPostCards/PaginatedPostCards";

// Home page component
function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState([]);
  const [threeMostPopularPosts, setThreeMostPopularPosts] = useState([]);
   const [page, setPageNumber] = useState(0);
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
    <div style={{ display: "flex", justifyContent: "center" }}>
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
            isMobile={isMobile}
            handleCategory={handleCategory}
            value={value}
          />
        </Grid>
        <Divider />
        <Grid className={classes.root} item>
          <TopThreePosts threeMostPopularPosts={threeMostPopularPosts} />
        </Grid>
        <Grid className={classes.root} item>
          <PostCardsList postCards={category} />
          {/* <PaginatedPostCards postCardsPerPage={3} category={category} /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
