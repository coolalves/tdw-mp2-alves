import { React } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Submit from "./pages/Submit";
import Feed from "./pages/Feed";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/submit" element={<Submit />} />
        <Route exact path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
