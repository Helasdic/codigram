import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPost from "./component/ListPost";
import Home from "./component/Home";
import Login from "./component/Login";
import Registration from "./component/Register";
import AddPost from "./component/AddPost";
import UpdatePost from "./component/EditPost";
import DetailPost from "./component/DetailPost";
import Navigation from "./component/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost" element={<UpdatePost />} />
        <Route path="/detailpost" element={<DetailPost />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Redirect from="/" to="/home" /> */}
      </Routes>
    </Router>
  );
}

export default App;
