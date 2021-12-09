import React from "react";
import {
  FormControlLabel,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const projectCategories = [
  {
    category: "MERN",
    description: `Short description Short description Short description 
                  Shortdescription Short description Short description Short
                    description Short description`,
    projects: [
      {
        title: "memories project",
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
        title: "memories project",
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
        title: "memories project",
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
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      <Grid
        container
        spacing={2}
         direction="column"
        style={{ display: "flex", justifyContent: "center",  }}
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
                  {category.category}{": "}
                  <span>{` ${category.projects.length} Projects`}</span>
                  <Typography variant="body2" color="textSecondary">
                  {category.description}
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  The click event of the nested action will propagate up and
                  expand the accordion unless you explicitly stop it.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
