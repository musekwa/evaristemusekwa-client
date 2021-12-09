import React, { useState, } from "react";
import {
  FormControlLabel,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
  MobileStepper,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


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
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
      {
        title: "social network project",
        type: "full-stack",
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
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
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
      {
        title: "social network project",
        type: "full-stack",
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
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
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
      {
        title: "social network project",
        type: "full-stack",
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
      {
        title: "e-commerce project",
        type: "full-stack",
        description: "This is a memory project",
        tools: ["javascript", "react", "mongoDB"],
        image: "http://imageurl.com",
        sourceCode: "https://github.com/musekwa",
        link: "https://externallink.com",
      },
    ],
  },
];
function Portfolio() {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  
  const handleNext = ()=>{
    setActiveStep((previActiveStep) => previActiveStep + 1);
  }

  const handleBack = ()=>{
    setActiveStep((previActiveStep) => previActiveStep - 1);
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      <Grid
        container
        spacing={2}
        direction="column"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {projectCategories.map((category) => (
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
                  <Paper
                    style={{
                      display: "flex",
                      height: 100,
                      padding: "10px",
                      backgroundColor: "cyan",
                    }}
                    square
                    elevation={0}
                  >
                    <Typography>
                      {category.projects[activeStep].title}

                      <Typography variant="body2" color="textSecondary">
                        {category.projects[activeStep].description}
                      </Typography>
                    </Typography>
                  </Paper>
                  <img
                    style={{
                      maxWidth: 400,
                      height: 255,
                      overflow: "hidden",
                      display: "block",
                      width: "100%",
                    }}
                    src="js2.jpg"
                    alt={category.projects[activeStep].title}
                  />
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
