import { React } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Submit from "./pages/Submit";
import Feed from "./pages/Feed";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/submit" element={<Submit />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
