import React from "react";
import styles from "./footer.styles";
import { Box, Container, Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  const classes = styles();

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
                <Typography variant="body1" align="center">
                  Home
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.optional}
                >
                  All Posts
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="center">
                  Portfolios
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.optional}
                >
                  Newsletter
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" align="center">
                  Search
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="center" gutterBottom>More About Me</Typography>
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
                <GitHubIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>
              <Grid item>
                <LinkedInIcon />
              </Grid>
              <Grid item>
                <FacebookIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center">
          Licensed under{" "}
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
            to="https://creativecommons.org/licenses/by/4.0/"
          >
            {" "}
            CC BY 4.0{" "}
          </Link>{" "}
          &copy; 2021 Musekwa
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
