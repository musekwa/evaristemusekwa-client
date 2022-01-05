import React, { useState } from "react";
import {
  // FormControlLabel,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
  MobileStepper,
  Button,
  Container,
  Chip,
  Divider,
  Box,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from "@material-ui/icons/GitHub";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LaunchIcon from "@material-ui/icons/Launch";

const projectCategories = [
  {
    category: "MERN",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "memories-1 project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "social network project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
    ],
  },

  {
    category: "React",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "memories-2 project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "social network project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
    ],
  },
  {
    category: "MEAN",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "memories-3 project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "social network project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description:
          "This is a memory project This is a memory projectThis is a memory projectThis is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
        createdAt: "Jan 21, 2021",
      },
    ],
  },
];
const NumberOfProjectsCategories = projectCategories.length;
const initialState = Array(NumberOfProjectsCategories).fill(0);

console.log('initial state', initialState)

function Portfolio() {
  const [activeStep, setActiveStep] = useState(0);
  // const [activeReactStep, setActiveReactStep] = useState(0);
    // const [activeMernStep, setActiveMernStep] = useState(0);
      // const [activeMeanStep, setActiveMeanStep] = useState(0);
  const theme = useTheme();

  const openNewWindowTab = (url) => {
    window.open(url);
  };

  const handleNext = () => {
    setActiveStep((previActiveStep) => previActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((previActiveStep) => previActiveStep - 1);
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {projectCategories.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            lg={6}
            style={{
              minHeight: "20vh",
              alignSelf: "center",
            }}
          >
            <Accordion
              square
              style={{ minHeight: "inherit", paddingTop: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="pane1a-header"
              >
                <Typography variant="h5">
                  {category.category}
                  {": "}
                  <span>{` ${category.projects.length} Projects`}</span>
                  <Typography variant="body2" color="textSecondary">
                    {category.description}
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div style={{ maxWidth: "100%", flexGrow: 1 }}>
                  <Divider style={{}} />
                  <Paper
                    style={{
                      display: "flex",
                      height: 100,
                      // backgroundColor: "dimgray",
                    }}
                    square
                    elevation={0}
                  >
                    <Container component="div">
                      <Typography>
                        {category.projects[activeStep].title}

                        <Typography variant="body2" color="textSecondary">
                          {category.projects[activeStep].description}
                        </Typography>
                      </Typography>

                      <Grid container style={{ paddingTop: "10px" }}>
                        <Grid item xs={9}>
                          {category.projects[activeStep].tools.map((tool) => (
                            <Chip
                              size="small"
                              label={`${tool}`}
                              style={{ marginLeft: "2px" }}
                              // component={Link}
                              // to={{
                              //   pathname: "/all-posts",
                              //   search: `?tag=${tag}`,
                              //   hash: "#the-hash",
                              //   state: { AllPosts: true },
                              // }}
                              // clickable
                              // style={{ color: "inherit" }}
                              // className="chipItem"
                            />
                          ))}
                        </Grid>
                        <Grid item xs={3}>
                          <Box
                            sx={{ fontStyle: "italic", fontSize: 12 }}
                            align="right"
                          >
                            {category.projects[activeStep].createdAt}
                          </Box>
                          {/* <Typography variant="body2" color="textSecondary">
                            
                          </Typography> */}
                        </Grid>
                      </Grid>
                    </Container>
                  </Paper>
                  <img
                    style={{
                      maxWidth: 350,
                      height: 180,
                      overflow: "hidden",
                      display: "block",
                      width: "100%",
                    }}
                    src="js2.jpg"
                    alt={category.projects[activeStep].title}
                  />
                  <Grid container>
                    <Grid item xs={6} style={{ textAlign: "left" }}>
                      <Button
                        variant="text"
                        size="small"
                        // className={classes.externalLinksButton}
                        onClick={() =>
                          openNewWindowTab("https://github.com/musekwa")
                        }
                        style={{ textTransform: "capitalize" }}
                      >
                        <GitHubIcon
                          fontSize="small"
                          style={{ margin: "10px" }}
                        />
                        Visit code source
                      </Button>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "right" }}>
                      <Button
                        variant="text"
                        size="small"
                        // className={classes.externalLinksButton}
                        onClick={() =>
                          openNewWindowTab("https://github.com/musekwa")
                        }
                        style={{ textTransform: "capitalize" }}
                      >
                        Try it youself
                        <LaunchIcon
                          fontSize="small"
                          style={{ margin: "10px" }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                  <MobileStepper
                    steps={category.projects.length}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === category.projects.length - 1}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                        Next
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
