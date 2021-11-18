import React from "react";
import styles from "./footer.styles";
import { Button, Container, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const classes = styles();

  const openNewWindowTab = (url)=>{
    window.open(url);
  }

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.footer}>
          <Grid item xs={12} sm={8}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Link className={classes.internalLinks} to="/">
                  <Typography variant="body1" align="center">
                    Home
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.internalLinks} to="/all-posts">
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.optional}
                  >
                    All Posts
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.internalLinks} to="/portfolios">
                  <Typography variant="body1" align="center">
                    Portfolios
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.internalLinks} to="/newsletter">
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.optional}
                  >
                    Newsletter
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.internalLinks} to="/search">
                  <Typography variant="body1" align="center">
                    Search
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="center" gutterBottom>
              More About Me ...
            </Typography>
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              <Grid item>
                <Button
                  className={classes.externalLinksButton}
                  variant="text"
                  onClick={() => openNewWindowTab("https://github.com/musekwa")}
                >
                  <GitHubIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  className={classes.externalLinksButton}
                  onClick={() =>
                    openNewWindowTab("https://twitter.com/MusekwaEvariste")
                  }
                >
                  <TwitterIcon fontSize="large" />
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  className={classes.externalLinksButton}
                  onClick={() =>
                    openNewWindowTab("https://www.linkedin.com/in/musekwa/")
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </Button>
              </Grid>
              {/* <Grid item>
                <Button
                  variant="text"
                  className={classes.externalLinksButton}
                  onClick={() => openNewWindowTab("")}
                >
                  <FacebookIcon fontSize="large" />
                </Button>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center">
          Licensed under
          <Button
            variant="text"
            style={{ color: "inherit" }}
            onClick={() =>
              openNewWindowTab("https://creativecommons.org/licenses/by/4.0/")
            }
          >
            CC BY 4.0
          </Button>
          &copy; 2021 Musekwa
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
