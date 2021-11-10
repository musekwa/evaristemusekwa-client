import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import AllPosts from "./components/AllPosts/AllPosts";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about-me" component={AboutMe}></Route>
        <Route path="/all-posts" component={AllPosts}></Route>
      </Switch>
    </>
  );
}

export default App;
