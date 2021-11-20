import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./core/AboutMe/AboutMe";
import HomePage from "./core/HomePage/HomePage";
import NavBar from "./core/NavBar/NavBar";
import NotFound from "./core/NotFound/NotFound";
import Footer from "./core/Footer/Footer";
import AllPosts from "./components/AllPosts/AllPosts";
import Newsletter from "./components/Newsletter/Newsletter";

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
        <Route exact path="/portfolios" element={<Navigate to="/about-me" />} />
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about-me" element={<AboutMe />}></Route>
        {/* <Route exact path="/post" element={<Post />} /> */}
        <Route exact path="/newsletter" element={<Newsletter />} />
        <Route exact path="/all-posts" element={<AllPosts />}></Route>
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
