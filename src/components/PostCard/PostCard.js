import React from 'react'
import { Grid, Container, Paper, Typography, Chip,  } from '@material-ui/core'
import { Link } from 'react-router-dom';
import styles from './postcard.styles.js'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BootstrapButton from '../../core/CustomizedButtons/BootstrapButton.js';

function PostCard({ post }) {
    const classes = styles();
  //  console.log('post ', post)
    return (
      <>
        <Paper square elevation={2} style={{ marginTop: 20, marginBottom: 20, }}>
          <Container>
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Link
                to={{
                  pathname: "/post",
                  search: `?title=${post.title}`,
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
                  search: `?title=${post.title}`,
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
              <Typography variant="body1" color="textSecondary" component="p">
                {post.description}
              </Typography>
              <BootstrapButton
                component={Link}
                to={{
                  pathname: "/post",
                  search: `?title=${post.title}`,
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
      </>
    );
}

export default PostCard
