import React from "react";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import BootstrapButton from "../CustomizedButtons/BootstrapButton";
import "./topPosts.css";
import styles from "./topPosts.styles";

function TopPosts({ topPosts }) {
  const classes = styles();

  return (
    <Paper square elevation={2}>
      {topPosts.map((post, index) => {
        return (
          <>
            <Link
              to={{
                pathname: "/post",
                search: `?title=${post.title}`,
                hash: "#hash-title",
                state: { Post: true },
              }}
              className="link"
            >
              <Grid container spacing={2} className={classes.topPostContainer}>
                <Grid item xs={4}>
                  <img
                    src={`${post.image}`}
                    alt=""
                    className={classes.topPostImg}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    className={classes.topPostTitle}
                    variant="h7"
                  >{`${post.title}`}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >{`${post.createdAt}`}</Typography>
                </Grid>
              </Grid>
            </Link>
            {index < 2 && <Divider />}
          </>
        );
      })}
    </Paper>
  );
}

export default TopPosts;
