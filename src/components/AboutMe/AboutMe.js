import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import styles from "./aboutme.styles";
import './aboutme.css'
import { Link } from "react-router-dom";

function AboutMe() {
  const classes = styles();
  return (
    <Container className={classes.containerRoot}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Paper className={classes.paperRoot}>
          <Typography align="left" variant="h4" component="h4">
            About Me
          </Typography>
          <Typography component="p" align="justify">
            <br />
            My name is Evariste Musekwa Iguna. I’m a Web Technologist with 4+
            years of experience, looking forwards to obtaining a Master’s Degree in Software
            Engineering and Web Technologies soon.
            <br /> <br />
            My passion is web applications development: programming, design (UI
            and UX), good application architecture, database design and
            implementation.
            <br /> <br />
            I'm good at HTML, CSS, JavaScript, including React.js, Node.js and
            Express.js. Sometimes, I build backend applications with either Java
            and Spring Boot or Python and Flask to serve either structured (with MySQL or PostgreSQL) 
            or unstructured (with MongoDB) data. 
            <br /> <br />
            Besides Portuguese and English, I fluently speak French. I strive to
            be a humble team player.
            <br /> <br />
            On my blog{" "}
            <Link to="/" style={{ color: "#0d5b49" }} href="#">
              https://evaristemusekwa.com
            </Link>{" "}
            , I publish weekly posts about countless computer science topics,
            mainly about JavaScript, Algorithms and Data Structures. Writing
            helps me sharpen my written communication skills and stay in touch
            with information technology progress.
            <br /> <br />
            I’m always interested in challenging projects and job opportunities.
            You’re welcome to contact me at{" "}
            <a style={{ color: "#0d5b49" }} href="#">
              musekwa2011@gmail.com
            </a>{" "}
            or write a message on{" "}
            <a style={{ color: "#0d5b49" }} href="#">
              LinkedIn.
            </a>
            <img src="./about-me-picture.jpeg" alt="Evariste Musekwa Iguna" />
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
}

export default AboutMe;
