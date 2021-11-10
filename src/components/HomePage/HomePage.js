import React, { useState, useEffect } from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";
import { Container, Tabs, Tab, Paper } from "@material-ui/core";
import "./homepage.css";
import styles from "./homepage.styles";

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState(0);
  const classes = styles();

  const handleChange = (event, value) => {
    setValue(value);
  };

  useEffect(() => {
    let flag = window.innerWidth <= 690;
    setIsMobile(flag);
  }, [isMobile]);

  console.log("value ", value);
  return (
    <Container>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant={!isMobile ? "standard" : "fullWidth"}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator,
          }}
        >
          <Tab
            variant="fixed"
            label="JavaScript"
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            variant="fixed"
            label="Algorithms"
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            variant="fixed"
            label="Data Structures"
            classes={{ root: classes.tabRoot }}
          />
          <Tab
            variant="fixed"
            label={!isMobile ? "Uncategorized Posts" : "Uncategorized"}
            classes={{ root: classes.tabRoot }}
          />
        </Tabs>
      </Paper>
    </Container>
    // <Container fluid>
    //   {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    //   <Row>
    //     <Col xs={0} md={2} lg={2} className="sidebar-left">
    //       xs=6 md=4
    //     </Col>
    //     <Col xs={12} md={8} lg={8} className="main">
    //       <Card className="most-popular-posts-card">
    //         <Card.Header className="most-popular-posts-card-header">
    //           {" "}
    //           <Nav
    //             className="most-popular-posts-container"
    //             variant="tabs"
    //             defaultActiveKey="#deets"
    //           >
    //             <Nav.Link
    //               id="javascript"
    //               className="most-popular-posts"
    //               href="#deets"
    //             >
    //               {"JavaScript"}
    //             </Nav.Link>
    //             <Nav.Link
    //               id="full-stack-tutorials"
    //               className="most-popular-posts"
    //               eventKey={2}
    //               href="#memes"
    //             >
    //               {!isMobile ? "Full-stack Tutorials" : "Tutorials"}
    //             </Nav.Link>
    //             <Nav.Link
    //               id="random-topics"
    //               className="most-popular-posts"
    //               href="#features"
    //             >
    //               {!isMobile ? "Uncategorized Topics" : "Uncategorized"}
    //             </Nav.Link>
    //           </Nav>
    //         </Card.Header>
    //         <Card.Body>
    //           <Card.Title>Special title treatment</Card.Title>
    //           <Card.Text>
    //             With supporting text below as a natural lead-in to additional
    //             content.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>{" "}
    //     </Col>
    //     <Col xs={0} md={2} lg={2} className="sidebar-right">
    //       xs=6 md=4
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default HomePage;
