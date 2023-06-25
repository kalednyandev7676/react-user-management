import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/about";
import Home from "./components/Pages";
import SignUp from "./components/Pages/signup";
import Navbar from "./components/Navbar/navbar";
import Blogs from "./components/Pages/blogs";
import Teams from "./components/Pages/team";
import MaxHomePage from "./components/MAX/MaxHomePage";
import PostLists from "./components/POSTS/PostLists";
import Users from "./components/User/user";
import Login from "./components/Login/Login";
import { AuthContextProvide, LoginContext } from "./components/context/context";
import { NotFound } from "./components/Pages/not-found";
import Logout from "./components/Pages/logout";

const App = () => {

  return (
    <AuthContextProvide> 
    <Router>
      <Navbar />
      <Routes>     
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/udemy" element={<MaxHomePage />} />
        <Route path="/posts" element={<PostLists />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </AuthContextProvide>

  );
};

export default App;
