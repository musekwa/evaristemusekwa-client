import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./core/NavBar/NavBar";
// import NotFound from "./core/NotFound/NotFound";
import Footer from "./core/Footer/Footer";
import AllPosts from "./components/AllPosts/AllPosts";
import Newsletter from "./components/Newsletter/Newsletter";
import Portfolio from './components/Portfolio/Portfolio';
import Post from "./components/Post/Post";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    demoAsyncCall().then(() => setLoading(false));
  }, []);
  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  if (loading) return null;

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about-me" element={<AboutMe />}></Route>
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/newsletter" element={<Newsletter />} />
        <Route exact path="/all-posts" element={<AllPosts />}></Route>
        {/* <Route exact path="/filtered-posts" element={<AllPosts />}></Route> */}
        <Route element={<Navigate to="/about-me" />} />
        {/* <Route element={<Navigate to="/about-me" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
