import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import logo from "./qtLogo.png";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ProfilePage from "./pages/ProfilePage";
import MarketingPage from "./pages/MarketingPage/MarketingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/welcome" component={Sidebar} />
        <Route path="/" component={MarketingPage} />
      </div>
    </Router>
  );
}

export default App;
